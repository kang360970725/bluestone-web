<template>
  <div class="block">
    <vdialog :isShow="showEditPwd" :options="editPwdOptions" v-on:modalResponse="editPwdFn">
      <br>
      <div style="">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="col-lg-2 control-label">账号：</label>
            <div class="col-lg-10 form-input">
              <input type="text" v-model="user.account" id="test" class="form-control" readonly="readonly">
              <span class="error"></span>
            </div>
          </div>
          <!--<div class="form-group">-->
          <!--<label class="col-lg-2 control-label">邮箱：</label>-->
          <!--<div class="col-lg-10 form-input">-->
          <!--<input type="text" v-model="users.email" id="email" class="form-control">-->
          <!--<span class="error"></span>-->
          <!--</div>-->
          <!--</div>-->
          <div class="form-group">
            <label class="col-lg-2 control-label">原密码：</label>
            <div class="col-lg-10 form-input">
              <input type="text" v-model="editPwd.oriPwd" id="oriPwd" class="form-control">
              <span class="error"></span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-2 control-label">新密码：</label>
            <div class="col-lg-10 form-input">
              <input type="password" v-model="editPwd.newPwd" id="newPwd" class="form-control">
              <span class="error"></span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-2 control-label">请确认:</label>
            <div class="col-lg-10 form-input">
              <input type="password" class="form-control" v-model="editPwd.conPwd" id="conPwd" value="">
              <span class="error"></span>
            </div>
          </div>
        </form>
      </div>
    </vdialog>
    <vdialog :isShow="showDialog" :options="dialogOptions" v-on:modalResponse="modalResponse">
      <br>
      <div style="">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="col-lg-2 control-label">昵称：</label>
            <div class="col-lg-10 form-input">
              <input type="text" v-model="users.nickname" id="realName" class="form-control">
              <span class="error"></span>
            </div>
          </div>
          <!--<div class="form-group">-->
          <!--<label class="col-lg-2 control-label">邮箱：</label>-->
          <!--<div class="col-lg-10 form-input">-->
          <!--<input type="text" v-model="users.email" id="email" class="form-control">-->
          <!--<span class="error"></span>-->
          <!--</div>-->
          <!--</div>-->
          <div class="form-group">
            <label class="col-lg-2 control-label">电话：</label>
            <div class="col-lg-10 form-input">
              <input type="text" v-model="users.phone" id="phone" class="form-control">
              <span class="error"></span>
            </div>
          </div>
          <!--<div class="form-group">-->
            <!--<label class="col-lg-2 control-label">微信：</label>-->
            <!--<div class="col-lg-10 form-input">-->
              <!--<input type="text" v-model="users.wechat" id="weChat" class="form-control">-->
              <!--<span class="error"></span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group">-->
          <!--<label class="col-lg-2 control-label">API ID</label>-->
          <!--<div class="col-lg-10 form-input">-->
          <!--<input type="text" class="form-control" v-model="users.apikey" id="apiKey" value="">-->
          <!--<span class="error"></span>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group">-->
          <!--<label class="col-lg-2 control-label">Secret</label>-->
          <!--<div class="col-lg-10 form-input">-->
          <!--<input type="text" class="form-control" id="secret" v-model="users.secret">-->
          <!--<span class="error"></span>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group">-->
          <!--<label class="col-lg-2 control-label">钱包地址</label>-->
          <!--<div class="col-lg-10">-->
          <!--<input type="text" class="form-control" id="walletAddress" v-model="users.walletaddress">-->
          <!--<span class="error"></span>-->
          <!--</div>-->
          <!--</div>-->
        </form>
      </div>
    </vdialog>
    <vdialog :isShow="showDialogAddress" :options="dialogOptionsAddress" v-on:modalResponse="modalResponse">
      <br>
      <div style="">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="col-lg-2 control-label" style="padding: 10px 0 0">钱包地址：</label>
            <div class="col-lg-10 form-input">
              <input type="text" class="form-control" name="walletaddress" id="walletAddress"
                     v-model="users.walletaddress">
              <span class="error"></span>
            </div>
          </div>
        </form>
      </div>
    </vdialog>
    <vdialog :isShow="showDialog4" :options="dialogOptions4" v-on:modalResponse="modalResponse4">
      <div style="">
        <div class="col-md-10 text-center">
          <!--<p style="font-size: 15px;font-weight: 600;"><span style="color:#dc3545;">凭证仅可上传一次，请谨慎操作!</span>-->
          <p style="font-size: 15px;font-weight: 600;"><span style="color:#dc3545;">请上传转账完成的截图!</span>
          </p>
        </div>
        <div class="form-group">
          <form id="infoLogoForm">
            <div class="form-group">
              <div class="col-md-10">
                <br>
                <input type="file" id="picUrl" @change='add_img' name="picUrl" class="file btn-primary1"
                       accept="image/jpeg,image/jpg,image/png">
                <!--<a href="#" class="file-input btn btn-primary" style="margin: 30px 0 40px 50px">-->
                <!--<input type="file" id="picUrl" @change='add_img' name="picUrl" class="file btn-primary1" accept="image/jpeg,image/jpg">-->
                <!--<span class="icon-enter-up"></span> 上传转账截图</a>-->
                <span class="file-input-name"></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </vdialog>
    <!-- SUB BANNER -->
    <div class="sub-banner">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-8">
            <h4 class="title-bread">{{$t('m.header.personal')}} <span class="sub-title-lighter">/ {{$t('m.header.bodyTitle')}}<br></span>
            </h4>
          </div>
          <div class="w-col w-col-4 col-right">
            <!--<div class="breadcrumbs">Unikue /&nbsp;Shortcodes</div>-->
          </div>
        </div>
      </div>
    </div>
    <!-- END SUB BANNER -->
    <div class="w-container">
      <br>
      <br>
      <div id="main-content">

        <div class="row clearfix">
          <div class="col-lg-4 col-md-12">
            <div class="card weather2 box-border pd-20">
              <div class="top-header bg_white">
                <span class="font18">个人资料</span>
                <span><a class="btn-min btn-min-primary fl-right" @click="showPromp"
                         style="margin: 14px 10px 0 0;text-indent: 0;">修改</a></span>
              </div>
              <table class="table m-b-0">
                <tbody>
                <tr>
                  <td width="30%" class="text-xl-right">账户：</td>
                  <td class="font-medium">{{user.account}}</td>
                </tr>
                <tr>
                  <td class="text-xl-right">I D：</td>
                  <td class="font-medium">{{user.uuid}}</td>
                </tr>
                <tr>
                  <td class="text-xl-right">昵称：</td>
                  <td class="font-medium">{{user.nickname || '-'}}</td>
                </tr>
                <tr>
                  <td class="text-xl-right">电话：</td>
                  <td class="font-medium">{{user.phone || '-'}}</td>
                </tr>
                <tr>
                  <td class="text-xl-right">邮箱：</td>
                  <td class="font-medium">{{user.email || '-'}}</td>
                </tr>
                <!--<tr>-->
                  <!--<td class="text-xl-right">微信：</td>-->
                  <!--<td class="font-medium">{{user.wechat || '-'}}</td>-->
                <!--</tr>-->
                </tbody>
              </table>
              <table class="table m-b-0" style="border-bottom: none;">
                <tbody>
                <tr>
                  <td width="40px" class="text-xl-right" style="padding: 12px 2px;">API：</td>
                  <td class="font-medium" style="padding: 12px 2px;">{{user.apikey || '-未设置-'}}</td>
                </tr>
                <tr>
                  <td class="text-xl-right" style="padding: 12px 2px;">Secret：</td>
                  <td class="font-medium" style="padding: 8px 2px;">
                    <input type="text" readonly="readonly" v-model="user.secret"
                           style="width: 100%;border: 1px solid #efefef;padding: 2px;font-size: 12px;"/>
                  </td>
                </tr>
                <tr>
                  <td class="text-xl-right" style="padding: 12px 2px;">钱包：</td>
                  <td class="font-medium" style="padding: 8px 2px;" v-show="!!user.walletaddress">
                    <input type="text" readonly="readonly" v-model="user.walletaddress"
                           style="width: 80%;border: 1px solid #efefef;padding: 2px;font-size: 12px;"/>
                    <span><a class="btn-min btn-min-primary fl-right" @click="showPrompAddress"
                             style="margin: 3px 0 0 0;text-indent: 0;">修改</a></span>
                  </td>
                  <td class="font-medium" style="padding: 12px 2px;" v-show="!user.walletaddress">
                    -未设置-
                    <span><a class="btn-min btn-min-primary fl-right" @click="showPrompAddress"
                             style="margin: 3px 0 0 0;text-indent: 0;">修改</a></span>
                  </td>
                </tr>
                <tr>
                  <td class="text-xl-right" style="padding: 12px 2px;">安全管理：</td>
                  <td class="font-medium" style="padding: 8px 2px;">
                    <a class="w-button button no-margin" href="javascript:;" style="color: #FFFFFF;margin: 0;"
                       @click="showEditFn">修改密码</a>
                  </td>
                </tr>
                </tbody>
              </table>
              <br>
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <div class="card waitMe_container">
              <div class="header">
                <h2>数据管理 - <span class="font-14" style="font-weight: 400;">{{name}}</span></h2>
                <ul class="header-dropdown">
                  <li><a href="javascript:void(0);" @click="checkTabFn('')" data-loading-effect="pulse"><i
                    class="fa fa-refresh"></i></a></li>
                  <li><a href="javascript:void(0);" class="full-screen"><i class="fa fa-expand"></i></a></li>
                  <li class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button"
                       aria-haspopup="true" aria-expanded="false"></a>
                    <ul class="dropdown-menu dropdown-menu-right animated bounceIn">
                      <li><a @click="checkTabFn('buy')">购买历史</a></li>
                      <li><a @click="checkTabFn('Invit')">邀请分红明细</a></li>
                      <li><a @click="checkTabFn('profit')">利润分红明细</a></li>
                      <li><a @click="checkTabFn('pay')">支付平台明细</a></li>
                      <li><a @click="checkTabFn('put')">提现历史</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="body buyList" v-show="tabType == 1">
                <div class="block-content">
                  <div style="min-height: 407px;">
                    <table class="table table-striped table-bordered">
                      <thead>
                      <tr>
                        <th>发起时间</th>
                        <th>开通费用</th>
                        <th>状态</th>
                        <th>操作（原因）</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in  renewList" :key="item.id">
                        <td>{{item.timeTxt}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.typeTxt}}</td>
                        <td>
                          <div v-if="item.type == 0">
                            <button class="btn btn-info btn-xs" @click="showPrompPut4(item,'pay')">上传凭证</button>
                          </div>
                          <div v-if="item.type == 3">
                            {{item.desc}}
                          </div>
                        </td>
                      </tr>
                      <tr v-if="renewList.length <= 0">
                        <td colspan="4" style="text-align: center">没有购买记录</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <pageBox class="pull-right" :pagination="pagination"
                           v-on:setPageData="pagesFn($event)"></pageBox>
                </div>
              </div>
              <div class="body buyList" v-show="tabType == 2">
                <div class="block-content">
                  <div style="min-height: 407px;">
                    <table class="table table-striped table-bordered">
                      <thead>
                      <tr>
                        <th>时间</th>
                        <th>金额</th>
                        <th>邀请帐号</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in InviteData" :key="item.id">
                        <td>{{item.timeTxt.split(' ')[0]}}</td>
                        <td>{{item.bot_change_num}} BTC</td>
                        <td>{{((item.bot_warn_txt).replace('来自下级','')).replace('账户购买分红','')}}</td>
                      </tr>
                      <tr>
                        <td class="text-center" colspan="3" v-if="InviteData.length <= 0">没有更多数据...</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <pageBox class="pull-right" :pagination="pageInvite"
                           v-on:setPageData="pageInviteFn($event)"></pageBox>
                </div>
              </div>
              <div class="body buyList" v-show="tabType == 3">
                <div class="block-content">
                  <div style="min-height: 407px;">
                    <table class="table table-striped table-bordered">
                      <thead>
                      <tr>
                        <th>时间</th>
                        <th>金额</th>
                        <th>下级帐号</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in ProfitData" :key="item.id">
                        <td>{{item.timeTxt.split(' ')[0]}}</td>
                        <td>{{item.bot_change_num}} BTC</td>
                        <td>{{((item.bot_warn_txt).replace('来自','')).replace('账户的盈利分红','')}}</td>
                      </tr>
                      <tr>
                        <td class="text-center" colspan="3" v-if="ProfitData.length <= 0">没有更多数据...</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <pageBox class="pull-right" :pagination="pageProfit"
                           v-on:setPageData="pageProfitFn($event)"></pageBox>
                </div>
              </div>
              <div class="body buyList" v-show="tabType == 4">
                <div class="block-content">
                  <div style="min-height: 407px;">
                    <table class="table table-striped table-bordered">
                      <thead>
                      <tr>
                        <th>发起时间</th>
                        <th>转账金额</th>
                        <th>状态</th>
                        <th>操作（原因）</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in  bonusList" :key="item.id">
                        <td>{{item.timeTxt}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.typeTxt}}</td>
                        <td>
                          <div v-if="item.type == 0">
                            <button class="btn btn-info btn-xs" @click="showPrompPut4(item,'bonus')">上传凭证</button>
                          </div>
                          <div v-if="item.type == 3">
                            {{item.desc}}
                          </div>
                        </td>
                      </tr>
                      <tr v-if="bonusList.length <= 0">
                        <td colspan="4" style="text-align: center">没有转账记录</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <pageBox class="pull-right" :pagination="pageBonus" v-on:setPageData="pageBonusFn($event)"></pageBox>
                </div>
              </div>
              <div class="body buyList" v-show="tabType == 5">
                <div class="block-content">
                  <div style="min-height: 407px;">
                    <table class="table table-striped table-bordered">
                      <thead>
                      <tr>
                        <th>时间</th>
                        <th>提现金额</th>
                        <th>状态</th>
                        <th>备注</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in putList" :key="item.id">
                        <td>{{item.timeTxt}}</td>
                        <td>{{item.put_num || '无效金额'}}</td>
                        <td>{{item.typeTxt}}</td>
                        <td>{{item.desc}}</td>
                      </tr>
                      <tr v-show="putList.length <= 0">
                        <td colspan="4" style="text-align: center">没有提现记录</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <pageBox class="pull-right" :pagination="putPagination"
                         v-on:setPageData="putPagesFn($event)"></pageBox>
              </div>
              <div class="waitMe" v-show="ListLoading" data-waitme_id="411"
                   style="background: rgba(255, 255, 255, 0.9);">
                <div class="waitMe_content vertical" style="margin-top: -34.5px;">
                  <div class="waitMe_progress pulse" style="">
                    <div class="waitMe_progress_elem1" style="border-color:#555"></div>
                  </div>
                  <div class="waitMe_text" style="color:#555;">Loading...</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12" style="height: 640px;margin-bottom: 60px;padding-bottom: 40px;">
            <div class="card weather2 box-border pd-20">
              <div class="top-header bg_white">
                <span class="font18">邀请关系拓扑图</span>
              </div>
              <div class="myChart" id="myChart"
                   style="width: 100%;height: 100%;min-height: 600px;background: #fff;"></div>
            </div>
          </div>
          <!--<section class="w-section section" style="padding: 20px 10px;">-->
            <!--<div class="container">-->
              <!--<div class="w-col w-col-12 border1" style="margin: 0 auto;float: none;">-->
              <!--</div>-->
            <!--</div>-->
          <!--</section>-->
        </div>

        <div class="modal fade" id="preview" tabindex="-1" role="dialog">
          <div class="modal-dialog">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="fa fa-close"></span></button>

            <div class="modal-content">
              <div class="modal-body padding-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--</div>-->
