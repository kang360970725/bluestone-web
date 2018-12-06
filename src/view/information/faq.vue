<template>
  <div>
    <div class="sub-banner">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-6">
            <h4 class="title-bread">F A Q&nbsp;<span class="sub-title-lighter">/ {{$t('m.header.bodyTitle')}}<br></span></h4>
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
                    <div class="li-txt"><a class="sm-lnk" href="#list1" @click="checkType(1)">{{$t('m.modularB.box1_t')}}</a>
                    </div>
                  </li>
                  <li class="li">
                    <div class="top-ico">
                      <div class="w-embed"><i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                    <div class="li-txt"><a class="sm-lnk" href="#list2" @click="checkType(2)">{{$t('m.modularB.box2_t')}}</a>
                    </div>
                  </li>
                  <li class="li">
                    <div class="top-ico">
                      <div class="w-embed"><i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                    <div class="li-txt"><a class="sm-lnk" href="#list3" @click="checkType(3)">{{$t('m.modularB.box3_t')}}</a>
                    </div>
                  </li>
                  <li class="li">
                    <div class="top-ico">
                      <div class="w-embed"><i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                    <div class="li-txt"><a class="sm-lnk" href="#list4" @click="checkType(4)">{{$t('m.modularB.box4_t')}}</a>
                    </div>
                  </li>
                  <li class="li">
                    <div class="top-ico">
                      <div class="w-embed"><i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                    <div class="li-txt"><a class="sm-lnk" href="#list5" @click="checkType(5)">{{$t('m.modularB.box5_t')}}</a>
                    </div>
                  </li>
                  <li class="li">
                    <div class="top-ico">
                      <div class="w-embed"><i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                    <div class="li-txt"><a class="sm-lnk" href="#list6" @click="checkType(6)">{{$t('m.modularB.box6_t')}}</a>
                    </div>
                  </li>
                  <li class="li">
                    <div class="top-ico">
                      <div class="w-embed"><i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                    <div class="li-txt"><a class="sm-lnk" href="#list7" @click="checkType(7)">{{$t('m.modularB.box7_t')}}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-col w-col-9">
            <div class="w-clearfix ui-accordion">
              <div class="top-title">
                <div class="title-txt">
                  <h5>{{$t('m.modularB.ban1title')}}<span class="sub-title-lighter"></span></h5>
                </div>
                <div class="divider"></div>
              </div>
              <!--<img class="left-ph right-ph" width="400" src="images/p1.jpg">-->
              <div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" @click="checkType(item)" :id="'list'+item" v-for="item in 7" :key="item">
                <img class="left-ph" width="150" height="90" :src="'../../../static/home/images/p1'+ item +'.jpg'">
                {{$t('m.modularB.box'+ item +'')}}
                <br>
                <a v-show="item == 1" style="font-size: 14px;color: #00aecd;" target="_blank" href="https://mp.weixin.qq.com/s/xUlXWlqGDgNAFbTGlvABpw">{{$t('m.modularB.btntxt')}} <i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i></a>
                <a v-show="item == 2" style="font-size: 14px;color: #00aecd;" target="_blank" href="https://mp.weixin.qq.com/s/bFWYIpj1VtqDvBMk9Fknsg">{{$t('m.modularB.btntxt')}} <i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i></a>
                <a v-show="item == 3" style="font-size: 14px;color: #00aecd;" target="_blank" href="https://mp.weixin.qq.com/s/7PhMfCCFijP5pcMWn6H1Sg">{{$t('m.modularB.btntxt')}} <i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i></a>
                <a v-show="item == 4" style="font-size: 14px;color: #00aecd;" target="_blank" href="https://mp.weixin.qq.com/s/RKQawArnvOex-LchknW2rw">{{$t('m.modularB.btntxt')}} <i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i></a>
                <a v-show="item == 5" style="font-size: 14px;color: #00aecd;" target="_blank" href="https://mp.weixin.qq.com/s/SJqYtaEyuWy8Jx5t--Hsig">{{$t('m.modularB.btntxt')}} <i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i></a>
                <a v-show="item == 6" style="font-size: 14px;color: #00aecd;" target="_blank" href="https://mp.weixin.qq.com/s/ocnzmX1xAZbLW6BOFVZ0yA">{{$t('m.modularB.btntxt')}} <i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i></a>
                <a v-show="item == 7" style="font-size: 14px;color: #00aecd;" target="_blank" href="https://baike.baidu.com/item/%E9%87%8F%E5%8C%96%E4%BA%A4%E6%98%93/5266581?secondId=144943">{{$t('m.modularB.btntxt')}} <i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Home',
        html:'',
        id:1,
      }
    },
    mounted() {

      // this.load()
    },
    methods: {
      checkType (id){
        switch (id){
          case 1:
            window.open('https://mp.weixin.qq.com/s/xUlXWlqGDgNAFbTGlvABpw');
            break;
          case 2:
            window.open('https://mp.weixin.qq.com/s/bFWYIpj1VtqDvBMk9Fknsg');
            break;
          case 3:
            window.open('https://mp.weixin.qq.com/s/7PhMfCCFijP5pcMWn6H1Sg');
            break;
          case 4:
            window.open('https://mp.weixin.qq.com/s/RKQawArnvOex-LchknW2rw');
            break;
          case 5:
            window.open('https://mp.weixin.qq.com/s/SJqYtaEyuWy8Jx5t--Hsig');
            break;
          case 6:
            window.open('https://mp.weixin.qq.com/s/ocnzmX1xAZbLW6BOFVZ0yA');
            break;
          case 7:
            window.open('https://baike.baidu.com/item/%E9%87%8F%E5%8C%96%E4%BA%A4%E6%98%93/5266581?secondId=144943');
            break;
        }
      }
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
  .ui-accordion div img{
    margin-bottom: 0;
  }
  .active.sm-lnk{
    color: #00aecd;
  }
  .li-txt a{
    cursor: pointer;
  }
  .ui-accordion-content.ui-helper-reset.ui-widget-content.ui-corner-bottom{
    overflow: hidden;
    height: auto;
    border: 1px solid #fff;
    margin: 8px 0;
    border-radius: 4px;
    cursor: pointer;
    transition: all 300ms;
  }
  .ui-accordion-content.active,.ui-accordion-content:hover{
    border: 1px solid #cfcfcf !important;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  .ui-accordion .ui-accordion-content{
    padding: 10px 16px;
  }
</style>
