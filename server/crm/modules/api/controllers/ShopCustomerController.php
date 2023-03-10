<?php


namespace app\modules\api\controllers;

use app\components\InvalidDataException;
use app\components\InvalidParameterException;
use app\models\AuthStore;
use app\models\AuthStoreGroup;
use app\models\PublicSeaContactFollowUser;
use app\models\PublicSeaCustomer;
use app\models\ShopCustLevelSet;
use app\models\ShopCustomer;
use app\models\ShopCustomerChangeLog;
use app\models\ShopCustomerGuideChangeLog;
use app\models\ShopCustomerGuideRelation;
use app\models\ShopCustomerOrder;
use app\models\ShopCustomerRfmAlias;
use app\models\ShopCustomerRfmDefault;
use app\models\ShopCustomerRfmLog;
use app\models\ShopCustomerRfmSetting;
use app\models\ShopDataSeries;
use app\models\ShopGuideDataSeries;
use app\models\WorkExternalContact;
use app\models\WorkExternalContactFollowUser;
use app\models\WorkMsgAuditInfo;
use app\models\WorkUser;
use app\modules\api\components\BaseController;
use app\modules\api\components\WorkBaseController;
use yii\filters\VerbFilter;
use yii\helpers\ArrayHelper;
use app\models\WorkMsgAudit;

class ShopCustomerController extends WorkBaseController
{

    public function behaviors()
    {
        return ArrayHelper::merge(parent::behaviors(), [
            [
                'class'   => VerbFilter::className(),
                'actions' => [
                    'customer-list'    => ['POST'],
                    'level-rfm'        => ['POST'],
                    'change-level'     => ['POST'],
                    'sidebar-msg'      => ['POST'],
                    'save-guide-msg'   => ['POST'],
                    'mobile-msg'       => ['POST'],
                    'customer-log'     => ['POST'],
                    'all-data'         => ['POST'],
                    'all-columnar'     => ['POST'],
                    'guide-rank'       => ['POST'],
                    'group-line'       => ['POST'],
                    'group-month-data' => ['POST']
                ],
            ],
        ]);
    }


    /**
     * @inheritDoc
     *
     * @param \yii\base\Action $action
     *
     * @return bool
     *
     * @throws \app\components\InvalidParameterException
     * @throws \yii\web\BadRequestHttpException
     */
    public function beforeAction($action)
    {
        return parent::beforeAction($action);
    }


