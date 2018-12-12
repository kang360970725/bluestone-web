<template>
  <div>
    <!-- SUB BANNER -->
    <!--<div class="sub-banner">-->
      <!--<div class="w-container">-->
        <!--<div class="w-row">-->
          <!--<div class="w-col w-col-8">-->
            <!--<h4 class="title-bread">{{$t('m.header.Bot')}} <span class="sub-title-lighter">/ {{$t('m.header.bodyTitle')}}<br></span>-->
            <!--</h4>-->
          <!--</div>-->
          <!--<div class="w-col w-col-4 col-right">-->
            <!--&lt;!&ndash;<div class="breadcrumbs">Unikue /&nbsp;Shortcodes</div>&ndash;&gt;-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!-- END SUB BANNER -->
    <section class="w-section section" style="padding: 5px 10px;">
      <div class="container">
        <div class="w-col w-col-12 border1" style="margin: 0 auto;float: none;">
          <div class="w-clearfix">
            <div class="container">
              <div class="w-tabs" data-duration-in="300" data-duration-out="100">
                <div class="w-tab-menu">
                  <a v-if="user.level >= 5" class="w-tab-link w-inline-block tab" data-w-tab="Tab 1" @click="initTabId(1)" :class="user.level >= 5 ? 'w--current':''">
                    <div>会员管理</div>
                  </a>
                  <a v-if="user.level >= 5" class="w-tab-link w-inline-block tab" data-w-tab="Tab 2" @click="initTabId(2)">
                    <div>提现管理</div>
                  </a>
                  <a v-if="user.level >= 5" class="w-tab-link w-inline-block tab" data-w-tab="Tab 3" @click="initTabId(3)">
                    <div>充值支付核实</div>
                  </a>
                  <a v-if="user.level >= 5" class="w-tab-link w-inline-block tab" data-w-tab="Tab 4" @click="initTabId(4)">
                    <div>分红支付核实</div>
                  </a>
                  <a v-if="user.level >= 5" class="w-tab-link w-inline-block tab" data-w-tab="Tab 5" @click="initTabId(5)">
                    <div>排行榜</div>
                  </a>
                  <a v-if="user.level >= 5" class="w-tab-link w-inline-block tab" data-w-tab="Tab 6" @click="initTabId(6)">
                    <div>异常预警</div>
                  </a>
                  <a v-if="user.level >= 5" class="w-tab-link w-inline-block tab" data-w-tab="Tab 7" @click="initTabId(7)">
                    <div>监控中心</div>
                  </a>
                </div>
                <div class="w-tab-content tab-content tab-contentAdmin">
                  <!--会员管理-->
                  <div v-if="user.level >= 5" class="w-tab-pane" data-w-tab="Tab 1" :class="user.level >= 5 ? 'w--tab-active':''">
                    <user v-if="tabType == 1"/>
                  </div>
                  <!--Tab2-->
                  <div v-if="user.level >= 5" class="w-tab-pane" data-w-tab="Tab 2">
                    <put v-if="tabType == 2"/>
                  </div>
                  <!--Tab3-->
                  <div v-if="user.level >= 5" class="w-tab-pane" data-w-tab="Tab 3">
                    <renew v-if="tabType == 3"/>
                  </div>
                  <!--Tab4-->
                  <div v-if="user.level >= 5" class="w-tab-pane" data-w-tab="Tab 4">
                    <bonus v-if="tabType == 4"/>
                  </div>
                  <!--Tab5-->
                  <div v-if="user.level >= 5" class="w-tab-pane" data-w-tab="Tab 5">
                    <botUser v-if="tabType == 5"/>
                  </div>
                  <!--Tab6-->
                  <div v-if="user.level >= 5" class="w-tab-pane" data-w-tab="Tab 6">
                    <bot_warningr v-if="tabType == 6"/>
                  </div>
                  <!--Tab7-->
                  <div v-if="user.level >= 5" class="w-tab-pane" data-w-tab="Tab 7">
                    <monitorCenter ref="tabType" v-if="tabType == 7"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal fade" id="preview" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"-->
                                                                                          <!--class="icon-cross"></span>-->
        <!--</button>-->

        <div class="modal-content">
          <div class="modal-body padding-5" style="text-align: center;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import user from '../home/user'
  import put from '../home/put'
  import renew from '../home/renew'
  import bonus from '../home/bonus'
  import botUser from '../home/bot_user'
  import bot_warningr from '../home/bot_warningr'
  import monitorCenter from '../home/monitor'
  export default {
    name: 'information',
    components: {
      user: user,
      put: put,
      renew: renew,
      bonus: bonus,
      botUser: botUser,
      bot_warningr: bot_warningr,
      monitorCenter: monitorCenter,
    },
    data: function () {
      return {
        tabType: 1,
        user: {},
      }
    },
    mounted() {
      this.user = JSON.parse(localStorage.getItem('user')) || '';
      if(this.user.level < 5){
        this.$router.push('/index');
        this.$router.go(0)
      }
      // setTimeout(function () {
      //   let ip = returnCitySN["cip"];
      //   console.log(ip);
      // },1500);
    },
    methods: {
      initTabId (id){
        let _this = this;
        _this.tabType = id;
      }
    }
  }
