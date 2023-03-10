<?php
	/**
	 * Title: 内容标签及标签组
	 * User: fulu
	 * Date: 2021/2/22
	 */

	namespace app\modules\api\controllers;

	use app\components\InvalidDataException;
	use app\components\InvalidParameterException;
	use app\models\AttachmentTagGroup;
	use app\models\WorkTag;
	use app\modules\api\components\WorkBaseController;
	use app\util\SUtils;
	use app\util\WorkUtils;
	use moonland\phpexcel\Excel;

	class WorkAttachmentTagController extends WorkBaseController
	{
		public function beforeAction ($action)
		{
			return parent::beforeAction($action); // TODO: Change the autogenerated stub
		}

		/**
		 * Title: actionAddGroup
		 * @return int[]
		 * @throws InvalidDataException
		 * @throws InvalidParameterException
		 * @throws \yii\db\Exception
		 * @remark 添加修改内容标签分组
		 */
		public function actionAddGroup ()
		{
			if (\Yii::$app->request->isGet) {
				throw new InvalidParameterException("请求方式不正确");
			}
			$uid       = \Yii::$app->request->post("uid");
			$id        = \Yii::$app->request->post("id");
			$corpId    = \Yii::$app->request->post("corp_id");
			$status    = \Yii::$app->request->post("status", 1);
			$groupName = \Yii::$app->request->post("group_name");
			$pid       = \Yii::$app->request->post("pid", 0);
			$tagName   = \Yii::$app->request->post('tag_name', []);
			if (empty($uid)) {
				throw new InvalidDataException("参数不完整");
			}

			$GroupListsOld = $GroupListsNew = [];
			$Transaction   = \Yii::$app->mdb->beginTransaction();
			try {
				$SORT  = AttachmentTagGroup::find()->where(["uid" => $uid, "status" => 1])->orderBy(["sort" => SORT_DESC])->one();
				$Group = AttachmentTagGroup::CreatNoGroup($uid);
				if (!empty($id)) {
					$GroupModel = AttachmentTagGroup::findOne($id);
					if (!empty($pid) && $pid == $GroupModel->id) {
						throw new InvalidDataException("上级分组id不能是本身");
					}
					$AuthGroupName = AttachmentTagGroup::find()->where(["uid" => $uid, "name" => $groupName, "status" => 1])->andWhere(['!=', 'id', $id])->one();
					if (!empty($AuthGroupName)) {
						throw new InvalidDataException("分组已存在");
					}
				} else {
					$AuthGroupName = AttachmentTagGroup::findOne(["uid" => $uid, "name" => $groupName, "status" => 1]);
					if (!empty($AuthGroupName)) {
						throw new InvalidDataException("分组已存在");
					}

					if (!empty($tagName)){
						if (count($tagName) != count(array_unique($tagName))) {
							throw new InvalidParameterException('标签名称存在重复');
						}
						foreach ($tagName as $v) {
							$len = mb_strlen($v, "utf-8");
							if ($len > 15) {
								throw new InvalidParameterException('标签名称不能超过15个字');
							}
						}
						$tagHas = WorkTag::find()->andWhere(['tagname' => $tagName, 'is_del' => 0, 'type' => 3, 'corp_id' => $uid])->one();
						if (!empty($tagHas)) {
							throw new InvalidParameterException('标签名称不能重复');
						}
					}

					$GroupModel          = new AttachmentTagGroup();
					$GroupModel->corp_id = null;
					$GroupModel->uid     = $uid;
					$GroupModel->sort    = $SORT->sort + 1;
					$GroupModel->pid     = empty($pid) ? 0 : $pid;
				}
				if (!empty($status)) {
					$GroupModel->name = $groupName;
				}
				if ($Group->id == $pid) {
					throw new InvalidDataException("不可以在未分组下创建分组");
				}
				if ($Group->id == $id) {
					throw new InvalidDataException("未分组不允许修改");
				}
				$GroupModel->status = $status;
				if (!$GroupModel->validate() || !$GroupModel->save()) {
					throw new InvalidDataException(SUtils::modelError($GroupModel));
				}
				$parent                 = AttachmentTagGroup::GiveIdReturnParentId($uid, [$GroupModel->id]);
				$parent                 = isset($parent[$GroupModel->id]) ? $parent[$GroupModel->id] : [];
				$GroupModel->parent_ids = implode(",", $parent);
				$GroupModel->save();

				if ($status == 0) {
					WorkTag::updateAll(["group_id" => $Group->id], ["group_id" => $GroupModel->id, "type" => 3]);
				} elseif ($status == 1 && empty($id) && !empty($tagName)){
					WorkTag::add(0, $uid, $tagName, 3, $GroupModel->id);

					/**内容标签组所有上级新*/
					$GroupListsNew = AttachmentTagGroup::findOne($GroupModel->id);
					$GroupListsNew = (!empty($GroupListsNew) && !empty($GroupListsNew->parent_ids)) ? explode(",", $GroupListsNew->parent_ids) : [$GroupModel->id];
				}

				$Transaction->commit();
			} catch (\Exception $e) {
				$Transaction->rollBack();
				throw new InvalidDataException($e->getMessage());
			}

			return ["error" => 0, "id" => $GroupModel->id, "old_pid" => $GroupListsOld, "new_pid" => $GroupListsNew];

		}

		/**
		 * Title: actionGetGroupList
		 *
		 * @remark 获取内容标签分组数据
		 */
		public function actionGetGroupList ()
		{
			if (\Yii::$app->request->isGet) {
				throw new InvalidParameterException("请求方式不正确");
			}
			$corpId    = \Yii::$app->request->post("corp_id");
			$uid       = \Yii::$app->request->post("uid");
			$parent_id = \Yii::$app->request->post("parent_id") ?: 0;
			$tag       = \Yii::$app->request->post("tag", 0);
			$choose    = \Yii::$app->request->post("choose", 0);

			return AttachmentTagGroup::FormattingData($uid, $parent_id, $tag, $choose);
		}

		/**
		 * Title: actionGroupSort
		 *
		 * @throws InvalidParameterException
		 * @remark 分组排序
		 */
		public function actionGroupSort ()
		{
			if (\Yii::$app->request->isGet) {
				throw new InvalidParameterException("请求方式不正确");
			}

			$uid      = \Yii::$app->request->post("uid");
			if (\Yii::$app->cache->exists($uid)) {
				throw new InvalidDataException("正在操作...");
			}
			\Yii::$app->cache->set($uid, '1', 0.5);

			$corpId   = \Yii::$app->request->post("corp_id");
			$uid      = \Yii::$app->request->post("uid");
			$sort     = \Yii::$app->request->post("sort");
			$group_id = \Yii::$app->request->post("group_id");
			$parentId = \Yii::$app->request->post("parent_id");

			$Group = AttachmentTagGroup::findOne($group_id);
			if (!empty($Group)) {
				if (!empty($parentId)) {
					$child = AttachmentTagGroup::GivePidReturnId($uid, [$Group->id]);
					/**修改父级**/
					$Group->pid = $parentId;
					$Group->save();
				} else {
					$Group->pid = 0;
					$Group->save();
					$child = AttachmentTagGroup::GivePidReturnId($uid, [$Group->id]);
				}
				/**排序**/
				foreach ($sort as $k => $id) {
					$group       = AttachmentTagGroup::findOne($id);
					$group->sort = $k + 1;
					$group->save();
				}
				$parent       = AttachmentTagGroup::GiveIdReturnParentId($uid, [$Group->id]);
				$child        = isset($child[$Group->id]) ? $child[$Group->id] : [];
				$GroupListALL = [];
				/**重新更新所有的下级的上级关系**/
				if (!empty($child)) {
					foreach ($child as $item) {
						if ($item != $Group->id) {
							$parentTemp = AttachmentTagGroup::GiveIdReturnParentId($uid, [$item], $GroupListALL);
							\Yii::error($parentTemp, '$parentTemp');
							$parentTemp = isset($parentTemp[$item]) ? $parentTemp[$item] : [];
							$GroupTemp  = AttachmentTagGroup::findOne($item);
							if (!empty($GroupTemp)) {
								$GroupTemp->parent_ids = implode(",", $parentTemp);
								$GroupTemp->save();
							}
						}
					}
				}
				$parent            = isset($parent[$Group->id]) ? $parent[$Group->id] : [];
				$Group->parent_ids = implode(",", $parent);
				$Group->save();
			}

			\Yii::$app->websocket->send([
				'channel' => 'push-message',
				'to'      => $uid,
				'type'    => 'attachment_tag_sort',
				'info'    => [
					'type'     => 'attachment_tag_sort',
					'from'     => $uid,
					'corpid'   => $corpId,
					'parentId' => $parentId,
					'group_id' => $group_id,
					'sort'     => $sort,
				]
			]);

			return ["error" => 0];

		}

	}