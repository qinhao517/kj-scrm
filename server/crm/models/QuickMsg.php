<?php

	namespace app\models;

	use app\components\InvalidDataException;
	use app\util\DateUtil;
	use app\util\SUtils;
	use Yii;

	/**
	 * This is the model class for table "{{%quick_msg}}".
	 *
	 * @property int         $id
	 * @property int         $uid         用户ID
	 * @property int         $author_id   公众号ID
	 * @property string      $content     快捷回复内容
	 * @property string      $create_time 创建时间
	 *
	 * @property WxAuthorize $author
	 * @property User        $u
	 */
	class QuickMsg extends \yii\db\ActiveRecord
	{
		/**
		 * {@inheritdoc}
		 */
		public static function tableName ()
		{
			return '{{%quick_msg}}';
		}

		/**
		 * {@inheritdoc}
		 */
		public function rules ()
		{
			return [
				[['uid'], 'required'],
				[['uid', 'author_id'], 'integer'],
				[['content'], 'string'],
				[['create_time'], 'safe'],
				[['author_id'], 'exist', 'skipOnError' => true, 'targetClass' => WxAuthorize::className(), 'targetAttribute' => ['author_id' => 'author_id']],
				[['uid'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['uid' => 'uid']],
			];
		}

		/**
		 * {@inheritdoc}
		 */
		public function attributeLabels ()
		{
			return [
				'id'          => Yii::t('app', 'ID'),
				'uid'         => Yii::t('app', '用户ID'),
				'author_id'   => Yii::t('app', '公众号ID'),
				'content'     => Yii::t('app', '快捷回复内容'),
				'create_time' => Yii::t('app', '创建时间'),
			];
		}

		/**
		 * @return \yii\db\ActiveQuery
		 */
		public function getAuthor ()
		{
			return $this->hasOne(WxAuthorize::className(), ['author_id' => 'author_id']);
		}

		/**
		 * @return \yii\db\ActiveQuery
		 */
		public function getU ()
		{
			return $this->hasOne(User::className(), ['uid' => 'uid']);
		}

		/**
		 * {@inheritDoc}
		 * @return bool
		 */
		public function beforeSave ($insert)
		{
			$this->content = rawurlencode($this->content);

			return parent::beforeSave($insert); // TODO: Change the autogenerated stub
		}

		/**
		 * {@inheritDoc}
		 */
		public function afterFind ()
		{
			if (!empty($this->content)) {
				$this->content = rawurldecode($this->content);
			}

			parent::afterFind();
		}

		/**
		 * @return array
		 */
		public function dumpData ()
		{
			$data = [
				'id'      => $this->id,
				'uid'     => $this->uid,
				'wx_id'   => '',
				'content' => $this->content,
			];

			if (!empty($this->author_id)) {
				$data['wx_id'] = $this->author->wxAuthorizeInfo->user_name;
			}

			return $data;
		}

		/**
		 * 创建快捷回复
		 *
		 * @param     $data
		 * @param int $quickId
		 *
		 * @return array
		 *
		 * @throws InvalidDataException
		 */
		public static function create ($data, $quickId = 0)
		{
			if (empty($data)) {
				throw new InvalidDataException('缺少必要参数！');
			}

			$quickMsg = '';
			if (!empty($quickId)) {
				$quickMsg = static::findOne(['id' => $quickId]);
			}

			if (empty($quickMsg)) {
				$quickMsg              = new QuickMsg();
				$quickMsg->create_time = DateUtil::getCurrentTime();
			}

			$quickMsg->setAttributes($data);

			if (!empty($quickMsg->dirtyAttributes)) {
				if (!$quickMsg->validate() || !$quickMsg->save()) {
					throw new InvalidDataException(SUtils::modelError($quickMsg));
				}
			}

			$quickMsg->content = rawurldecode($quickMsg->content);

			$result = $quickMsg->dumpData();

			return $result;
		}

		/**
		 * 获取已创建的快捷回复
		 *
		 * @param $uid
		 *
		 * @return array
		 *
		 * @throws InvalidDataException
		 */
		public static function get ($uid)
		{
			if (empty($uid)) {
				throw new InvalidDataException('缺少必要参数！');
			}

			$result = [];

			$quickMsgData = static::find()->where(['uid' => $uid])->orderBy(['create_time' => SORT_DESC])->all();

			if (!empty($quickMsgData)) {
				foreach ($quickMsgData as $quickMsgInfo) {
					array_push($result, $quickMsgInfo->dumpData());
				}
			}

			return $result;
		}
	}
