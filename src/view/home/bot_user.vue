<template>
  <div class="block" style="padding: 10px;">
    <div v-show="editData">
      <h3 style="text-align: center;">合计BTC数量：{{btcCount.toFixed(8)}}</h3>
      <h3 style="text-align: center;">未付分红合计BTC数量：{{(profitCount * 0.3).toFixed(8)}}</h3>
      <div class="tab-data" style="min-height: 512px;">
        <div class="present-history">
          <div class="block-content" style="min-height: 512px;">
            <table class="table table-striped datatable-basic">
              <thead>
              <tr>
                <th>会员账号</th>
                <!--<th>充币</th>-->
                <!--<th>提币</th>-->
                <!--<th>本金</th>-->
                <th>本金</th>
                <th>余额</th>
                <th>总盈亏</th>
                <th>应付分红</th>
                <!--<th>方向</th>-->
                <!--<th>数量</th>-->
                <!--<th>均价</th>-->
                <!--<th>爆仓位</th>-->
                <th title="本次分红阶段盈亏">阶段盈亏</th>
                <th title="账户总实现盈亏">总盈亏</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in dataList" :key='item.id'>
                <td>{{item.user_account}}</td>
                <td>{{item.principal}}</td>
                <td>{{item.bot_amount}}</td>
                <td>{{item.bot_lirun}}</td>
                <td>{{((item.profit > 0 ? item.profit : 0) * 0.3).toFixed(6)}}</td>
                <!--<td>{{item.bot_side}}</td>-->
                <!--<td>{{item.bot_size}}</td>-->
                <!--<td>{{item.bot_avgEntryPrice}}</td>-->
                <!--<td>{{item.bot_liquidationPrice}}</td>-->
                <td>{{item.proportion}} %</td>
                <td>{{item.proportionAll}} %</td>
              </tr>
              <!--<tr v-show="dataList.length <= 0">-->
                <!--<td colspan="11" style="text-align: center">暂无数据</td>-->
              <!--</tr>-->
              </tbody>
            </table>
          </div>
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
        editData:true,
        user: {},
        dataList: [],
        btcCount:0,
        profitCount:0
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
        _this.$axios.get('getBotList').then(function (result) {
          if (result.status == 0) {
            _this.dataList = result.data.map(item => {
              item.bot_lirun = parseFloat(item.bot_lirun);
              item.bot_lirun = !item.bot_lirun ? 0 : _this.common.initNumFn(item.bot_lirun,6);
              item.bonus_base = !item.bonus_base ? 0 : _this.common.initNumFn(item.bonus_base,6);
              item.principal = parseFloat(item.bot_prevDeposited) - parseFloat(item.bot_prevWithdrawn);
              item.principal = _this.common.initNumFn(item.principal,6);
              // item.user_principal = parseFloat(item.bot_prevDeposited) - parseFloat(item.bot_prevWithdrawn) + parseFloat(item.bot_lirun);
              // item.user_principal = _this.common.initNumFn(item.user_principal,6);
              let profit = (parseFloat(item.bot_lirun) - parseFloat(item.bonus_base)).toFixed(6);
              item['profit'] = _this.common.initNumFn(profit,6);
              item['proportionAll'] = !isFinite(item.bot_lirun / item.principal * 100) ? 0 : (item.bot_lirun / item.principal * 100).toFixed(2);//盈亏比例
              item['proportion'] = !isFinite(item.profit / item.principal * 100) ? 0 : (item.profit / item.principal * 100).toFixed(2);//盈亏比例
              _this.profitCount = _this.profitCount + parseFloat(item.profit);
              _this.btcCount = _this.btcCount + parseFloat(item.user_principal);
              item.bot_amount = parseFloat(item.bot_amount);
              item.bot_amount = !item.bot_amount ? 0 : _this.common.initNumFn(item.bot_amount,6);
              return item;
            });
            setTimeout(function () {
              _this.datatables();
            },500)
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function (err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      datatables: function(){
        if($(".datatable-basic").length > 0){
          $(".datatable-basic").DataTable({
            searching: false,
            paging: false,
            info: false
          });
        }

        if($(".datatable-extended").length > 0){
          $(".datatable-extended").DataTable();
        }

      },
    }
  }
</script>

<style scoped>
  .form-horizontal .form-group {
    margin: 0 0 15px 0;
    overflow: hidden;
  }

  .form-group .col-md-10 .error {
    color: red;
    /*position: absolute;*/
  }
  .row{
    padding: 0 !important;
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

  .col-md-3 {
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
