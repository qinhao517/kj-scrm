<?php
	/**
	 * Create by PhpStorm
	 * User: dovechen
	 * Date: 2020/1/4
	 * Time: 15:35
	 */

	namespace app\queue;

	use app\models\AwardsActivity;
	use app\models\AwardsJoin;
	use app\models\Fans;
	use app\models\Fission;
	use app\models\FissionHelpDetail;
	use app\models\FissionJoin;
	use app\models\PublicSeaClaimUser;
	use app\models\PublicSeaProtect;
	use app\models\PublicSeaTransferDetail;
	use app\models\RedPack;
	use app\models\RedPackJoin;
	use app\models\WorkContactWay;
	use app\models\WorkContactWayBaidu;
	use app\models\WorkContactWayBaiduCode;
	use app\models\WorkContactWayLine;
	use app\models\WorkContactWayRedpacket;
	use app\models\WorkCorp;
	use app\models\WorkCorpAgent;
	use app\models\WorkCorpAuth;
	use app\models\WorkCorpBind;
	use app\models\WorkDismissUserDetail;
	use app\models\WorkExternalContact;
	use app\models\WorkExternalContactFollowUser;
	use app\models\WorkGroupClockActivity;
	use app\models\WorkPublicActivity;
	use app\models\WorkPublicActivityFansUser;
	use app\models\WorkSuiteConfig;
	use app\models\WorkUser;
	use app\models\WorkUserDelFollowUserDetail;
	use app\models\WorkWelcome;
	use app\models\ExternalTimeLine;
	use app\util\SUtils;
	use app\util\WorkUtils;
	use dovechen\yii2\weWork\src\dataStructure\EContactGetTransferResult;
	use dovechen\yii2\weWork\src\dataStructure\Message;
	use dovechen\yii2\weWork\src\dataStructure\TextMesssageContent;
	use yii\base\BaseObject;
	use yii\queue\JobInterface;

	class WorkExternalContactJob extends BaseObject implements JobInterface
	{
		public $xml;
		public $from = WorkUtils::FROM_SERVICE;

		public function execute ($queue)
		{
			$externalContactInfoData = SUtils::Xml2Array($this->xml);
			SUtils::arrayCase($externalContactInfoData);
			if ($this->from == WorkUtils::FROM_SERVICE) {
				$workSuiteConfig = WorkSuiteConfig::findOne(['suite_id' => $externalContactInfoData['suiteid']]);

				if (empty($workSuiteConfig)) {
					return false;
				}

				$authCorp = WorkCorp::findOne(['corpid' => $externalContactInfoData['authcorpid']]);

				if (empty($authCorp) || (!empty($authCorp->workCorpBind) && $authCorp->workCorpBind->external_status == WorkCorpBind::EXTERNAL_OPEN)) {
					return false;
				}

				$authCorpAuth = WorkCorpAuth::findOne(['suite_id' => $workSuiteConfig->id, 'corp_id' => $authCorp->id]);

				if (empty($authCorpAuth)) {
					return false;
				}
			} elseif ($this->from == WorkUtils::FROM_AGENT) {
				$authCorp = WorkCorp::findOne(['corpid' => $externalContactInfoData['tousername']]);

				$agentInfo = WorkCorpAgent::findOne(['corp_id' => $authCorp->id, 'agent_type' => WorkCorpAgent::CUSTOM_AGENT, 'close' => WorkCorpAgent::AGENT_NOT_CLOSE, 'is_del' => WorkCorpAgent::AGENT_NO_DEL]);

				if (empty($authCorp) || empty($agentInfo)) {
					return false;
				}
			} else {
				$authCorp = WorkCorp::findOne(['corpid' => $externalContactInfoData['tousername']]);

				if (empty($authCorp) || empty($authCorp->workCorpBind) || $authCorp->workCorpBind->external_status == WorkCorpBind::EXTERNAL_CLOSE) {
					return false;
				}
			}

			\Yii::error($externalContactInfoData, '$externalContactInfoData');
			try {
				if(\Yii::$app->cache->exists("$authCorp->id"."{$externalContactInfoData['externaluserid']}".$externalContactInfoData['changetype'])){
					return false;
				}
				\Yii::$app->cache->set("$authCorp->id"."{$externalContactInfoData['externaluserid']}".$externalContactInfoData['changetype'],1,5);
				$state = !empty($externalContactInfoData['state']) ? $externalContactInfoData['state'] : '';

				if (in_array($externalContactInfoData['changetype'], [WorkExternalContact::ADD_EXTERNAL_CONTACT, WorkExternalContact::ADD_HALF_EXTERNAL_CONTACT, WorkExternalContact::EDIT_EXTERNAL_CONTACT])) {
					try {
						$workExternalUserId = WorkExternalContact::getUserSuite($authCorp->id, $externalContactInfoData['externaluserid'], WorkUtils::FROM_BIND, $externalContactInfoData['userid'], $state, WorkExternalContact::EVENT_EXTERNAL_CONTACT);
					} catch (\Exception $e) {
						\Yii::error($e->getMessage(), 'WorkExternalContactJob-getUserSuite-bind');
						$workExternalUserId = 0;
					}

					if ($workExternalUserId == 0) {
						try {
							$workExternalUserId = WorkExternalContact::getUserSuite($authCorp->id, $externalContactInfoData['externaluserid'], $this->from, $externalContactInfoData['userid'], $state, WorkExternalContact::EVENT_EXTERNAL_CONTACT);
						} catch (\Exception $e) {
							\Yii::error($e->getMessage(), 'WorkExternalContactJob-getUserSuite-' . $this->from);
						}
					}

					if ($workExternalUserId == 0) {
						return false;
					}
					//?????????
					if (!empty($externalContactInfoData['welcomecode'])) {
						$workUser = WorkUser::findOne(['corp_id' => $authCorp->id, 'userid' => $externalContactInfoData['userid']]);
						if (empty($workUser)) {
							return false;
						}
						try {
							WorkWelcome::send($authCorp->id, $externalContactInfoData['welcomecode'], WorkWelcome::SEND_USER, $workUser->id, $workExternalUserId, $externalContactInfoData['userid'],$state);
						} catch (\Exception $e) {
							\Yii::error($e->getMessage(), 'workWelcomeSend');
						}
					}

					//????????????
					$stateData = explode('_', $state);

					if (count($stateData) > 1) {
						switch ($stateData[0]) {
							case WorkContactWay::DEFAULT_WAY_PRE:
								// ????????????
								$contactWay = WorkContactWay::findOne($stateData[1]);
								if (!empty($contactWay)) {
									$state = $contactWay->title;
								}

								break;
							case Fission::FISSION_HEAD:
								// ????????????
								$fission = Fission::findOne($stateData[1]);
								if (!empty($fission)) {
									$state = "????????????-" . $fission->title;
								}

								break;
							case AwardsActivity::AWARD_HEAD:
								// ????????????
								$award = AwardsActivity::findOne($stateData[1]);
								if (!empty($award)) {
									$state = "????????????-" . $award->title;
								}

								break;
							case RedPack::RED_HEAD:
								// ????????????
								$redPack = RedPack::findOne($stateData[1]);
								if (!empty($redPack)) {
									$state = "????????????-" . $redPack->title;
								}

								break;
							case WorkContactWayBaiduCode::BAIDU_HEAD:
								// ????????????
								$baiduWay = WorkContactWayBaidu::findOne($stateData[1]);
								if (!empty($baiduWay)) {
									$state = "????????????-" . $baiduWay->title;
								}

								break;
							case WorkContactWayRedpacket::REDPACKET_WAY:
								// ????????????
								$redpacketWay = WorkContactWayRedpacket::findOne(['corp_id' => $authCorp->id, 'state' => $state]);
								if (!empty($redpacketWay)) {
									$state = "????????????-" . $redpacketWay->name;
								}else{
									$state = '????????????';
								}
								break;
							case WorkPublicActivity::STATE_NAME:
								$activity = WorkPublicActivity::findOne($stateData[1]);
								if (!empty($activity)) {
									$state = "????????????-" . $activity->activity_name;
								}else{
									$state = "????????????";
								}
								break;
							case WorkGroupClockActivity::NAME:
								$punch = WorkGroupClockActivity::findOne($stateData[1]);
								if (!empty($punch)) {
									$state = "?????????-" . $punch->title;
								} else {
									$state = "?????????";
								}
								break;
						}
					}

					if ($externalContactInfoData['changetype'] != WorkExternalContact::EDIT_EXTERNAL_CONTACT) {
						$externalContact = WorkExternalContact::findOne($workExternalUserId);
						if (!empty($externalContact)) {

							if (!empty($authCorp->workCorpAgents)) {
								$suiteId = '';
								if (!empty($workSuiteConfig)) {
									$suiteId = $workSuiteConfig->id;
								}

								$cacheKey = 'send_add_external_' . $externalContact->external_userid . '_' . $externalContactInfoData['userid'];

								foreach ($authCorp->workCorpAgents as $agent) {
									$hasGot = !empty(\Yii::$app->cache->get($cacheKey)) ? \Yii::$app->cache->get($cacheKey) : false;
									if (!$hasGot && $agent->close == WorkCorpAgent::AGENT_NOT_CLOSE && $agent->is_del == WorkCorpAgent::AGENT_NO_DEL && in_array($agent->agent_type, [WorkCorpAgent::CUSTOM_AGENT, WorkCorpAgent::AUTH_AGENT]) && $agent->suite_id == $suiteId) {
										\Yii::$app->cache->set($cacheKey, true, 5);
										$workUser = WorkUser::findOne(['corp_id' => $authCorp->id, 'userid' => $externalContactInfoData['userid']]);

										if (!empty($state)) {
											\Yii::error($state,'sym$state');
											$messageContent = '?????? ' . $externalContact->name . ' ???????????? ' . $state . ' ?????????????????????';
										} else {
											$messageContent = '?????? ' . $externalContact->name . ' ??????????????????';
										}
										//?????????
										$time      = time();
										$claimUser = PublicSeaClaimUser::find()->where(['corp_id' => $authCorp->id, 'new_user_id' => $workUser->id, 'external_userid' => $externalContact->id])->andWhere(['between', 'add_time', $time - 600, $time + 600])->one();
										if (!empty($claimUser)) {
											$oldWorkUser = WorkUser::findOne($claimUser->old_user_id);
											if (!empty($oldWorkUser)) {
												$messageContent = '?????????' . $workUser->name . '???????????????????????????????????????' . $oldWorkUser->name . '???????????????' . $externalContact->name . '???';
											}
										}

										$this->messageSend([$workUser->userid], $agent, $messageContent, $authCorp);
									}
								}
							}
						}
					}
				}

				if ($externalContactInfoData['changetype'] == WorkExternalContact::DEL_EXTERNAL_CONTACT || $externalContactInfoData['changetype'] == WorkExternalContact::DEL_FOLLOW_USER) {
					$externalContact = WorkExternalContact::findOne(['corp_id' => $authCorp->id, 'external_userid' => $externalContactInfoData['externaluserid']]);
					if (empty($externalContact)) {
						return false;
					}

					$workUser = WorkUser::findOne(['corp_id' => $authCorp->id, 'userid' => $externalContactInfoData['userid']]);
					if (empty($workUser)) {
						return false;
					}
					//????????????????????????
					PublicSeaProtect::delProtect($workUser->id, $externalContact->id);
					//FissionHelpDetail::changeStatus(['user_id' => $workUser->id, 'external_userid' => $externalContact->id,'type'=>'del']);
					if ($externalContactInfoData['changetype'] == WorkExternalContact::DEL_EXTERNAL_CONTACT) {
						WorkUserDelFollowUserDetail::UserDelFollowUser($authCorp->id,$workUser->id,$externalContact->id);
						$followUserDelData = WorkExternalContactFollowUser::findOne(['user_id' => $workUser->id, 'external_userid' => $externalContact->id]);
						if (!empty($followUserDelData) && $followUserDelData->delete_type > 0) {
							WorkExternalContactFollowUser::updateAll(['del_type' => WorkExternalContactFollowUser::WORK_DEL_EX, 'del_time' => time(), 'is_protect' => 0], ['user_id' => $workUser->id, 'external_userid' => $externalContact->id]);
						} else {
							WorkExternalContactFollowUser::updateAll(['del_type' => WorkExternalContactFollowUser::WORK_DEL_EX, 'delete_type' => WorkExternalContactFollowUser::WORK_DEL_EX, 'del_time' => time(), 'is_protect' => 0], ['user_id' => $workUser->id, 'external_userid' => $externalContact->id]);
						}
						//??????????????????
						$time = time();
						$claimUser = PublicSeaClaimUser::find()->where(['corp_id' => $authCorp->id, 'old_user_id' => $workUser->id, 'external_userid' => $externalContact->id, 'status' => 0])->andWhere(['between', 'add_time', $time - 600, $time + 600])->one();
						$relatedId = !empty($claimUser) ? $claimUser->id : 0;
						ExternalTimeLine::addExternalTimeLine(['external_id' => $externalContact->id, 'user_id' => $workUser->id, 'event' => 'user_del', 'event_id' => $workUser->id,'related_id'=>$relatedId, 'remark' => $workUser->name]);
						//??????????????????
						$transfer = PublicSeaTransferDetail::findOne(['corp_id' => $authCorp->id, 'external_userid' => $externalContact->id, 'handover_userid' => $workUser->id]);
						if (!empty($transfer)) {
							PublicSeaTransferDetail::updateDelType($authCorp->id, $externalContact->external_userid, $externalContact->id, $transfer->takeover_userid);
							//????????????????????????????????????????????????????????????????????????
							\Yii::$app->work->push(new SyncWorkExternalContactJob([
								'corp' => $authCorp,
							]));
						}

						//??????????????????
						WorkContactWayLine::updateLine($externalContact->id, $externalContact->gender, $workUser->id, 3);
						//?????????????????????????????? ????????????????????????????????????????????????
						$followUser = WorkExternalContactFollowUser::findOne(['external_userid' => $externalContact->id, 'del_type' => WorkExternalContactFollowUser::WORK_CON_EX]);
						if (empty($followUser)) {
							Fans::updateAll(['external_userid' => NULL], ['external_userid' => $externalContact->id]);
						}

					} else {
						WorkExternalContactFollowUser::updateAll(['del_type' => WorkExternalContactFollowUser::EX_DEL_WORK, 'repeat_type' => WorkExternalContactFollowUser::DEL_REPEAT, 'delete_type' => WorkExternalContactFollowUser::EX_DEL_WORK, 'del_time' => time(), 'is_protect' => 0], ['user_id' => $workUser->id, 'external_userid' => $externalContact->id]);
						//???????????????????????????
						WorkPublicActivityFansUser::corpPublicExternalDel($authCorp->id,$workUser->id,$externalContact->id);
						//??????????????????
						ExternalTimeLine::addExternalTimeLine(['external_id' => $externalContact->id, 'event' => 'del_user', 'event_id' => $workUser->id, 'remark' => $workUser->name]);
						//??????????????????
						WorkContactWayLine::updateLine($externalContact->id, $externalContact->gender, $workUser->id, 2);
						//??????????????????????????? ????????????????????????????????????????????????
						$followUser = WorkExternalContactFollowUser::findOne(['external_userid' => $externalContact->id, 'del_type' => WorkExternalContactFollowUser::WORK_CON_EX]);
						if (empty($followUser)) {
							Fans::updateAll(['external_userid' => NULL], ['external_userid' => $externalContact->id]);
						}
						if (!empty($authCorp->workCorpAgents)) {
							$suiteId = '';
							if (!empty($workSuiteConfig)) {
								$suiteId = $workSuiteConfig->id;
							}

							$hasGot = false;

							foreach ($authCorp->workCorpAgents as $agent) {
								if (!$hasGot && $agent->close == WorkCorpAgent::AGENT_NOT_CLOSE && $agent->is_del == WorkCorpAgent::AGENT_NO_DEL && in_array($agent->agent_type, [WorkCorpAgent::CUSTOM_AGENT, WorkCorpAgent::AUTH_AGENT]) && $agent->suite_id == $suiteId) {
									$hasGot   = true;
									$workUser = WorkUser::findOne(['corp_id' => $authCorp->id, 'userid' => $externalContactInfoData['userid']]);

									$messageContent = '?????? ' . $externalContact->name . ' ??????????????????';

									$this->messageSend([$workUser->userid], $agent, $messageContent, $authCorp);
								}
							}
						}
					}
				}
				\Yii::error($externalContactInfoData['changetype'], 'changetypexcy');
				if ($externalContactInfoData['changetype'] == WorkExternalContact::TRANSFER_FAIL) {
					//??????????????????
					$externalContact = WorkExternalContact::findOne(['corp_id' => $authCorp->id, 'external_userid' => $externalContactInfoData['externaluserid']]);
					if (empty($externalContact)) {
						return false;
					}
					$dismissDetail = WorkDismissUserDetail::find()->where(['external_userid' => $externalContact->id])->all();
					if (!empty($dismissDetail)) {
						/** @var WorkDismissUserDetail $detail */
						foreach ($dismissDetail as $detail) {
							$userId   = $detail->user_id;
							$workUser = WorkUser::findOne($userId);
							if (!empty($workUser)) {
								$workApi                 = WorkUtils::getWorkApi($authCorp->id, WorkUtils::EXTERNAL_API);
								$data                    = [];
								$data['external_userid'] = $externalContactInfoData['externaluserid'];
								$data['handover_userid'] = $workUser->userid;
								$data['takeover_userid'] = $externalContactInfoData['userid'];
								\Yii::error($data, '$data');
								$res    = EContactGetTransferResult::parseFromArray($data);
								$result = $workApi->EContactGetTransferResult($res);
								\Yii::error($result, '$result');
								if ($result['errcode'] == 0) {
									$status = 2;
									if ($result['status'] == 3) {
										//????????????
										$status = 2;
									} elseif ($result['status'] == 4) {
										//??????????????????????????????
										$status = 3;
									}
									if (!empty($status)) {
										$userDetail         = WorkDismissUserDetail::findOne(['user_id' => $userId, 'external_userid' => $externalContact->id]);
										$userDetail->status = $status;
										$userDetail->save();

										WorkExternalContactFollowUser::updateAll(['del_type' => WorkExternalContactFollowUser::HAS_ASSIGN], ['del_type' => WorkExternalContactFollowUser::NO_ASSIGN, 'userid' => $workUser->userid, 'external_userid' => $externalContact->id]);

									}
								}
							}

						}
					}
				}
			} catch (\Exception $e) {
				\Yii::error($e->getMessage(), 'WorkExternalContactJob');

				return false;
			}
		}

		/**
		 * @param array         $toUser
		 * @param WorkCorpAgent $agent
		 * @param string        $messageContent
		 * @param WorkCorp      $authCorp
		 *
		 * @throws \ParameterError
		 * @throws \QyApiError
		 * @throws \app\components\InvalidDataException
		 * @throws \yii\base\InvalidConfigException
		 */
		private function messageSend ($toUser, $agent, $messageContent, $authCorp)
		{
			$workApi = WorkUtils::getAgentApi($authCorp->id, $agent->id);

			$messageContent = [
				'content' => $messageContent,
			];
			$messageContent = TextMesssageContent::parseFromArray($messageContent);

			$message = [
				'touser'                   => $toUser,
				'agentid'                  => $agent->agentid,
				'messageContent'           => $messageContent,
				'duplicate_check_interval' => 10,
			];

			$message = Message::pareFromArray($message);
			try {
				$result = $workApi->MessageSend($message, $invalidUserIdList, $invalidPartyIdList, $invalidTagIdList);
				\Yii::error($result, 'messageSendResult');
			} catch (\Exception $e) {
				\Yii::error($e->getMessage(), 'messageSend');
			}
		}
	}