    /*
     * ??????????????????
     * @url  http://{host_name}/api/shop-customer/customer-list
     * */
    public function actionCustomerList()
    {
        $cusKey                   = \Yii::$app->request->post('cus_keyword', 0); //??????????????????????????????
        $levelId                  = \Yii::$app->request->post('level_id', -1); //??????id
        $rfmId                    = \Yii::$app->request->post('rfm_id', 0); //??????id
        $addTimeStart             = \Yii::$app->request->post('add_time_start', ''); //??????????????????
        $addTimeEnd               = \Yii::$app->request->post('add_time_end', ''); //??????????????????
        $lastInteractiveTimeStart = \Yii::$app->request->post('last_interactive_time_start', ''); //??????????????????
        $lastInteractiveTimeEnd   = \Yii::$app->request->post('last_interactive_time_end', ''); //??????????????????
        $lastConsumptionTimeStart = \Yii::$app->request->post('last_consumption_time_start', ''); //??????????????????
        $lastConsumptionTimeEnd   = \Yii::$app->request->post('last_consumption_time_end', ''); //??????????????????
        $amountMin                = \Yii::$app->request->post('amount_min', 0); //????????????
        $amountMax                = \Yii::$app->request->post('amount_max', 0); //????????????
        $interactiveCountMin      = \Yii::$app->request->post('interactive_count_min', 0); //???????????????
        $interactiveCountMax      = \Yii::$app->request->post('interactive_count_max', 0); //???????????????
        $guideKey                 = \Yii::$app->request->post('guide_keyword', ''); //???????????????????????????
        $page                     = \Yii::$app->request->post('page', 1);
        $pageSize                 = \Yii::$app->request->post('page_size', 15);
        $offset                   = ($page - 1) * $pageSize;

        $guideId = \Yii::$app->request->post('guide_id', '');
        $storeId = \Yii::$app->request->post('store_id', '0');

        $customer = ShopCustomer::find()->where(['corp_id' => $this->corp->id, 'is_del' => 0]);
        if ($levelId > 0 || $levelId === 0) {
            $customer = $customer->andWhere(['level_id' => $levelId]);
        }
        if ($rfmId > 0) {
            $customer = $customer->andWhere(['rfm_id' => $rfmId]);
        }

        if (!empty($addTimeStart) && !empty($addTimeEnd)) {
            $customer = $customer->andFilterWhere(['between', 'add_time', $addTimeStart, $addTimeEnd]);
        }
        if (!empty($lastInteractiveTimeStart) && !empty($lastInteractiveTimeEnd)) {
            $customer = $customer->andFilterWhere(['between', 'last_interactive_time', $lastInteractiveTimeStart, $lastInteractiveTimeEnd]);
        }
        if (!empty($lastConsumptionTimeStart) && !empty($lastConsumptionTimeEnd)) {
            $customer = $customer->andFilterWhere(['between', 'last_consumption_time', $lastConsumptionTimeStart, $lastConsumptionTimeEnd]);
        }
        if (!empty($amountMin) && !empty($amountMax)) {
            $customer = $customer->andFilterWhere(['between', 'amount', $amountMin, $amountMax]);
        }
        if (!empty($interactiveCountMin) && !empty($interactiveCountMax)) {
            $customer = $customer->andFilterWhere(['between', 'interactive_count', $interactiveCountMin, $interactiveCountMax]);
        }
        if (!empty($cusKey)) {
            if (preg_match("/^1[0123456789]\d{9}$/", $cusKey)) {
                $customer = $customer->andWhere(['phone' => $cusKey]);
            } else {
                $customer = $customer->andWhere(['or', ['like', 'name', rawurlencode($cusKey)], ['like', 'true_name', $cusKey]]);
            }
        }
        //??????id
        if (!empty($guideId)) {
            $userIds = [0];//???????????????id
            //?????????????????????????????????id
            $user = ShopCustomerGuideRelation::getData(['status' => 1, 'corp_id' => $this->corp->id, 'guide_id' => $guideId, 'store_id' => $storeId], 'cus_id');//??????????????????
            if (!empty($user)) {
                foreach ($user as $v) {
                    $userIds[] = $v['cus_id'];
                }
            }
            $customer = $customer->andWhere(['in', 'id', $userIds]);
        } //???????????????
        else if (!empty($guideKey)) {
            $gWhere   = ['corp_id' => $this->corp->id, 'status' => 1, 'is_del' => 0, 'is_external' => 1, 'dimission_time' => 0];
            $oWhere   = ['or', ['like', 'name', $guideKey], ['like', 'mobile', $guideKey]];
            $guideIds = WorkUser::find()->where($gWhere)->andWhere($oWhere)->select('id')->asArray()->all();
            $guideIds = !empty($guideIds) ? array_column($guideIds, 'id') : [];
            $userIds  = [0];//???????????????id
            if (!empty($guideIds)) {
                //?????????????????????????????????id
                $user = ShopCustomerGuideRelation::getData(['status' => 1, 'corp_id' => $this->corp->id, 'guide_id' => $guideIds], 'cus_id');//??????????????????
                if (!empty($user)) {
                    foreach ($user as $v) {
                        $userIds[] = $v['cus_id'];
                    }
                }
            }
            $customer = $customer->andWhere(['in', 'id', $userIds]);
        }
        $count = $customer->count();
        $info  = $customer->limit($pageSize)->offset($offset)->asArray()->orderBy('add_time DESC')->all();

        //?????????????????????
        $levelAll = ShopCustLevelSet::getData($this->corp->id);
        $level    = [];
        if (!empty($levelAll)) {
            foreach ($levelAll as $lv) {
                $level[$lv['id']] = ['title' => $lv['title'], 'color' => $lv['color']];
            }
        }

        //rfm??????????????????
        $rfm    = ShopCustomerRfmAlias::getData($this->corp->id, 1);
        $result = [];
        foreach ($info as $k => $v) {
            $guide_all          = ShopCustomerGuideRelation::getData(['status' => 1, 'corp_id' => $this->corp->id, 'cus_id' => $v['id']], 'guide_id,guide_name,store_id');//??????????????????
            $cus['key']         = $v['id'];
            $cus['id']          = $v['id'];
            $cus['guide']       = !empty($guide_all) ? $guide_all : [];
            $cus['name']        = (!empty($v['name']) ? rawurldecode($v['name']) : '') . ($v['phone'] ? '(' . $v['phone'] . ')' : '');
            $cus['type']        = $v['external_id'] > 0 ? '????????????' : '???????????????';
            $cus['add_time']    = $v['add_time'];
            $cus['amount']      = $v['amount'];
            $cus['level_name']  = isset($level[$v['level_id']]['title']) ? $level[$v['level_id']]['title'] : '?????????';
            $cus['level_color'] = isset($level[$v['level_id']]['color']) ? $level[$v['level_id']]['color'] : '#000000';
            $cus['rfm_name']    = isset($rfm[$v['rfm_id']]) ? $rfm[$v['rfm_id']] : '?????????';
            $result[]           = $cus;

            unset($cus);
        }

        $where = \Yii::$app->request->post();
        unset($where['corp_id']);
        return [
            'count'    => $count,
            'customer' => $result,
            'where'    => $where
        ];
    }

