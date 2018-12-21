<template>
  <div class="block" style="padding: 10px;">
    <div v-show="editData">
      <h3 style="text-align: center;">合计提现BTC数量：{{countPrice - (countPrice * 0.05)}}</h3>
      <h3 style="text-align: center;">合计提现扣除手续费：{{countPrice * 0.05}}</h3>
      <vdialog :isShow="showDialog" :options="dialogOptions" v-on:modalResponse="modalResponse">
        <div style="">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="w-col w-col-2 control-label">拒绝原因</label>
              <div class="w-col w-col-10">
                <textarea class="form-control" rows="5" v-model="editPut.desc"></textarea>
              </div>
            </div>
          </form>
        </div>
      </vdialog>
      <div class="clearfix">
        <div class="app-nav-tab">
          <div class="containers-tab">
            <ul>
              <li class="openables" :class="type != '' ? 'active' : ''">
              <a @click="steTypeFn('0')"><span class="icon-file-check"></span> 提现申请</a>
              </li>
              <li class="openables" :class="type == '' ? 'active' : ''">
                <a @click="steTypeFn('')"><span class="icon-file-lock"></span> 所有记录</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="tab-data" style="min-height: 512px;">
        <div class="present-history">
          <div class="block-content" style="min-height: 512px;">
            <table class="table table-striped table-bordered">
              <thead>
              <tr>
                <th>会员账号</th>
                <th>提现金额(已扣除手续费)</th>
                <th>钱包地址</th>
                <th>申请时间</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in dataList" :key='item.id'>
                <td>{{item.account}}</td>
                <td>{{(item.put_num - (item.put_num * 0.05)).toFixed(8)}}</td>
                <td>{{item.address}}</td>
                <td>{{item.timeTxt}}</td>
                <td v-show="item.type == 0">
                  <div>
                    <button class="btn btn-danger btn-xs" @click="showPromp(item)">驳回</button>
                    <button class="btn btn-success btn-xs" @click="setUserTypeFn(item,'1')">已确认</button>
                  </div>
                </td>
                <td v-show="item.type == 1">
                  <div>
                    <button class="btn btn-default btn-xs">提现成功</button>
                  </div>
                </td>
                <td v-show="item.type == 2">
                  <div>
                    <button class="btn btn-default btn-xs">已被拒绝</button>
                  </div>
                </td>
              </tr>
              <tr v-show="dataList.length <= 0">
                <td colspan="4" style="text-align: center">暂无数据</td>
              </tr>
              </tbody>
            </table>
          </div>
          <pageBox class="pull-right" :pagination="pagination" v-on:setPageData="pagesFn($event)"></pageBox>
        </div>
      </div>
    </div>
    <div v-show="!editData" class="app-tip app-tip-warning">
      <span>请在电脑上进行操作</span>
    </div>
  </div>
</template>