</template>
<!--<script src="../../../static/index/js/libscripts.bundle.js"></script>-->
<script>
  import pageBox from "../../components/com-pagination";
  import vdialog from "../../components/com-dialog";
  import md5 from 'js-md5'
  export default {
    components: {
      pageBox,
      vdialog
    },
    data: function () {
      return {
        editPwd: {
          oriPwd: '',
          newPwd: '',
          conPwd: '',
        },//修改密码
        myChart: {},
        user: {},
        users: {},
        forms: '',
        name: '购买记录',
        editPwdOptions: {//弹窗配置项
          width: '500',//弹窗宽度
          title: '修改密码',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        dialogOptions: {//弹窗配置项
          width: '500',//弹窗宽度
          title: '编辑资料',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        dialogOptionsAddress: {//弹窗配置项
          width: '500',//弹窗宽度
          title: '修改钱包地址',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        dialogOptions4: {//弹窗配置项
          width: '500',//弹窗宽度
          title: '上传凭证',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          hasBtnTxt: '提交',
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        pagination: {//分页参数
          pageIndex: 1,
          pageSize: 8,
          startCount: 0,
          totalCount: 0,
          pageCount: 0,
        },
        putPagination: {
          pageIndex: 1,
          pageSize: 8,
          startCount: 0,
          totalCount: 0,
          pageCount: 0
        },//提现分页参数
        pageInvite: {//邀请分红分页参数
          pageIndex: 1,
          pageSize: 8,
          startCount: 0,
          totalCount: 0,
          pageCount: 0,
        },//邀请分红分页参数
        pageProfit: {//利润分红分页参数
          pageIndex: 1,
          pageSize: 8,
          startCount: 0,
          totalCount: 0,
          pageCount: 0
        },//利润分红分页参数
        pageBonus: {//给平台分红转账记录
          pageIndex: 1,
          pageSize: 8,
          startCount: 0,
          totalCount: 0,
          pageCount: 0
        },//给平台分红分页参数
        showEditPwd: false,//修改密码
        showDialog: false,//修改资料
        showDialogAddress: false,//修改钱包地址
        showDialog4: false,//上传图片弹窗
        renewList: [],//充值开通数据
        InviteData: [],//邀请分红数据
        ProfitData: [],//利润分红数据
        putList: [],//提现数据
        bonusList: [],//给平台分红转账记录
        tabType: 1,//数据切换
        renewItem: {},//充值上传数据
        ListLoading: false,
      }
    },
    mounted() {
      let _this = this;
      _this.user = JSON.parse(localStorage.getItem('user')) || '';
      _this.users = JSON.parse(localStorage.getItem('user')) || '';
      _this.checkTabFn('buy');
      require("../../../static/index/js/index.js");
      /*ECharts图表*/
      var echarts = require('echarts');
      _this.myChart = echarts.init(document.getElementById('myChart'));
      if(!!_this.$route.query.type){
        // _this.tabType = 'pay';
        _this.checkTabFn('pay')
      }
      _this.directData = _this.user;
      _this.getInitData(_this.user.Invitcode);
    },
    methods: {
      getInitData: function (code) {
        let _this = this;
        let directData = _this.directData;
        _this.$axios.post('getcode/user', {'Invitcode': code}).then(function (result) {
          if (result.status == 0) {
            let nodes = [],
              links = [],
              obj = {
                "name": directData.account,//名称
                "Invitdcode": directData.Invitdcode,//受邀码
                "Invitcode": directData.Invitcode,//邀请码
                "attributes": directData,
                "type": 'up',
                "id": directData.account,//id
                "size": 80,//圆的大小
                "url": "",
                "category": 8//类别
              }
            nodes.push(obj);
            result.data.forEach(function (item, index) {
              let obj = {
                "name": item.account,//名称
                "Invitdcode": item.Invitdcode,//受邀码
                "Invitcode": item.Invitcode,//邀请码
                "attributes": item,
                "type": 'down',
                "id": item.account,//id
                "size": 50,//圆的大小
                "url": "",
                "category": 4//类别
              }
              let obj2 = {
                "source": directData.account,//源点
                "target": item.account//目标
              }
              nodes.push(obj);
              links.push(obj2);
            });

            _this.graph = {
              nodes: nodes,
              links: links
            }
            _this.initECharsFn();
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      editPwdFn (json) {
        let _this = this;
        if (json.type === 'close') {
          this.showEditPwd = false;
        } else {//有表单等要操作的内容
          if (_this.editPwd.newPwd != _this.editPwd.conPwd) {
            _this.myMessage.error('两次密码不一致，请核对!');
            _this.conPwd = '';
            return;
          }
          let obj = {
            orPwd: md5(_this.editPwd.oriPwd),
            pwd:   md5(_this.editPwd.conPwd),
            account: _this.user.account
          };
          _this.$axios.post('repwd', obj).then(function (result) {
            if (result.status == 0) {
              _this.showEditPwd = false;
              _this.myMessage.success('修改成功,请重新登录!');
              setTimeout(function () {
                _this.$store.commit('REMOVE_COUNT', '');
                window.localStorage.clear();
                _this.$router.push("/login");
                _this.$router.go(0);
              }, 2000)
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        }
      },
      getBuyDataFn: function () {
        let _this = this;
        _this.ListLoading = !_this.ListLoading;
        _this.$axios.get('getRenew/' + _this.user.account).then(function (result) {//获取购买记录
          if (result.status == 0) {
            _this.renewList = result.data.map(item => {
              let date = new Date(item.create_time);
              item['timeTxt'] = _this.common.initTimeFn(date);
              switch (item.type) {
                case '0':
                  _this.showTop = true;
                  item['typeTxt'] = '等待提交转账凭证';
                  break;
                case '1':
                  item['typeTxt'] = '审核中';
                  break;
                case '2':
                  item['typeTxt'] = '已完成';
                  break;
                case '3':
                  item['typeTxt'] = '失败';
                  break;
              }
              return item;
            });
            _this.ListLoading = !_this.ListLoading;
          } else {
            // _this.myMessage.error(result.msg);
            _this.ListLoading = !_this.ListLoading;
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
          _this.ListLoading = !_this.ListLoading;
        })
      },//购买记录  缺少分页
      getPutDataFn: function () {
        let _this = this;
        _this.ListLoading = !_this.ListLoading;
        _this.$axios.post('getUserPut', {
          account: _this.user.account,
          uuid: _this.user.uuid,
          pageIndex: _this.putPagination.pageIndex,
          pageSize: _this.putPagination.pageSize
        }).then(function (result) {
          if (result.status == 0) {
            _this.putList = result.data.map(item => {
              let date = new Date(item.create_time)
              item['timeTxt'] = _this.common.initTimeFn(date);
              item['typeTxt'] = item.type == 0 ? '申请中' : (item.type == 1 ? '成功' : '失败');
              return item;
            });
            _this.putPagination.totalCount = result.count;
            _this.putPagination.pageCount = Math.ceil(_this.putPagination.totalCount / _this.putPagination.pageSize);
            _this.ListLoading = !_this.ListLoading;
          } else {
            // _this.myMessage.error(result.msg);
            _this.ListLoading = !_this.ListLoading;
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
          _this.ListLoading = !_this.ListLoading;
        })
      },//提现记录
      initRecordInvite: function () {//邀请分红查询
        let _this = this;
        _this.ListLoading = !_this.ListLoading;
        _this.$axios.get('getRecordInvite?account=' + _this.user.account + '&pageIndex=' + _this.pageInvite.pageIndex + '&pageSize=' + _this.pageInvite.pageSize).then(function (result) {//获取邀请分红
          if (result.status == 0) {
            _this.InviteData = result.data.map(item => {
              let time = new Date(item.bot_set_time)
              item.timeTxt = _this.common.initTimeFn(time);
              return item;
            });
            _this.pageInvite.totalCount = result.count;
            _this.pageInvite.pageCount = Math.ceil(_this.pageInvite.totalCount / _this.pageInvite.pageSize);
            _this.ListLoading = !_this.ListLoading;
          } else {
            _this.myMessage.error(result.msg);
            _this.ListLoading = !_this.ListLoading;
          }
        }).catch(function (err) {
          _this.ListLoading = !_this.ListLoading;
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },//邀请分红查询
      initRecordProfit: function () {//盈利分红查询
        let _this = this;
        _this.ListLoading = !_this.ListLoading;
        _this.$axios.get('getRecordProfit?account=' + _this.user.account + '&pageIndex=' + _this.pageProfit.pageIndex + '&pageSize=' + _this.pageProfit.pageSize).then(function (result) {//获取盈利分红
          if (result.status == 0) {
            _this.ProfitData = result.data.map(item => {
              let time = new Date(item.bot_set_time)
              item.timeTxt = _this.common.initTimeFn(time);
              return item;
            })
            _this.pageProfit.totalCount = result.count;
            _this.pageProfit.pageCount = Math.ceil(_this.pageProfit.totalCount / _this.pageProfit.pageSize);
            _this.ListLoading = !_this.ListLoading;
          } else {
            _this.ListLoading = !_this.ListLoading;
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.ListLoading = !_this.ListLoading;
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },//盈利分红查询
      initBonusList: function () {//给平台分红转账记录
        let _this = this;
        _this.ListLoading = !_this.ListLoading;
        _this.$axios.get('getBonus/' + _this.user.account + '/' + _this.pageBonus.pageIndex + '/' + _this.pageBonus.pageSize).then(function (result) {
          if (result.status == 0) {
            _this.bonusList = result.data.map(item => {
              let date = new Date(item.create_time)
              item['timeTxt'] = _this.common.initTimeFn(date);
              switch (item.type) {
                case '0':
                  _this.showTop = true;
                  item['typeTxt'] = '等待提交凭证';
                  break;
                case '1':
                  item['typeTxt'] = '审核中';
                  break;
                case '2':
                  item['typeTxt'] = '已完成';
                  break;
                case '3':
                  item['typeTxt'] = '失败';
                  break;
              }
              return item;
            });
            _this.pageBonus.totalCount = result.count;
            _this.pageBonus.pageCount = Math.ceil(_this.pageBonus.totalCount / _this.pageBonus.pageSize);
            _this.ListLoading = !_this.ListLoading;
          } else {
            // _this.myMessage.error(result.msg);
            _this.ListLoading = !_this.ListLoading;
          }
        }).catch(function (err) {
          _this.ListLoading = !_this.ListLoading;
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },//给平台分红转账记录
      showPromp() {
        this.showDialog = true;
      },
      showEditFn() {
        this.showEditPwd = true;
      },
      showPrompAddress() {
        this.showDialogAddress = true;
      },
      modalResponse(json) {//修改数据
        let _this = this;
        if (json.type === 'close') {
          this.showDialog = false;
          this.showDialogAddress = false;
        } else {//有表单等要操作的内容
          _this.$axios.post('useredit', _this.users).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('修改成功!');
              _this.showDialog = false;
              _this.showDialogAddress = false;
              _this.user = _this.users;
              localStorage.setItem('user', JSON.stringify(_this.user))
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        }
      },//修改个人信息
      putPagesFn: function (e) { //申请提现记录分页调用方法
        let _this = this;
        _this.putPagination = e;
        _this.getPutDataFn();
      },//申请提现记录分页调用方法
      pageInviteFn: function (e) { //邀请分红分页调用方法
        let _this = this;
        _this.pageInvite = e;
        _this.initRecordInvite();
      },//邀请分红分页调用方法
      pageProfitFn: function (e) { //盈利分红分页调用方法
        let _this = this;
        _this.pageProfit = e;
        _this.initRecordProfit();
      },//盈利分红分页调用方法
      pageBonusFn: function (e) { //盈利分红分页调用方法
        let _this = this;
        _this.pageBonus = e;
        _this.initBonusList();
      },//盈利分红分页调用方法
      checkTabFn(type) {//切换tab
        let _this = this;
        if (!type) {
          console.log(_this.tabType);
          switch (_this.tabType) {
            case 1://购买
              type = 'buy';
              break;
            case 2://邀请
              type = 'Invit';
              break;
            case 3://分红
              type = 'profit';
              break;
            case 4://支付分红
              type = 'pay';
              break;
            case 5://提现
              type = 'put';
              break;
          }
        }
        // else {
        switch (type) {
          case 'buy'://购买
            _this.tabType = 1;
            _this.name = '购买记录';
            _this.getBuyDataFn();
            break;
          case 'Invit'://邀请
            _this.tabType = 2;
            _this.name = '邀请分红记录';
            _this.initRecordInvite();
            break;
          case 'profit'://分红
            _this.name = '利润分红记录';
            _this.tabType = 3;
            _this.initRecordProfit();
            break;
          case 'pay'://支付分红
            _this.name = '已支付分红记录';
            _this.tabType = 4;
            _this.initBonusList();
            break;
          case 'put'://提现
            _this.tabType = 5;
            _this.name = '提现申请记录';
            _this.getPutDataFn();
            break;
        }
        // }
      },
      showPrompPut4(item, type) {//上传凭证弹窗
        this.showDialog4 = true;
        this.renewItem = item;
        this.renewItem['class'] = type;
      },//上传凭证
      modalResponse4(json) {
        let _this = this;
        if (json.type === 'close') {
          _this.showDialog4 = false;
        } else {//完成转账
          if (!_this.forms) {
            _this.myMessage.info('请先上传附件!');
            return;
          }
          _this.forms.append('id', _this.renewItem.id);
          _this.$axios.post('addPicture/' + _this.renewItem.account + '/' + _this.renewItem.class, _this.forms).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('提交成功!');
              _this.showDialog4 = false;
              _this.showTop = false;
              if (_this.renewItem.class == 'pay') {
                _this.getBuyDataFn();
              } else {
                _this.initBonusList()
              }
              _this.forms = '';
              $('#picUrl').val('');
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        }
      },//完成凭证上传
      add_img(e) {
        let _this = this;
        let img1 = event.target.files[0];
        let size = img1.size;//文件的大小，判断图片的大小  
        if (size > 2097152) {
          alert('请选择2M以内的图片！');
          $('#picUrl').val('');
          return false;
        }
        _this.forms = new FormData();
        _this.forms.append('picUrl', img1);
      },//上传图片处理
      initECharsFn: function () {
        let _this = this;
        var graph = _this.graph;

        _this.myChart.hideLoading();
        _this.myChart.clear()
        var categories = [];
        for (var i = 0; i < 3; i++) {
          categories[i] = {
            name: '类型' + i
          };
        }
        graph.nodes.forEach(function (node) {
          node.itemStyle = null;//
          node.symbolSize = node.size;//强制指定adminadmin的大小
          node.x = node.y = null;
          node.draggable = true;

        });
        var option = {
          title: {
            text: '',//文本标题
            subtext: '',//副标题
            top: 'bottom',//上下位置
            left: 'right'//左右位置
          },
          tooltip: {
            trigger: 'item',
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
            borderRadius: 0,
            enterable: true,
            textStyle: {
              color: '#666666',
              extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
            },
            formatter: function (params, ticket, callback) {
              // let copyCodeFns = _this.copyCodeFn()
              if (params.data.source !== undefined && params.data.target !== undefined) {
                return
              }
              let type = params.data.attributes.type == '1' ? '试用中' : (params.data.attributes.type == '2' ? '购买用户' : (params.data.attributes.type == '0' ? '未付费' : '停止使用'));
              let html = "<div style='line-height:25px;text-align:left;position: absolute;left: 0;top: 0;padding: 10px 20px;width: 200px;height: 110px;border: 1px solid #cfcfcf;background: rgba(255,255,255,.9);z-index: 199;'>" +
                "<label style='display:block;'>用户账号: &nbsp;&nbsp;&nbsp;" + params.data.name + "</label>" +
                "<label style='display:block;'>会员状态: &nbsp;&nbsp;&nbsp;" + type + "</label>" +
                "<label style='display:block;'><a class='clickA'>复制邀请链接</a></label>" +
                "</div>";
              setTimeout(function () {
                $('.clickA').off('click').on('click', function () {
                  _this.copyCodeFn(params.data.Invitcode)
                });
              }, 500)
              return html;
            },
          },
          animation: false,//是否开启动画
          series: [
            {
              name: '',
              type: 'graph',
              layout: 'force',
              data: graph.nodes,//adminadmin数据
              links: graph.links,//adminadmin边数据
              categories: 'categories',//策略
              roam: false,//是否开启滚轮缩放和拖拽漫游，默认为false（关闭），其他有效输入为true（开启），'scale'（仅开启滚轮缩放），'move'（仅开启拖拽漫游）
              label: {
                show: 'false',
                position: 'right'
              },
              slient: false,//是否响应点击事件，为false的时候就是响应
              force: {
                repulsion: 800,
                edgeLength: [10, 100],
              }
            }
          ]
        };

        _this.myChart.setOption(option);

        function focus(param) {
          var data = param.data;
          if (data.source !== undefined && data.target !== undefined) { //点击的是边
            return;
          } else {
            if (data.type == 'up') {//返回上级
              if (!!data.Invitdcode && data.name != _this.user.account) {
                _this.getInitFatherData(data.Invitdcode)
              } else {
                _this.myMessage.info('已经是最顶层了');
              }
            } else {
              _this.directData = data.attributes
              _this.getInitData(data.Invitcode)
            }
          }
        }

        _this.myChart.off('click')
        _this.myChart.on('click', focus)
      },
      getInitFatherData: function (code) {
        let _this = this;
        _this.$axios.post('getcode/user/father', {'Invitcode': code}).then(function (result) {
          if (result.status == 0) {
            _this.directData = result.data[0]
            _this.getInitData(_this.directData.Invitcode)
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
    }
  }
</script>
<style src="../../../static/index/css/bootstrap.min.css" scoped></style>
<style src="../../../static/index/css/animate.min.css" scoped></style>
<style scoped>

  .col-sm-12 {
    padding-left: 2px;
    padding-right: 2px;
  }

  .hover-bar:hover .hoverBox {
    display: block;
  }

  .box-border {
    border: 1px solid rgb(228, 228, 228);
    margin-bottom: 30px;
    transition: all 300ms;
    /*cursor: pointer;*/
    /*overflow: hidden;*/
  }

  .box-border:hover {
    border: 1px solid rgba(0, 174, 205, 0.3) !important;
    box-shadow: 2px 2px 10px rgba(0, 174, 205, 0.3);
  }

  .row {
    margin: 0;
  }

  .box-border {
    border: 1px solid rgb(228, 228, 228);
    margin-bottom: 30px;
    transition: all 300ms;
    /*cursor: pointer;*/
    /*overflow: hidden;*/
  }

  .box-border:hover {
    border: 1px solid rgba(0, 174, 205, 0.3) !important;
    box-shadow: 2px 2px 10px rgba(0, 174, 205, 0.3);
  }

  .top-header {
    background: #fafafa;
    color: #666;
    min-height: 47px;
    line-height: 40px;
    text-indent: 20px;
    overflow: hidden;
    border-bottom: 1px solid #efefef;
  }

  .bg_white.top-header {
    background: none;
  }

  .table.m-b-0 {
    width: 88%;
    border-bottom: 1px solid #cfcfcf;
    margin: 0 auto;
  }

  .table.m-b-0 tr td {
    border: none;
  }

  .form-input {
    float: right;
  }

  .form-horizontal .control-label {
    text-align: left;
    font-weight: 600;
    padding-top: 10px;
    padding-right: 0;
  }

  .card .body {
    padding: 0 5px;
  }

  .button:hover {
    text-decoration: none;
    background-color: #414141;
  }

  .button {
    background-color: #00aecd;
    width: 70px;
    line-height: 20px;
    height: 20px;
    padding: 0 5px;
    font-size: 12px;
  }

  .table.table-striped.table-bordered {
    font-size: 12px;
  }

  .table.table-striped.table-bordered button {
    height: 22px;
    padding: 0 5px;
    line-height: 18px;
    font-size: 12px;
  }

  .file-input input[type=file], .file-input input[type=file]:focus, .file-input input[type=file]:hover {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 2;
    outline: 0;
    width: 100%;
    height: 100%;
    -webkit-opacity: 0;
    -moz-opacity: 0;
    opacity: 0;
  }

  .btn-primary {
    background-color: #17a2b8 !important;
    border-color: #17a2b8 !important;
    position: relative;
  }

  .btn-primary:hover {
    background-color: #138496 !important;
    border-color: #117a8b !important;
    position: relative;
  }
</style>