    /*
     * ????????????????????????-??????????????????
     * @url  http://{host_name}/api/shop-customer/level-rfm
     * */
    public function actionLevelRfm()
    {
        //????????????
        $level = ShopCustLevelSet::getData($this->corp->id);
        //??????????????????
        $noLevel = ['id' => 0, 'corp_id' => $this->corp->id, 'title' => '?????????', 'desc' => '?????????', 'weight' => '0', 'color' => '#000000'];
        $level[] = $noLevel;
        //rfm????????????
        $rfm = ShopCustomerRfmAlias::getData($this->corp->id);
        return ['level' => $level, 'rfm' => $rfm];
    }

    /*
     * ????????????????????????
     * @url  http://{host_name}/api/shop-customer/change-level
     * */
    public function actionChangeLevel()
    {
        $levelId     = \Yii::$app->request->post('level_id', 0); //???????????? ??????id
        $customerIds = \Yii::$app->request->post('customer_ids', ''); //??????id

        if (empty($customerIds)) {
            throw new InvalidDataException('??????????????????id???');
        }
        if (empty($levelId) && $levelId !== 0) {
            throw new InvalidDataException('????????????????????????id???');
        }
        if (strstr($customerIds, ',') !== false) {
            $customerId = explode(',', $customerIds);
        } else {
            $customerId = $customerIds;
        }
        $customerWhere = ['corp_id' => $this->corp->id, 'id' => $customerId];
        $re            = ShopCustomer::updateCustomerLevel($this->corp->id, $this->user->uid, $customerWhere, $levelId);
        if (!$re) {
            throw new InvalidDataException('????????????????????????????????????');
        }
        return ['result' => $re];
    }