</script>

<style src="../../../static/admin/css/styles.css" scoped></style>
<style>
  .tab-content {
    background: none;
    padding: 0 !important;
    margin: 0 !important;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .tab-contentAdmin .table.table-bordered {
    border: 1px solid #DBE0E4;
  }
  .tab-contentAdmin .table > thead > tr > th {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 700;
    color: #1B2431;
    border: 1px solid #dbe0e4;
  }
  .tab-contentAdmin .table.table-bordered > tbody > tr > td {
    border: 0px;
    border-bottom: 1px solid #DBE0E4;
    border-right: 1px solid #DBE0E4;
  }
  .tab-contentAdmin .table.table-striped > tbody > tr:nth-of-type(odd) {
    background: #F5F5F5;
  }
  .tab-contentAdmin .table tr td, .tab-contentAdmin .table tr th {
    line-height: 20px;
    padding: 10px 15px;
    vertical-align: middle;
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 18px;
    font-size: 12px;
  }
  .btn.btn-info {
    border-color: #42b0db;
    background: #4FB5DD;
    color: #FFF;
  }
  .btn.btn-danger {
    border-color: #ef4043;
    background: #F04E51;
    color: #FFF;
  }
  .btn.btn-xs {
    padding: 2px 10px;
    line-height: 20px;
  }
  .btn.btn-success {
    border-color: #6ea038;
    background: #76AB3C;
    color: #FFF;
  }
  .btn.btn-default {
    border-color: #DBE0E4;
    background: #FFF;
    color: #454545;
  }
  .btn {
    padding: 5px 20px;
    line-height: 28px;
    text-decoration: none;
    font-weight: 400;
    font-size: 12px;
    -webkit-transition: all 100ms ease-in;
    transition: all 100ms ease-in;
  }
  .btn.btn-info:hover, .btn.btn-info.active, .btn.btn-info:active, .btn.btn-info:active:focus {
    border-color: #2da7d6;
    background: #42b0db;
    color: #f2f2f2;
  }
  .btn.btn-danger:hover, .btn.btn-danger.active, .btn.btn-danger:active, .btn.btn-danger:active:focus {
    border-color: #ed282c;
    background: #ef4043;
    color: #f2f2f2;
  }
  .btn.btn-success:hover, .btn.btn-success.active, .btn.btn-success:active, .btn.btn-success:active:focus {
    border-color: #618d31;
    background: #6ea038;
    color: #f2f2f2;
  }
  .form-control{
    width: 100%;
  }
  .w-tab-pane{
    overflow: hidden;
    min-height: 567px;
  }
</style>
