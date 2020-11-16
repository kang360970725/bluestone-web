<template>
  <div>
    <div class="sub-banner">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-6">
            <h4 class="title-bread">{{$t('m.header.Bot5')}}&nbsp;<span class="sub-title-lighter">/ {{$t('m.header.bodyTitle')}}<br></span>
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
    <section class="w-section section">
      <div class="w-container">
        <!--产品介绍--沐数期货-->
        <div class="one_box">
          <div class="w-col w-col-6">
            <div class="box-border w-col-12">
              <div class="top-header">
                <span class="font18">{{$t('m.header.Bot5')}}</span>
                <a href="/login" class="fl-right button no-lft-mrg">{{$t('m.banner.ban3btn')}}</a>
              </div>
              <div class="txt-box" :class="$i18n.locale">
                <div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                  <img class="left-ph right-ph" style="border: none;" width="180" src="../../../static/home/images/u7.png"/>
                  <br>
                  <h2>{{$t('m.product.Bot1')}}</h2>
                  <br>
                  <p>{{$t('m.product.txt1')}}</p>
                  <p>{{$t('m.product.time1')}}</p>
                  <hr class="hr1" />
                  <p v-html="$t('m.product.txt2')"></p>
                  <p v-html="$t('m.product.price1')"></p>
                  <br>
                </div>
              </div>
            </div>
          </div>
          <!--产品介绍--龙猫期货-->
          <div class="w-col w-col-6">
            <div class="box-border w-col-12">
              <div class="top-header">
                <span class="font18">{{$t('m.header.Bot5')}}</span>
                <a href="/login" class="fl-right button no-lft-mrg">{{$t('m.banner.ban3btn')}}</a>
              </div>
              <div class="txt-box" :class="$i18n.locale">
                <div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                  <img class="left-ph right-ph" style="border: none;" width="180" src="../../../static/home/images/u11.png"/>
                  <br>
                  <h2>{{$t('m.product.Bot2')}}</h2>
                  <br>
                  <p v-html="$t('m.product.txt3')"></p>
                  <p>{{$t('m.product.time2')}}</p>
                  <hr class="hr1" />
                  <p v-html="$t('m.product.txt4')"></p>
                  <p v-html="$t('m.product.price2')"></p>
                  <br>
                </div>
              </div>
            </div>
          </div>
          <!--产品介绍--龙猫-->
          <div class="w-col w-col-6">
            <div class="box-border w-col-12">
              <div class="top-header">
                <span class="font18">{{$t('m.header.Bot5')}}</span>
                <a href="/login" class="fl-right button no-lft-mrg">{{$t('m.banner.ban3btn')}}</a>
              </div>
              <div class="txt-box" :class="$i18n.locale">
                <div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                  <img class="left-ph right-ph" style="border: none;" width="180" src="../../../static/home/images/xuexi.svg"/>
                  <br>
                  <h2>{{$t('m.product.Bot3')}}</h2>
                  <br>
                  <p v-html="$t('m.product.txt5')"></p>
                  <p>{{$t('m.product.time3')}}</p>
                  <hr class="hr1" />
                  <p v-html="$t('m.product.txt5_1')"></p>
                  <p v-html="$t('m.product.price3')"></p>
                  <br>
                </div>
              </div>
            </div>
          </div>
          <!--产品介绍--战狼-->
          <div class="w-col w-col-6">
            <div class="box-border w-col-12">
              <div class="top-header">
                <span class="font18">{{$t('m.header.Bot5')}}</span>
                <a href="/login" class="fl-right button no-lft-mrg">{{$t('m.banner.ban3btn')}}</a>
              </div>
              <div class="txt-box" :class="$i18n.locale">
                <div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                  <img class="left-ph right-ph" style="border: none;" width="180" src="../../../static/home/images/anquan1.svg"/>
                  <br>
                  <h2>{{$t('m.product.Bot4')}}</h2>
                  <br>
                  <p v-html="$t('m.product.txt6')"></p>
                  <p>{{$t('m.product.time4')}}</p>
                  <hr class="hr1" />
                  <p v-html="$t('m.product.txt6_1')"></p>
                  <p v-html="$t('m.product.price4')"></p>
                  <br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--产品优势-->
        <div class="w-col w-col-12">
          <div class="box-border">
            <div class="top-header">
              <span class="font18">{{$t('m.product.tit1')}}</span>
            </div>
            <div class="box2">
              <div class="w-col w-col-3">
                <img src="../../../static/home/images/u18.png"/>
                <h6>{{$t('m.product.tit1_1')}}</h6>
                <p>{{$t('m.product.tit1_1txt')}}</p>
              </div>
              <div class="w-col w-col-3">
                <img src="../../../static/home/images/u24.png"/>
                <h6>{{$t('m.product.tit1_2')}}</h6>
                <p>{{$t('m.product.tit1_2txt')}}</p>
              </div>
              <div class="w-col w-col-3">
                <img src="../../../static/home/images/u25.png"/>
                <h6>{{$t('m.product.tit1_3')}}</h6>
                <p>{{$t('m.product.tit1_3txt')}}</p>
              </div>
              <div class="w-col w-col-3">
                <img src="../../../static/home/images/u26.png"/>
                <h6>{{$t('m.product.tit1_4')}}</h6>
                <p>{{$t('m.product.tit1_4txt')}}</p>
              </div>
            </div>
          </div>
        </div>
        <!--核心能力-->
        <div class="w-col w-col-12">
          <div class="box-border1">
            <div class="top-header">
              <span class="font18">{{$t('m.product.tit2')}}</span>
            </div>
            <div class="box3">
              <div class="w-col w-col-4">
                <div class="box3_box" :class="$i18n.locale">
                  <img src="../../../static/home/images/u40.png"/>
                  <h6>{{$t('m.product.tit2_1')}}</h6>
                  <p>{{$t('m.product.tit2_1txt')}}</p>
                </div>
              </div>
              <div class="w-col w-col-4">
                <div class="box3_box" :class="$i18n.locale">
                  <img height="118" src="../../../static/home/images/u41.png"/>
                  <h6>{{$t('m.product.tit2_2')}}</h6>
                  <p>{{$t('m.product.tit2_2txt')}}</p>
                </div>
              </div>
              <div class="w-col w-col-4">
                <div class="box3_box" :class="$i18n.locale">
                  <img height="118" src="../../../static/home/images/u42.png"/>
                  <h6>{{$t('m.product.tit2_3')}}</h6>
                  <p>{{$t('m.product.tit2_3txt')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import vdialog from "../../components/com-dialog";

  export default {
    name: 'home',
    data() {
      return {}
    },
    components: {
      vdialog
    },
    mounted() {

    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-bg {
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    text-align: center;
  }

  .home-bg img {
    width: 100%;
    height: auto;
  }

  .top-header {
    background: rgba(242, 242, 242, 1);
    color: #666;
    height: 47px;
    line-height: 40px;
    text-indent: 20px;
  }

  .button.no-lft-mrg {
    line-height: 20px;
    padding: 5px 15px;
    margin: 5px 10px;
    text-indent: 0;
    cursor: pointer;
  }

  .box-border,.box-border1 {
    border: 1px solid rgb(228, 228, 228);
    margin-bottom: 30px;
    height: 100%;
    transition: all 300ms;
    cursor: pointer;
    overflow: hidden;
  }

  .txt-box {
    padding: 10px 20px;
  }
  .txt-box.zh-CN{
    min-height: 600px;
  }
  .txt-box.en-US{
    min-height: 800px;
  }
  .box-border:hover{
    border: 1px solid #cfcfcf !important;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  .box3_box:hover{
     border: 1px solid #00AECD !important;
     box-shadow: 2px 2px 10px rgba(0, 174, 205, 0.3);
   }
  .w-col.w-col-3,.w-col.w-col-4{
    padding: 10px 50px;
  }
  .w-col.w-col-4 .box3_box{
    padding: 20px 20px;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    min-height: 260px;
    transition: all 300ms;
  }
  .box3_box.en-US{
    min-height: 340px !important;
  }
  .box2 {
    text-align: center;
    overflow: hidden;
    padding: 10px 0 30px;
  }
  .box3 {
    text-align: center;
    overflow: hidden;
    padding: 10px 0 30px;
  }
  .box2 h6{
    line-height: 30px;
  }
  .box3 h6{
    line-height: 50px;
  }
  .box2 p{
    line-height: 20px;
  }
  .box3 p{
    line-height: 20px;
  }
</style>