    /*
     * ???????????????????????????
     * @url  http://{host_name}/api/shop-customer/sidebar-msg
     * */
    public function actionSidebarMsg()
    {
        $page       = \Yii::$app->request->post('page', 1);
        $pageSize   = \Yii::$app->request->post('page_size', 15);
        $offset     = ($page - 1) * $pageSize;
        $customerId = \Yii::$app->request->post('customer_id', ''); //??????id
        //??????????????????
        $where['corp_id'] = $this->corp->id;
        $where['cus_id']  = $customerId;
        $count            = ShopCustomerRfmLog::find()->where($where)->count();
        $rfmLog           = ShopCustomerRfmLog::find()->select('rfm_name,add_time')->where($where)->orderBy('id desc')->limit($pageSize)
            ->offset($offset)->asArray()->all();
        if ($page > 1) {
            return ['rfm' => [], 'rfm_log' => $rfmLog, 'count' => $count];
        }
        //rmf??????
        $customer = ShopCustomer::findOne($customerId);
        if (empty($customer)) {
            throw new InvalidDataException('??????????????????');
        }
        //rfm??????
        $rfmSetting = ShopCustomerRfmSetting::getData($this->corp->id);
        //?????????
        $result['frequency_value'] = $rfmSetting['frequency_value'];
        $result['recency_value']   = $rfmSetting['recency_value'];
        $result['monetary_value']  = $rfmSetting['monetary_value'];
        //??????
        if ($rfmSetting['consumption_data_open'] == ShopCustomerRfmSetting::CONSUMPTION_DATA_OPEN) {
            $result['monetary'] = $customer['consumption_count'] > 0 ? round($customer['amount'] / $customer['consumption_count'], 2) : 0;
        } else {
            $result['monetary'] = 0;
        }
        //??????
        if ($rfmSetting['msg_audit_open'] && $rfmSetting['frequency_type'] == ShopCustomerRfmSetting::FREQUENCY_MSG) {
            $result['frequency'] = $customer['frequency_msg'];
        } else if ($rfmSetting['consumption_data_open'] && $rfmSetting['frequency_type'] == ShopCustomerRfmSetting::FREQUENCY_MONEY) {
            $result['frequency'] = $customer['frequency_shopping'];
        } else {
            $result['frequency'] = 0;
        }
        //??????
        if ($rfmSetting['msg_audit_open'] && $rfmSetting['frequency_type'] == ShopCustomerRfmSetting::RECENCY_MSG) {
            $result['recency'] = $customer['recency_msg'];
        } else if ($rfmSetting['consumption_data_open'] && $rfmSetting['frequency_type'] == ShopCustomerRfmSetting::RECENCY_MONEY) {
            $result['recency'] = $customer['recency_shopping'];
        } else {
            $result['recency'] = 0;
        }
        //????????????????????????
        $result['monetary_value']  = $result['monetary'] > $result['monetary_value'] ? $result['monetary'] : $result['monetary_value'];
        $result['frequency_value'] = $result['frequency'] > $result['frequency_value'] ? $result['frequency'] : $result['frequency_value'];

        if ($result['recency_value'] == 0 || $result['recency'] == 0) {
            $result['recency'] = 0;
        } else {
            $recency           = round($result['recency_value'] / $result['recency'], 2);
            $result['recency'] = $recency > 1 ? 1 : $recency;
        }
        $result['recency_value'] = 1;

        return ['rfm' => $result, 'rfm_log' => $rfmLog, 'count' => $count];
    }


    /*
     * ??????????????????
     * @url  http://{host_name}/api/shop-customer/save-guide-msg
     * */
    public function actionSaveGuideMsg()
    {
        $guideIdStr        = \Yii::$app->request->post('guide_id', ''); //??????
        $storeIdStr        = \Yii::$app->request->post('store_id', ''); //??????????????????id
        $storeGuideNameStr = \Yii::$app->request->post('store_guide_name', ''); //?????????????????????
        $customerStr       = \Yii::$app->request->post('customer_id', ''); //??????id

        $customerId     = strstr($customerStr, ',') ? explode(',', $customerStr) : ($customerStr > 0 ? [$customerStr] : []);
        $guideId        = strstr($guideIdStr, ',') ? explode(',', $guideIdStr) : ($guideIdStr > 0 ? [$guideIdStr] : []);
        $storeId        = strstr($storeIdStr, ',') ? explode(',', $storeIdStr) : ($storeIdStr > 0 ? [$storeIdStr] : [0]);
        $storeGuideName = strstr($storeGuideNameStr, ',') ? explode(',', $storeGuideNameStr) : ($storeGuideNameStr != '' ? [$storeGuideNameStr] : []);

        if (empty($customerId)) {
            throw new InvalidDataException('?????????????????????');
        }
        //??????????????????????????????
        $re = ShopCustomerGuideRelation::updateRelation($this->corp->id, $this->user->uid, $customerId, $guideId, $storeId, $storeGuideName);
        return ['result' => $re];
    }