<script>
  import vdialog from "../../components/com-dialog";
  import pageBox from "../../components/com-pagination";
  // import '../../../static/boooya/js/app_plugins.js';

  export default {
    name: 'information',
    components: {
      vdialog,
      pageBox
    },
    data: function () {
      return {
        type: '0',
        user: {},
        editPut: {
          desc:''
        },
        dataList: [],
        // VIPTime: 1,
        dialogOptions: {//弹窗配置项
          width: '550',//弹窗宽度
          title: '提现申请',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        editData: true,
        showDialog: false,
        pagination: {//分页参数
          pageIndex: 1,
          pageSize: 10,
          startCount: 0,
          totalCount: 0,
          pageCount: 0
        },
        accountData: {},
        showCapital: false,
        countPrice: 0
      }
    },
    mounted() {
      if ($(window).width() < 900) {
        this.editData = false
      }
      this.user = JSON.parse(localStorage.getItem('user')) || '';
      if (this.user.level < 5) {
        this.$router.go(0);
        this.$router.push('/index')
      }
      this.getInitData();
    },
    methods: {
      getInitData: function () {
        let _this = this;
        _this.$axios.get('getPut?pageIndex=' + _this.pagination.pageIndex + '&pageSize=' + _this.pagination.pageSize + '&type=' + _this.type).then(function (result) {
          if (result.status == 0) {
            _this.dataList = result.data.map(item => {
              let date = new Date(item.create_time)
              item['timeTxt'] = _this.common.initTimeFn(date);
              return item;
            });
            _this.pagination.totalCount = result.count;
            _this.pagination.pageCount = Math.ceil(_this.pagination.totalCount / _this.pagination.pageSize);
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
        //获取提现统计
        _this.$axios.get('countPutSum').then(function (result) {
          if (result.status == 0) {
            _this.countPrice = result.count || 0;
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      pagesFn: function (e) { //分页调用方法
        let _this = this;
        _this.pagination = e;
        _this.getInitData();
      },
      steTypeFn: function (type) {
        let _this = this;
        _this.type = type;
        _this.pagination.pageIndex = 1;
        this.getInitData();
      },
      showPromp(item) {
        this.editPut = item;
        this.editPut.desc = '';
        this.showDialog = true;
      },
      modalResponse(json) {
        let _this = this
        if (json.type === 'close') {
          this.showDialog = false;
        } else {//有表单等要操作的内容
          // if (confirm('确定当前操作?')) {
          let obj = {
            id: _this.editPut.id,
            uuid: _this.editPut.uuid,
            account: _this.editPut.account,
            type: 2,
            desc: _this.editPut.desc
          }
          _this.$axios.put('setUserPutType', obj).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('操作成功!');
              _this.showDialog = false;
              _this.getInitData();
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })

        }
      },
      setUserTypeFn: function (item, type) {
        let _this = this;
        if (confirm('确定当前操作?')) {
          let obj = {
            id: item.id,
            uuid: item.uuid,
            account: item.account,
            type: type,
            num: item.put_num,
            desc: ''
          }
          _this.$axios.put('setUserPutType', obj).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('操作成功!');
              _this.getInitData();
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        } else {
        }
      },
      // capitalFn: function (item) {//获取账户资金统计
      //   let _this = this;
      //   _this.$axios.get('getRecordAll?account=' + item.account).then(function (result) {
      //     if (result.status == 0) {
      //       if (result.data.length <= 0) {
      //         _this.myMessage.info(result.msg);
      //         return;
      //       }
      //       _this.showCapital = true;
      //       let obj = {
      //         uuid: item.uuid,
      //         account: item.account,
      //         countBtc: result.data[0].bot_balance,//总资产
      //         countProfit: 0,//总收益
      //         countInBonus: 0,//总邀请分红
      //         countPrBonus: 0,//总收益分红
      //         countMonth: 0,//当月总收益
      //         countMoInBonus: 0,//当月邀请收益
      //         countMoPrBonus: 0,//当月分红收益
      //         countPut: 0,//总提现
      //         countMoPut: 0,//当月提现
      //         countTakes: 0,//总分佣
      //         countMoTakes: 0//当月总分佣
      //       };
      //       //获取当前时间月的第一天
      //       let date = new Date();
      //       date.setDate(1);
      //       date.setHours(0, 0, 0, 0);
      //       let times = date.getTime();
      //       result.data.forEach(item => {
      //         switch (item.type) {
      //           case '0'://收益盈利数据
      //             obj.countProfit = parseFloat(obj.countProfit,4) + parseFloat(item.bot_change_num,4);
      //             if (item.bot_set_time > times) {//当月数据
      //               obj.countMonth = parseFloat(obj.countMonth,4) + parseFloat(item.bot_change_num,4);
      //             }
      //             break;
      //           case '1'://邀请分红数据
      //             obj.countInBonus = parseFloat(obj.countInBonus,4) + parseFloat(item.bot_change_num,4);
      //             if (item.bot_set_time > times) {//当月数据
      //               obj.countMoInBonus = parseFloat(obj.countMoInBonus,4) + parseFloat(item.bot_change_num,4);
      //             }
      //             break;
      //           case '2'://团队分红数据
      //             obj.countPrBonus = parseFloat(obj.countPrBonus,4) + parseFloat(item.bot_change_num,4);
      //             if (item.bot_set_time > times) {//当月数据
      //               obj.countMoPrBonus = parseFloat(obj.countMoPrBonus,4) + parseFloat(item.bot_change_num,4);
      //             }
      //             break;
      //           case '3'://提现数据
      //             obj.countPut = parseFloat(obj.countPut,4) + parseFloat(item.bot_change_num,4);
      //             if (item.bot_set_time > times) {//当月数据
      //               obj.countMoPut = parseFloat(obj.countMoPut,4) + parseFloat(item.bot_change_num,4);
      //             }
      //             break;
      //           case '4'://上级分佣抽成
      //             obj.countTakes = parseFloat(obj.countTakes,4) + parseFloat(item.bot_change_num,4);
      //             if (item.bot_set_time > times) {//当月数据
      //               obj.countMoTakes = parseFloat(obj.countMoTakes,4) + parseFloat(item.bot_change_num,4);
      //             }
      //             break;
      //         }
      //         // return item;
      //       });
      //       _this.accountData = obj;
      //     } else {
      //       _this.myMessage.error(result.msg);
      //     }
      //   }).catch(function (err) {
      //     console.log(err);
      //   })
      // },
    }
  }
</script>

<style scoped>
  .form-horizontal .form-group {
    margin: 0 0 15px 0;
    overflow: hidden;
  }

  .form-group .w-col w-col-10 .error {
    color: red;
    /*position: absolute;*/
  }

  hr {
    height: 1px;
    background: #cfcfcf;
  }

  .user-info > p {
    text-align: right;
  }

  .user-info > p > a {
    cursor: pointer;
  }

  .table-head-custom {
    margin-bottom: 10px;
    /* margin-bottom: 0 !important;*/
  }

  .user-info {
    padding: 5px 40px 60px;
    line-height: 30px;
    border: 1px solid #DBE0E4;
  }

  .user-info label p {
    float: none;
  }

  .user-info label p span:nth-child(1) {
    width: 70px;
    display: inline-block;
  }

  .user-info label {
    display: block;
    font-weight: 400;
    color: #62676d;
  }

  .block-content .row {
    padding: 0;
  }

  .block-content .row .col-sm-12 {
    padding-left: 0;
    padding-right: 0;
  }

  .row .col-sm-12 .table {
    margin-top: 0;
  }

  .app .containers-tab {
    width: 100%;
    float: none;
    zoom: 1;
    margin: 0px auto;
    padding: 0 10px;
  }

  .app .app-nav-tab {
    background: #c5d4de;
    float: left;
    width: 100%;
    position: relative;
  }

  .app .app-nav-tab ul {
    float: left;
    width: 100%;
    margin: 0px 0px 0px 0px;
    list-style: none;
    padding: 10px 0px 0px 0;
    /*position: relative;*/
  }

  .app .app-nav-tab ul > li {
    width: auto;
  }

  .app .app-nav-tab ul > li.openables.active > a {
    background: #FFF;
    color: #1B2431;
  }

  .app .app-nav-tab ul > li.openables > a {
     -webkit-border-top-right-radius: 3px;
     -webkit-border-bottom-right-radius: 0px;
     -webkit-border-bottom-left-radius: 0px;
     -webkit-border-top-left-radius: 3px;
     -moz-border-radius-topright: 3px;
     -moz-border-radius-bottomright: 0px;
     -moz-border-radius-bottomleft: 0px;
     -moz-border-radius-topleft: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 3px;
  }

  .app .app-nav-tab ul > li > a {
    float: left;
    padding: 10px 16px 12px 12px;
    line-height: 20px;
    color: #777;
    text-decoration: none;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
     -webkit-transition: color 100ms linear;
    transition: color 100ms linear;
    cursor: pointer;
  }

  .app .app-nav-tab ul > li > a:hover {
    color: #FFF;
  }

  .app .app-nav-tab ul > li > a span[class^="icon-"],
  .app .app-nav-tab ul > li > a .fa {
    float: left;
    margin-right: 4px;
    line-height: 20px;
    min-width: 20px;
    text-align: center;
    font-size: 16px;
  }

  .table {
    border-bottom: 1px solid #DBE0E4;
  }

  .w-col w-col-3 {
    padding-right: 0 !important;
  }

  .table-head-custom-ul {
    display: block;
    width: 100%;
    min-height: 500px;
    border: 1px solid #cfcfcf;
    padding: 0;
  }

  .table-head-custom-ul ul {
    display: block;
    width: 100%;
    float: right;
    background: #F5FFFA;
    /*border: 1px dotted #cfcfcf;*/
    border-bottom: none;
    padding: 0;
  }

  .table-head-custom-ul ul li {
    display: inline-block;
    line-height: 35px;
    font-size: 12px;
    border-top: 1px dotted #cfcfcf;
  }

  .table-head-custom-ul > li {
    display: inline-block;
    line-height: 50px;
    font-size: 13px;
    border-bottom: 1px solid #cfcfcf;
  }

  .table-head-custom-ul li .headSpan {
    float: left;
    width: 24.5%;
    text-align: center;
    font-weight: 600;
    background: #F2F2F2;
  }

  .table-head-custom-ul li .sevList {
    float: left;
    width: 24.5%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*overflow: hidden;*/
  }

  .table-head-custom-ul li .versionList {
    float: left;
    width: 20%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .table-head-custom-ul li .versionListHead {
    float: left;
    width: 20%;
    text-align: center;
    font-weight: 600;
    background: #F8F8FF;
    overflow: hidden;
  }

  .table-head-custom-ul > li .unfoldBox {
    float: left;
    width: 2%;
    cursor: pointer;
  }
</style>


