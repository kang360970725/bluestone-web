<template>
  <div>
    <vdialog :isShow="showDialog1" :options="dialogOptions1" v-on:modalResponse="modalResponse1">
      <div style="">
        <div class="col-md-12 text-center">
          <p style="font-size: 12px;font-weight: 400;margin-bottom: 0;">价格参考于火币全球站</p>
          <p style="font-size: 12px;font-weight: 400;margin-bottom: 0;">火币全球实时价格：<span style="color:#dc3545;">${{btcPriceObj.huobi.last}}</span>
          </p>
        </div>
        <div class="form-group">
          <div class="text-center">
            <img style="width: 240px;" src="/static/home/images/QR_Code/QRCode.png"/>
            <p><span style="color: rgb(15, 157, 234);">3BMEXwNSL4hZA2od3YzvD3MSFHzZohmgMR</span></p>
          </div>
        </div>
        <div class="col-md-12 text-center">
          <p style="font-size: 15px;margin-bottom: 10px;">{{user.type == 2 ? '续费' : '开通'}}版本:&nbsp;
            <select style="color:#dc3545;width: 220px;height: 24px;" v-model="openData.data_time">
              <option value="1">标准版（1000 USD ≈ {{(1000/btcPriceObj.huobi.last).toFixed(3)}}BTC）</option>
              <option value="2">专业版（2000 USD ≈ {{(2000/btcPriceObj.huobi.last).toFixed(3)}}BTC）</option>
              <option value="3">精英版（3000 USD ≈ {{(3000/btcPriceObj.huobi.last).toFixed(3)}}BTC）</option>
            </select>&nbsp;年
          </p>
          <p style="font-size: 12px;margin: -8px 0 5px;color: #a9a7a7;">备注：钱包地址只支持BTC的转入，请注意风险！</p>
        </div>
      </div>
    </vdialog>
    <div class="sub-banner">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-6">
            <h4 class="title-bread">{{$t('m.header.Bot4')}}&nbsp;<span class="sub-title-lighter">/ {{$t('m.header.bodyTitle')}}<br></span>
            </h4>
          </div>
          <div class="w-col w-col-6 col-right">
            <!--<div class="breadcrumbs">Unikue&nbsp;/&nbsp;Pages&nbsp;/&nbsp;Our Team</div>-->
          </div>
        </div>
      </div>
    </div>
    <!-- END SUB BANNER -->

    <!-- START SECTION 1 -->
    <section class="w-section section elema">
      <div class="w-container">
        <div class="big-spc-bottom">
          <div class="w-col w-col-4 col-md-6 col-sm-12">
            <div class="pricing-area-4">
              <div class="title-4">
                <h1>沐数期货 {{$t('m.service.box_tit1')}}</h1>
              </div>
              <div class="price-4">
                <h1>$1000</h1>
                <span>{{$t('m.service.times')}}</span>
              </div>
              <div class="price-body-4">
                <ul>
                  <li>&nbsp;</li>
                  <li>{{$t('m.service.box1_txt1')}}</li>
                  <li>{{$t('m.service.box1_txt2')}}</li>
                  <li>{{$t('m.service.box1_txt3')}}</li>
                  <li>{{$t('m.service.box1_txt4')}}</li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div class="price-button-4">
                <a class="button-4" @click="showPrompPut1(1)">{{$t('m.service.btn1')}}</a>
              </div>
            </div>
          </div>
          <div class="w-col w-col-4 col-md-6 col-sm-12">
            <div class="pricing-area-4">
              <div class="title-head">
                <div class="title-4">
                  <h1>沐数期货 {{$t('m.service.box_tit2')}}</h1>
                </div>
                <div class="best">
                  <span>Best value</span>
                </div>
              </div>
              <div class="price-4 price-active">
                <h1>$2000</h1>
                <span>{{$t('m.service.times')}}</span>
              </div>
              <div class="price-body-4">
                <ul>
                  <li>&nbsp;</li>
                  <li>{{$t('m.service.box2_txt1')}}</li>
                  <li>{{$t('m.service.box2_txt2')}}</li>
                  <li>{{$t('m.service.box2_txt3')}}</li>
                  <li>{{$t('m.service.box2_txt4')}}</li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div class="price-button-4">
                <a class="button-4 active-btn" @click="showPrompPut1(2)">{{$t('m.service.btn1')}}</a>
              </div>
            </div>
          </div>
          <div class="w-col w-col-4 col-md-6 col-sm-12">
            <div class="pricing-area-4">
              <div class="title-4">
                <h1>沐数期货 {{$t('m.service.box_tit3')}}</h1>
              </div>
              <div class="price-4">
                <h1>$3000</h1>
                <span>{{$t('m.service.times')}}</span>
              </div>
              <div class="price-body-4">
                <ul>
                  <li>{{$t('m.service.box3_txt1')}}</li>
                  <li>{{$t('m.service.box3_txt2')}}</li>
                  <li>{{$t('m.service.box3_txt3')}}</li>
                  <li>{{$t('m.service.box3_txt4')}}</li>
                  <li>{{$t('m.service.box3_txt5')}}</li>
                  <li>{{$t('m.service.box3_txt6')}}</li>
                </ul>
              </div>
              <div class="price-button-4">
                <a class="button-4" @click="showPrompPut1(3)">{{$t('m.service.btn1')}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="big-spc-bottom">
          <div class="w-col w-col-4 col-md-6 col-sm-12">
            <div class="pricing-area-4">
              <div class="title-4">
                <h1>沐数现货机器人</h1>
              </div>
              <div class="price-4">
                <h1>$1000</h1>
                <span>{{$t('m.service.times')}}</span>
              </div>
              <div class="price-body-4">
                <ul>
                  <li>&nbsp;</li>
                  <li>{{$t('m.service.box1_txt1')}}</li>
                  <li>{{$t('m.service.box1_txt2')}}</li>
                  <li>{{$t('m.service.box1_txt3')}}</li>
                  <li>{{$t('m.service.box1_txt4')}}</li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div class="price-button-4">
                <a class="button-4" @click="showPrompPut1(1)">{{$t('m.service.btn1')}}</a>
              </div>
            </div>
          </div>
          <div class="w-col w-col-4 col-md-6 col-sm-12">
            <div class="pricing-area-4">
              <div class="title-head">
                <div class="title-4">
                  <h1>沐数矿池计划</h1>
                </div>
                <div class="best">
                  <span>Best value</span>
                </div>
              </div>
              <div class="price-4 price-active">
                <h1>$1000</h1>
                <span>{{$t('m.service.times')}}</span>
              </div>
              <div class="price-body-4">
                <ul>
                  <li>&nbsp;</li>
                  <li>{{$t('m.service.box2_txt1')}}</li>
                  <li>{{$t('m.service.box2_txt2')}}</li>
                  <li>{{$t('m.service.box2_txt3')}}</li>
                  <li>{{$t('m.service.box2_txt4')}}</li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div class="price-button-4">
                <a class="button-4 active-btn" @click="showPrompPut1(2)">{{$t('m.service.btn1')}}</a>
              </div>
            </div>
          </div>
          <div class="w-col w-col-4 col-md-6 col-sm-12">
            <div class="pricing-area-4">
              <div class="title-4">
                <h1>战狼机器人</h1>
              </div>
              <div class="price-4">
                <h1>$2200</h1>
                <span>{{$t('m.service.times')}}</span>
              </div>
              <div class="price-body-4">
                <ul>
                  <li>{{$t('m.service.box3_txt1')}}</li>
                  <li>{{$t('m.service.box3_txt2')}}</li>
                  <li>{{$t('m.service.box3_txt3')}}</li>
                  <li>{{$t('m.service.box3_txt4')}}</li>
                  <li>{{$t('m.service.box3_txt5')}}</li>
                  <li>{{$t('m.service.box3_txt6')}}</li>
                </ul>
              </div>
              <div class="price-button-4">
                <a class="button-4" @click="showPrompPut1(3)">{{$t('m.service.btn1')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!--</section>-->
        <!--体验版申请-->
        <!--<div class="w-col w-col-12">-->
          <!--<div class="box-border">-->
            <!--<div class="top-header">-->
              <!--<span class="font18">{{$t('m.service.tit1')}}</span>-->
            <!--</div>-->
            <!--<div class="apply_Box input_outer">-->
              <!--<input type="text" class="text form-control" :placeholder="$t('m.service.tit1_txt1')"/>-->
              <!--<span class="tit1_txt2">{{$t('m.service.tit1_txt2')}}</span>-->
              <!--&lt;!&ndash;<div class="pric-btn fl-right">&ndash;&gt;-->
                <!--<button class="button fl-right" type="button">{{$t('m.service.btn2')}}</button>-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--市场运营推广方案-->
        <!--<div class="w-col w-col-12">-->
          <!--<div class="box-border1">-->
            <!--<div class="top-header">-->
              <!--<span class="font18">{{$t('m.service.tit2')}}</span>-->
            <!--</div>-->
            <!--<div class="w-col w-col-12">-->
              <!--<br>-->
              <!--<div class="box-border pd-20">-->
                <!--<div class="" :class="$i18n.locale">-->
                  <!--<img style="border: none;" class="left-ph right-ph" src="../../../static/home/img/login.png"/>-->
                  <!--<p class="font14" v-html="$t('m.service.tit2_txt1')"></p>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="w-col w-col-12">-->
              <!--<div class="w-col w-col-3">-->
                <!--<div class="box-border pd-20" :class="$i18n.locale">-->
                  <!--<p class="font14" v-html="$t('m.service.tit2_txt2')"></p>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="w-col w-col-3">-->
                <!--<div class="box-border pd-20" :class="$i18n.locale">-->
                  <!--<p class="font14" v-html="$t('m.service.tit2_txt3')"></p>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="w-col w-col-3">-->
                <!--<div class="box-border pd-20" :class="$i18n.locale">-->
                  <!--<p class="font14" v-html="$t('m.service.tit2_txt4')"></p>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="w-col w-col-3">-->
                <!--<div class="box-border pd-20" :class="$i18n.locale">-->
                  <!--<p class="font14" v-html="$t('m.service.tit2_txt5')"></p>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="w-col w-col-12 txt-ce">-->
              <!--<p class="font16" v-html="$t('m.service.desc')" style="color:#fff;text-shadow: 0 0 0.2em #006CB7, 0 0 0.2em #0316B7"></p>-->
              <!--<br>-->
              <!--<br>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </section>


  </div>
</template>

<script>
  import vdialog from "../../components/com-dialog";

  export default {
    name: 'home',
    data() {
      return {
        user: '',
        showDialog1: false,
        dialogOptions1: {//弹窗配置项
          width: '450',//弹窗宽度
          title: '购买会员服务',
          hasBtn: true, //是否需要确定按钮，默认没有确认按钮
          hasBtnTxt: '完成转账',
          closeBtn: true //是否需要关闭按钮，默认没有关闭按钮
        },
        btcPriceObj: {
          huobi: {},
          bian: {},
          OKEX: {}
        },
        openData: {
          price: '',
          data_time: '2'
        },
      }
    },
    components: {
      vdialog
    },
    mounted() {
      let _this = this;
      _this.user = JSON.parse(localStorage.getItem('user')) || '';
      _this.initPriceData();
    },
    methods: {
      modalResponse1(json) {
        let _this = this
        if (json.type === 'close') {
          _this.showDialog1 = false;
        } else {//完成转账
          let obj = {
            account: _this.user.account,
            data_time: _this.openData.data_time,
            price: _this.openData.data_time == 1 ? (1000 / _this.btcPriceObj.huobi.last).toFixed(3) : (_this.openData.data_time == 2 ? (2000 / _this.btcPriceObj.huobi.last).toFixed(3) : (3000 / _this.btcPriceObj.huobi.last).toFixed(3)),
            desc: ''
          }
          window.open('/information');
          _this.$axios.post('renew', obj).then(function (result) {
            if (result.status == 0) {
              _this.myMessage.success('提交成功!');
              _this.showDialog1 = false;
            } else {
              _this.myMessage.error(result.msg);
            }
          }).catch(function (err) {
            _this.myMessage.error('网络请求发生异常,请稍后再试...');
          })
        }
      },
      showPrompPut1(id) {
        let _this = this;
        if(!_this.user){
          window.open('/login');
          _this.myMessage.success('请先登录!');
          return;
        }
        _this.showDialog1 = true;
        window.scrollTo(0, 0);
        _this.openData.data_time = id;
      },
      initPriceData() {
        let _this = this;
        $.ajax({
          url: 'https://apibtc.btc123.com/v1/index/getNewIndexMarket?sign=BTC&type=1',
          type: "get",//请求类型
          success: function (data) {
            if (data.code == 1) {
              let list = data.data[0].ticker;
              for (let i in list) {
                if (list[i].platFromSign == 'HUOBIPRO') {
                  _this.btcPriceObj.huobi = list[i];
                  _this.btcPriceObj.huobi.up = (list[i].last / (_this.botState.bot_mex_last || 0) * 100 - 100).toFixed(2)
                }
                if (list[i].platFromSign == 'OKEX') {
                  _this.btcPriceObj.OKEX = list[i];
                  _this.btcPriceObj.OKEX.up = (list[i].last / (_this.botState.bot_mex_last || 0) * 100 - 100).toFixed(2)
                }
                if (list[i].platFromSign == 'BINANCE') {
                  _this.btcPriceObj.bian = list[i];
                  _this.btcPriceObj.bian.up = (list[i].last / (_this.botState.bot_mex_last || 0) * 100 - 100).toFixed(2)
                }
              }
            }
            setTimeout(function () {
              _this.initPriceData();
            }, 60000)
          }
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .top-pricing{
    transition: all 300ms;
  }
  .w-col-4, .box-border.pd-20{
    cursor: pointer;
  }
  .w-col-4:hover .top-pricing{
    background-color: #00aecd;
  }
  .home-bg img {
    width: 100%;
    height: auto;
  }
.text-center{
  text-align: center;
}
  .top-header {
    background: rgba(242, 242, 242, 1);
    color: #666;
    height: 47px;
    line-height: 40px;
    text-indent: 20px;
  }
  .box-border,.box-border1 {
    border: 1px solid rgb(228, 228, 228);
    margin-bottom: 30px;
    height: 100%;
    transition: all 300ms;
    /*cursor: pointer;*/
    overflow: hidden;
  }
  .pricing-wrapper{
    border: 1px solid #cfcfcf !important;
  }
  .big-spc-bottom {
    margin-bottom: 30px;
    overflow: hidden;
    padding-bottom: 10px;
  }
  .big-spc-bottom>div{
    padding: 0 15px;
  }
  .apply_Box{
    padding: 20px 20px;
    overflow: hidden;
  }
  .input_outer input{
    border: rgba(0,0,0,0.2) 1px solid !important;
    border-radius: 4px;
    -webkit-transition: all 300ms;
    transition: all 300ms;
    width: 300px;
    height: 36px;
    font: 14px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
    text-indent: 10px;
  }
  .input_outer input:focus{
    border: rgba(51, 171, 184, 0.8) 1px solid !important;
    -webkit-box-shadow: 2px 2px 10px rgba(51, 171, 184, 0.5);
    box-shadow: 2px 2px 10px rgba(51, 171, 184, 0.5);
  }
  .tit1_txt2{
    color: #888;
    padding: 20px 0;
    font-size: 12px;
    display: inline-block;
  }
  .w-col-4:hover .pricing-wrapper,.box-border.pd-20:hover{
     border: 1px solid rgba(0, 174, 205, 0.3) !important;
     box-shadow: 2px 2px 10px rgba(0, 174, 205, 0.3);
   }
  .w-col.w-col-4 .box3_box{
    padding: 20px 20px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    min-height: 260px;
    transition: all 300ms;
  }
  .pd-20{
    padding: 20px;
  }
  .w-col .w-col{
    padding-left: 10px;
    padding-right: 10px;
  }

  .elema li {
    list-style: none;
  }
  .elema .table-4{
    background: #e3e6ef;
  }
  .elema .pricing-area-4{
    background: #fff;
    text-align: center;
    border: 1px solid #bcbcbc;
    transition: .5s;
  }
  .elema .pricing-area-4:hover{
    box-shadow: 0 0 20px #c3c3c3;
  }
  .elema .price-active{
    background: #00aeef !important;
  }
  .elema .price-active h1{
    color: #fff !important;
  }
  .elema .price-active span{
    color: #fff !important;
  }
  .elema .title-head{
    position: relative;
  }
  .elema .best{
    position: absolute;
    top: 30px;
    left: -10px;
    padding: 10px 25px;
    background: #00aeef;
  }
  .elema .best:before {
    left: 114px;
    border-left: 40px solid #fff;
    border-top: 40px solid transparent;
    content: "";
    display: block;
    height: 0;
    position: absolute;
    transform: rotate(47deg);
    bottom: 3px;
  }
  .elema .best:after {
    left: 3px;
    border-left: 13px solid #00aeef;
    border-top: 13px solid transparent;
    content: "";
    display: block;
    height: 0;
    position: absolute;
    transform: rotate(47deg);
    bottom: -7px;
  }
  .elema .best span{
    font-size: 12px;
    color: #fff;
    margin-right: 20px
  }
  .elema .title-4{
    padding-bottom: 55px;
    padding-top: 55px;
  }
  .elema .title-4 h1{
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    font-weight: 300;
    color: #888888;
  }
  .elema .price-4{
    padding-top: 30px;
    padding-bottom: 20px;
    background-color: #ececec;
    transition: .5s;
  }
  .elema .pricing-area-4:hover .price-4{
    background: #00aeef !important;
  }
  .elema .pricing-area-4:hover .price-4 h1{
    color: #fff;
  }
  .elema .pricing-area-4:hover .price-4 span{
    color: #fff;
  }
  .elema .price-4 h1{
    color: #00aeef;
    font-size: 46px;
    font-weight: 400;
    transition: .5s;
  }
  .elema .price-4 span{
    color: #00aeef;
    font-weight: 300;
    transition: .5s;
  }
  .elema .price-body-4 ul{
    padding: 0;
  }
  .elema .price-body-4{
    padding-top: 45px;
    padding-bottom: 45px;
  }
  .elema .price-body-4 ul li{
    line-height: 40px;
  }
  .elema .price-button-4{
    padding-bottom: 30px;
  }
  .elema .price-button-4 .button-4{
    padding: 15px 60px;
    border: 1px solid #00aeef;
    background: transparent;
    font-size: 16px;
    font-weight: 500;
    color: #00aeef;
    text-transform: uppercase;
    border-radius: 5px;
    transition: .5s;
  }
  .active-btn{
    background: #00aeef!important;
    color: #fff!important;
  }
  .elema .pricing-area-4:hover .button-4{
    background: #00aeef!important;
    color: #fff!important;
  }
</style>