    /**
     * ?????????????????????????????????????????????
     * @url  http://{host_name}/api/shop-customer/mobile-msg
     */
    public function actionMobileMsg()
    {
        $userId     = \Yii::$app->request->post('external_userid', '');
        $corpUserId = \Yii::$app->request->post('now_userid', '');

        $externalUserData = WorkExternalContact::findOne(['corp_id' => $this->corp->id, 'external_userid' => $userId]);
        if (empty($externalUserData)) {
            throw new InvalidParameterException('?????????????????????');
        }
        $externalId = $externalUserData->id; //????????????id

        $workUser = WorkUser::findOne(['corp_id' => $this->corp->id, 'userid' => $corpUserId]);

        if (empty($externalUserData)) {
            throw new InvalidParameterException('???????????????????????????');
        }
        $guideId = $workUser->id; //??????id

        $shopCustomerModel = new ShopCustomer();
        $customer          = $shopCustomerModel->find()->where(['is_del' => 0, 'external_id' => $externalId])->with('level', 'rfm.alias')->asArray()->one();
        if (empty($customer)) {
            return ['is_hide' => 1, 'external_id' => $externalId];
        }


        $resRelation = ShopCustomerGuideRelation::find()->where(['status' => 1, 'guide_id' => $guideId, 'cus_id' => $customer['id']])->asArray()->one();
        if (empty($resRelation)) {
            return ['is_hide' => 2, 'guide_id' => $corpUserId, 'cus_id' => $customer['id']];
        }
        $result            = [];
        $result['is_hide'] = 0;
        if (!empty($customer)) {
            $result['customer_id'] = $customer['id'];
            $result['level_name']  = !empty($customer['level']) ? $customer['level']['title'] : '??????';
            $result['level_color'] = !empty($customer['level']) ? $customer['level']['color'] : '#000000';
            if (isset($customer['rfm']['alias']['rfm_name']) && !empty($customer['rfm']['alias']['rfm_name'])) {
                $result['rfm_name'] = $customer['rfm']['alias']['rfm_name'];
            } else if (isset($customer['rfm']['default_name']) && !empty($customer['rfm']['default_name'])) {
                $result['rfm_name'] = $customer['rfm']['default_name'];
            } else {
                $result['rfm_name'] = '??????';
            }
            //$result['rfm_name']              =  !empty($customer['rfm']['default_name']) ? (isset($customer['rfm']['alias']['rfm_name']) && !empty($customer['rfm']['alias']['rfm_name']) ? $customer['rfm']['alias']['rfm_name'] : $customer['rfm']['default_name']) : '??????';
            $result['amount']                = $customer['amount'];
            $result['last_consumption_time'] = $customer['last_consumption_time'] == '0000-00-00 00:00:00' ? '-' : date("Y-m-d", strtotime($customer['last_consumption_time']));
            $result['consumption_count']     = $customer['consumption_count'];
        }
        return $result;
    }


    /*
    * ???????????????????????????
    * @url  http://{host_name}/api/shop-customer/customer-log
    * */
    public function actionCustomerLog()
    {
        $page       = \Yii::$app->request->post('page', 1);
        $pageSize   = \Yii::$app->request->post('page_size', 15);
        $offset     = ($page - 1) * $pageSize;
        $customerId = \Yii::$app->request->post('customer_id', 0); //??????id
        $where      = ['corp_id' => $this->corp->id, 'cus_id' => $customerId];
        $count      = ShopCustomerChangeLog::find()->where($where)->count();
        $result     = ShopCustomerChangeLog::find()->select('title,type,description,add_time')
            ->where($where)->orderBy('id desc')->limit($pageSize)
            ->offset($offset)->asArray()->all();
        $nextPage   = $count - $offset > $pageSize;
        return ['next_page' => $nextPage, 'result' => $result];
    }

    /*
     * ???????????????????????????
     * */
    public function actionAllData()
    {

        $pre = $this->makePreData('AllData');
        if (!empty($pre)) {
            return ['result' => $pre, 'is_preview' => 1];
        }

        $res    = ShopDataSeries::getMonetary($this->corp->id);
        $addDay = isset($res['old_data_list']['add_day']) ? $res['old_data_list']['add_day'] : [];
        //??????????????????????????????
        $dayAddUserNumber       = [];
        $allCustomerNumber      = ShopCustomer::find()->where(['is_del' => 0, 'corp_id' => $this->corp->id])->count();
        $yesterdayAddUserNumber = ShopCustomer::find()
            ->where(['is_del' => 0, 'corp_id' => $this->corp->id])
            ->andWhere(['between', 'add_time', date("Y-m-d", strtotime("-1 day")), date("Y-m-d")])
            ->count();

        if (!empty($addDay)) {
            $userNumberList = ShopCustomer::find()
                ->select('add_time,id')
                ->where(['is_del' => 0, 'corp_id' => $this->corp->id])
                ->andWhere(['between', 'add_time', $addDay[0], date("Y-m-d", strtotime("+1 day"))])
                ->asArray()
                ->all();
            foreach ($userNumberList as $v) {
                $key                       = date('Y-m-d', strtotime($v['add_time']));
                $dayUserNumberList[$key][] = $v['id'];
            }
            foreach ($addDay as $v) {
                $dayAddUserNumber[] = isset($dayUserNumberList[$v]) ? count($dayUserNumberList[$v]) : 0;
            }
        }

        $res['all_customer_number']                  = $allCustomerNumber;
        $res['yesterday_add_user_number']            = $yesterdayAddUserNumber;
        $res['old_data_list']['day_add_user_number'] = $dayAddUserNumber;
        return ['result' => $res, 'is_preview' => 0];

    }

