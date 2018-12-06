<template>
  <div>
    <div class="sub-banner">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-6">
            <h4 class="title-bread">{{$t('m.header.product')}}&nbsp;<span class="sub-title-lighter">/ {{$t('m.header.bodyTitle')}}<br></span></h4>
          </div>
          <div class="w-col w-col-6 col-right">
            <!--<div class="breadcrumbs">Unikue&nbsp;/&nbsp;Pages&nbsp;/&nbsp;Left Siebar</div>-->
          </div>
        </div>
      </div>
    </div>
    <!-- END SUB BANNER -->

    <!-- START SECTION 1 -->
    <section class="w-section section">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-3">
            <div class="sidebar lft-side">
              <div class="div-spc more-spc">
                <h5>{{$t('m.contact.categories')}}</h5>
                <ul class="w-list-unstyled">
                  <li class="li">
                    <div class="top-ico">
                      <div class="w-embed"><i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                    <div class="li-txt"><a class="sm-lnk active">{{$t('m.header.product')}}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-col w-col-9">
            <div class="w-clearfix">
              <div class="top-title">
                <div class="title-txt">
                  <h5>{{$t('m.contact.title')}}<span class="sub-title-lighter"></span></h5>
                </div>
                <div class="divider"></div>
              </div>
              <!--<img class="left-ph right-ph" width="400" src="images/p1.jpg">-->
              <p>{{$t('m.header.bodyTitle')}}<img class="left-ph right-ph" width="250" src="../../../static/home/images/p1.png">
                <br>
                <br>蓝石金融科技于2015年诞生于日本东京，秉承日本深厚文化底蕴，始终坚持“不二之法，单点突破”，2018年在中国成都成立蓝石量化俱乐部，在金融科技领域里，
                为客户量身定做最适合智能量化产品。精英团队同行、打造匠心方案，我们拥有一支由大型企业高管、行业专家、海内外知名高校教授及名牌院校的优秀硕博精英组成的专业团队。</p>
              <p>bluestone Financial Technology was born in Tokyo, Japan in 2015. Adhering to Japan's profound cultural heritage,
                it has always adhered to the "two-way approach, single breakthrough". In 2018, bluestone Science and Technology Club was established in Chengdu,
                China. In the field of financial technology, it tailored the most suitable intelligent quantification products for customers.
                We have a professional team consisting of senior executives of large enterprises, industry experts,
                professors of famous universities at home and abroad, and excellent and rich elites of famous universities.</p>
              <div class="top-spc">
                <div class="top-title">
                  <div class="title-txt">
                    <h5>{{$t('m.contact.title1')}}<span class="sub-title-lighter"></span></h5>
                  </div>
                  <div class="divider"></div>
                </div>
                <div>
                  <div class="w-embed">
                    <div class="accordion1 ui-accordion ui-widget ui-helper-reset">
                      <h3 class="ui-accordion-header-active">{{$t('m.contact.addr1')}}</h3>
                      <div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                        <p style="min-height: 220px;">
                          <img class="left-ph" width="280" src="../../../static/home/images/map1.png"/>
                          <br>
                          {{$t('m.header.bodyTitle')}}（{{$t('m.contact.addr1')}}）<br>
                          {{$t('m.contact.addr3')}}<br>
                          {{$t('m.contact.addr4')}}<br>
                          Email: support@bluestone.club<br>
                          Tel：075-753-5000<br><br>
                        </p>
                      </div>
                      <!-- Accordion 2 -->
                      <h3 class="ui-accordion-header-active">{{$t('m.contact.addr5')}}</h3>
                      <div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                        <p>
                          <img class="left-ph" width="280" src="../../../static/home/images/map1.jpg"/>
                          <br>
                          {{$t('m.header.bodyTitle')}}（{{$t('m.contact.addr5')}}）<br>
                          {{$t('m.contact.addr2')}}<br>
                          {{$t('m.contact.addr6')}}<br>
                          Tel：028-64684518<br>
                          Email: bluestone@163.com<br>
                          {{$t('m.contact.addr7')}}：18782007287<br>
                        </p>
                      </div>
                    </div>
                  </div>
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
  // import vdialog from "../components/com-dialog";

  export default {
    name: 'home',
    data() {
      return {
      }
    },
    // components: {
    //   vdialog
    // },
    methods: {

    }
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
  .ui-accordion .ui-accordion-header-active {
    display: block;
    cursor: pointer;
    position: relative;
    line-height: 26px;
    outline: 0;
    font-size: 13px;
    background: #00aecd !important;
    color: #fff !important;;
    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.05);
    -webkit-transition: background-color 100ms ease-in-out;
    -moz-transition: background-color 100ms ease-in-out;
    -o-transition: background-color 100ms ease-in-out;
    -ms-transition: background-color 100ms ease-in-out;
    transition: background-color 100ms ease-in-out;
    padding: 12px 16px;
    margin-bottom: 10px;
    border-radius: 2px;
  }
  .active.sm-lnk{
    color: #00aecd;
  }
  @media (max-width: 991px){
    .ui-accordion-content p img{
      width: 100%;
    }
  }
</style>