    /*
     * ?????????????????? ?????? ?????? ????????????
     * */
    public function actionAllColumnar()
    {
        $pre = $this->makePreData('AllColumnar');
        if (!empty($pre)) {
            return $pre;
        }

        $startDate = \Yii::$app->request->post('start_date', '');
        $startDate = date("Y-m-d", strtotime($startDate));

        $endDate = \Yii::$app->request->post('end_date', '');
        $endDate = date("Y-m-d", strtotime($endDate));
        if ($endDate == date('Y-m-d')) {
            $endDate = date("Y-m-d", strtotime('-1 day'));
        }
        if (empty($startDate) || empty($endDate)) {
            throw new InvalidParameterException('?????????????????????');
        }
        return ShopDataSeries::getDataByDate($this->corp->id, $startDate, $endDate);
    }

    /*
     * ?????? ?????? ?????? ?????????
     * */
    public function actionGuideRank()
    {
        $pre = $this->makePreData('GuideRank');
        if (!empty($pre)) {
            return $pre;
        }

        $startDate = \Yii::$app->request->post('start_date', '');
        $endDate   = \Yii::$app->request->post('end_date', '');
        $startDate = date("Y-m-d", strtotime($startDate));
        $endDate   = date("Y-m-d", strtotime("+1 day", strtotime($endDate)));
        if (empty($startDate) || empty($endDate)) {
            throw new InvalidParameterException('?????????????????????');
        }
        return ShopCustomerOrder::getRank($this->corp->id, $startDate, $endDate);
    }


    /*
     * ???????????? ?????? ?????? ????????????
     * */
    public function actionGroupLine()
    {
        $pre = $this->makePreData('GroupLine');
        if (!empty($pre)) {
            return $pre;
        }

        $month      = \Yii::$app->request->post('month', date('Y-m', time()));
        $afterMonth = date('Y-m', strtotime("-1 month", strtotime($month)));
        $pid        = \Yii::$app->request->post('pid', 0);
        //????????????
        $result   = [];//????????????
        $allStore = [];//????????????id
        $group    = AuthStoreGroup::find()->select('id,name,pid,parent_ids')
            ->where(['pid' => $pid, 'corp_id' => $this->corp->id])
            ->orderBy('id desc')
            ->asArray()->all();
        if (!empty($group)) {
            $grade_char = array('???', '???', '???', '???', '???', '???', '???', '???', '???', '???');
            foreach ($group as $k => $v) {
                //????????????????????????
                $res = ShopCustomerOrder::getAllGroupData($this->user->uid, $this->corp->id, $v['id']);
                if (empty($res)) continue;

                $store             = $res;
                $allStore          = array_merge($store, $allStore);
                $tmp               = [];
                $tmp['have_child'] = 1;
                $tmp['group_id']   = $v['id'];
                $tmp['group_name'] = $v['name'];
                $tmp['store_ids']  = $store;
                $tmp['store_str']  = count($store) > 1 ? implode(',', $store) : $store[0];

                $tmp['grade_name'] = ($v['pid'] == 0) ? '????????????' : $grade_char[substr_count($v['parent_ids'], ',') + 2] . '?????????';
                if (AuthStore::find()->where(['group_id' => $v['id'], 'corp_id' => $this->corp->id])->count()) {
                    $tmp['grade_name'] = '??????';
                }
                $result[] = $tmp;
            }
        } else {
            $store = AuthStore::find()->select('id,shop_name as name')
                ->where(['group_id' => $pid, 'corp_id' => $this->corp->id])->asArray()->all();
            foreach ($store as $k => $v) {
                //????????????????????????
                $allStore[]               = $v['id'];
                $result[$k]['have_child'] = 0;
                $result[$k]['group_id']   = $v['id'];
                $result[$k]['group_name'] = $v['name'];
                $result[$k]['store_ids']  = [$v['id']];
                $result[$k]['store_str']  = $v['id'];
                $result[$k]['grade_name'] = '??????';
            }
        }
        //????????????
        $storeData = ShopDataSeries::getDataByStore($this->corp->id, $allStore, $month);

        foreach ($result as $k => $item) {
            $result[$k]['monetary_rate'] = 0;
            $result[$k]['customer_rate'] = 0;
            if (!empty($item['store_ids'])) {
                $curMonthMonetary = 0;
                $oldMonthMonetary = 0;
                $curAddUserNum    = 0;
                $oldAddUserNum    = 0;
                foreach ($item['store_ids'] as $v) {
                    $curMonthMonetary += isset($storeData[$v][$month]['monetary']) ? $storeData[$v][$month]['monetary'] : 0;
                    $oldMonthMonetary += isset($storeData[$v][$afterMonth]['monetary']) ? $storeData[$v][$afterMonth]['monetary'] : 0;;
                    $curAddUserNum += isset($storeData[$v][$month]['add_user_number']) ? $storeData[$v][$month]['add_user_number'] : 0;;
                    $oldAddUserNum += isset($storeData[$v][$afterMonth]['add_user_number']) ? $storeData[$v][$afterMonth]['add_user_number'] : 0;;
                }
                $result[$k]['monetary_rate'] = $oldMonthMonetary > 0 ? round($curMonthMonetary * 100 / $oldMonthMonetary) : 0;
                $result[$k]['customer_rate'] = $oldAddUserNum > 0 ? round($curAddUserNum * 100 / $oldAddUserNum) : 0;

                $result[$k]['monetary_rate'] = min($result[$k]['monetary_rate'], 100);
                $result[$k]['customer_rate'] = min($result[$k]['customer_rate'], 100);

            }

        }
        return $result ?: [];
    }

    /*
     * ???????????????????????????????????????????????????????????????
     * */
    public function actionGroupMonthData()
    {
        $pre = $this->makePreData('GroupMonthData');
        if (!empty($pre)) {
            return $pre;
        }
        $month     = \Yii::$app->request->post('month', date('Y-m', time()));
        $storeStr  = \Yii::$app->request->post('store_str', 0);
        $allStore  = explode(',', $storeStr);
        $storeData = ShopDataSeries::getMonthData($this->corp->id, $allStore, $month);
        return $storeData ?: [];

    }


    public function makePreData($type)
    {
        $config = ShopCustomerRfmSetting::getData($this->corp->id);
        if (!empty($config) && !empty($config['consumption_data_open'])) {
            return [];
        }
        if ($type == 'AllData') {
            $str = '{"all_customer_number":"3956","monetary":"4543443.00","yesterday_monetary":"34342.00","day_monetary_rate":34,"monetary_rate_type":1,"yesterday_add_user_number":234,"buy_customer_number":0,"monetary_rate":27,"interaction_number":"3955","interaction_rate":54,"old_data_list":{"add_day":["2020-04-01","2020-04-02","2020-04-03","2020-04-04","2020-04-05","2020-04-06","2020-04-07","2020-04-08","2020-04-08","2020-04-09","2020-04-10","2020-04-11","2020-04-12"],"day_monetary":["10.00","12.00","9.00","6.00","17.00","4.00","8.00","7.00","10.00","13.00","15.00","11.00","3.00","13.00"],"day_add_user_number":["1","2","5","4","3","8","6","7","12","10","9","11"],"day_consumption_number":["1","2","5","4","3","8","6","7","12","10","9","11"],"day_interaction_number":["1","2","5","4","3","8","6","7","12","10","9","11"]}}';
            return json_decode($str);
        }
        if ($type == 'AllColumnar') {
            $str = '{"result":{"day":["2020-04-01","2020-04-02","2020-04-03","2020-04-04","2020-04-05","2020-04-06","2020-04-07","2020-04-08","2020-04-08","2020-04-09","2020-04-10","2020-04-11","2020-04-12"],"monetary":["10.00","12.00","9.00","6.00","17.00","4.00","8.00","7.00","10.00","13.00","15.00","11.00","3.00","13.00"],"add_user_number":["1","2","5","4","3","8","6","7","12","10","9","11"]},"is_month":1,"start_date":"2020-01-01","end_date":"2021-01-01"}';
            return json_decode($str);
        }
        if ($type == 'GuideRank') {
            $str = '{"monetary_list":[{"guide_id":"333","monetary":"74000.00",
            "key":1,"guide_name":"??????"},{"guide_id":"332","monetary":"60000.00",
            "key":2,"guide_name":"??????"},{"guide_id":"460","monetary":"57000.00",
            "key":3,"guide_name":"??????"},{"guide_id":"460","monetary":"48000.00",
            "key":4,"guide_name":"??????"},{"guide_id":"460","monetary":"39000.00",
            "key":5,"guide_name":"??????"},{"guide_id":"460","monetary":"21000.00",
            "key":6,"guide_name":"??????"},{"guide_id":"460","monetary":"11000.00",
            "key":7,"guide_name":"??????"},{"guide_id":"460","monetary":"9000.00",
            "key":8,"guide_name":"??????"},{"guide_id":"460","monetary":"8005.00",
            "key":9,"guide_name":"??????"},{"guide_id":"460","monetary":"5000.00",
            "key":10,"guide_name":"??????"}],
            "add_user_list":[
            {"guide_id":"333","add_user_number":"10","all_customer_number":"10","key":1,"guide_name":"??????"},
            {"guide_id":"332","add_user_number":"9","all_customer_number":"12","key":2,"guide_name":"??????"},
            {"guide_id":"460","add_user_number":"8","all_customer_number":"13","key":3,"guide_name":"??????"},
            {"guide_id":"460","add_user_number":"7","all_customer_number":"9","key":4,"guide_name":"??????"},
            {"guide_id":"460","add_user_number":"6","all_customer_number":"8","key":5,"guide_name":"??????"},
            {"guide_id":"460","add_user_number":"5","all_customer_number":"12","key":6,"guide_name":"??????"},
            {"guide_id":"460","add_user_number":"4","all_customer_number":"18","key":7,"guide_name":"??????"},
            {"guide_id":"460","add_user_number":"3","all_customer_number":"6","key":8,"guide_name":"??????"},
            {"guide_id":"460","add_user_number":"2","all_customer_number":"17","key":9,"guide_name":"??????"},
            {"guide_id":"460","add_user_number":"1","all_customer_number":"12","key":10,"guide_name":"??????"}]}';

            return json_decode($str);
        }
        if ($type == 'GroupLine') {
            $pid = \Yii::$app->request->post('pid', 0);

            $str = '[{"have_child":0,"group_id":"186","group_name":"????????????","store_ids":[],"store_str":"6791","grade_name":"??????",
            "monetary_rate":23,"customer_rate":43},
            {"have_child":0,"group_id":"154","group_name":"????????????","store_ids":[],"store_str":"","grade_name":"??????",
            "monetary_rate":43,"customer_rate":32},
            {"have_child":0,"group_id":"154","group_name":"????????????","store_ids":[],"store_str":"","grade_name":"??????",
            "monetary_rate":76,"customer_rate":56},
            {"have_child":0,"group_id":"153","group_name":"?????????","store_ids":[],"store_str":"","grade_name":"??????",
            "monetary_rate":34,"customer_rate":89}]';
            if ($pid == 154) {
                $str = '[{"have_child":0,"group_id":"186","group_name":"???????????????1","store_ids":[],"store_str":"6791","grade_name":"??????",
                "monetary_rate":23,"customer_rate":43},
                {"have_child":0,"group_id":"154","group_name":"???????????????2","store_ids":[],"store_str":"","grade_name":"??????",
                "monetary_rate":43,"customer_rate":32},
                {"have_child":0,"group_id":"154","group_name":"???????????????3","store_ids":[],"store_str":"","grade_name":"??????",
                "monetary_rate":76,"customer_rate":56}]';
            }
            return json_decode($str);
        }
        if ($type == 'GroupMonthData') {
            $str = '{"add_day":["04/01","04/02","04/03","04/04","04/05","04/06","04/07","04/08","04/09","04/10","04/11","04/12","04/13","04/14","04/15","04/16","04/17","04/18","04/19","04/20"],
                    "monetary":["10.00","12.00","16.00","12.00","19.00","21.00","12.00","43.00","76.00","32.00","54.00","67.00","23.00","42.00","52.00","36.00","43.00","54.00","34.00","43.00"],
                    "add_user_number":["10","12","11","17","19","21","16","15","14","19","21","16","16","13","16","14","12","6","15","7"]}';
            return json_decode($str);
        }
    }
}