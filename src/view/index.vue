<template>
  <div class="main">
    <!-- START SLIDER -->
    <div class="banner">
      <div class="w-slider big-slider" data-animation="cross" data-duration="500" data-infinite="1" data-nav-spacing="5">
        <div class="w-slider-mask">
          <!-- Start Slide 1 -->
          <div class="w-slide slide-2">
            <div class="w-container cont-slider">
              <div class="w-row">
                <div class="w-col w-col-6 slider-content more-spc">
                  <div>
                    <h1 class="big-slider-title" data-ix="slide-big-title">{{$t('m.banner.ban1title')}}</h1>
                    <h3 class="slider-sub-txt" style="text-transform: capitalize;" data-ix="slide-sub-title">{{$t('m.banner.ban1txt')}}</h3>
                    <div class="slider-spc" data-ix="slide-spc">
                      <a class="button no-lft-mrg" href="/product">{{$t('m.banner.ban1btn1')}}</a>
                      <a class="button btn-active" href="/faq">{{$t('m.banner.ban1btn2')}}</a>
                    </div>
                  </div>
                </div>
                <div class="w-col w-col-6 cl-center">
                  <div class="slider-mascot" data-ix="slide-mascot"><img width="420" src="../../static/home/images/mascot1.png" alt="mascot">
                  </div>
                </div>
              </div>
            </div>
          </div><!-- End Slide 1 -->

          <!-- Start Slide 2 -->
          <div class="w-slide slide-3">
            <div class="video-wrapper">
              <div class="w-embed embed-video">
                <video autoplay muted loop id="videos">
                  <source src="../../static/home/video/video-background.mp4" type="video/mp4">
                  <source src="http://3nacu.com/video-background.webm" type="video/webm">
                  <img src="http://syddev.com/jquery.videoBG/assets/tunnel_animation.jpg" alt="Mu shu">
                </video>
              </div>
              <div class="video-overlay">
                <div class="w-container cont-slider in-video">
                  <div class="alg-center">
                    <h1 class="big-slider-title big-white" data-ix="slide-big-title">{{$t('m.banner.ban2txt1')}}</h1>
                    <h3 class="slider-sub-txt" data-ix="slide-sub-title">{{$t('m.banner.ban2txt2')}}</h3>
                    <div class="slider-spc" data-ix="slide-spc"><a class="button no-lft-mrg" href="/login">{{$t('m.banner.ban2btn')}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- End Slide 2 -->
        </div><!-- End Slide 3 -->
        <div class="w-slider-arrow-left arrow-big-sl">
          <div class="w-icon-slider-left"></div>
        </div>
        <div class="w-slider-arrow-right arrow-big-sl">
          <div class="w-icon-slider-right"></div>
        </div>
      </div>
    </div>
    <!-- END SLIDER -->

    <!-- START SECTION 1 -->
    <section class="w-section section">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-4">
            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <div class="ico-flip">
                    <i class="fa fa-rocket"></i>
                  </div>
                  <div class="div-spc">
                    <h5>{{$t('m.modularA.ban1title')}}</h5>
                    <!--<h6>绝对深度优势</h6>-->
                    <p>{{$t('m.modularA.ban1txt')}}</p>
                  </div>
                </div>
                <div class="back">
                  <div>
                    <h5 class="white-orignal">{{$t('m.modularA.ban1title')}}</h5>
                    <p class="white-orignal">{{$t('m.modularA.ban1dsc')}}</p>
                  </div>
                  <div class="div-spc"><a target="_blank" class="button btn-transparent" href="/more?type=home&id=1">{{$t('m.modularA.modularABtn')}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-col w-col-4">
            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <div class="ico-flip">
                    <i class="fa fa-flag"></i>
                  </div>
                  <div class="div-spc">
                    <h5>{{$t('m.modularA.ban2title')}}</h5>
                    <!--<h5>唯一选择币王</h5>-->
                    <p>{{$t('m.modularA.ban2txt')}}</p>
                  </div>
                </div>
                <div class="back">
                  <div>
                    <h5 class="white-orignal">{{$t('m.modularA.ban2title_1')}}</h5>
                    <p class="white-orignal">{{$t('m.modularA.ban2dsc')}}</p>
                  </div>
                  <div class="div-spc"><a class="button btn-transparent">{{$t('m.modularA.modularABtn')}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-col w-col-4">
            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <div class="ico-flip">
                    <i class="fa fa-gear"></i>
                  </div>
                  <div class="div-spc">
                    <h5>{{$t('m.modularA.ban3title')}}</h5>
                    <!--<h5>告别天朝绿墙</h5>-->
                    <p>{{$t('m.modularA.ban3txt')}}</p>
                  </div>
                </div>
                <div class="back">
                  <div>
                    <h5 class="white-orignal">{{$t('m.modularA.ban3title')}}</h5>
                    <p class="white-orignal" v-html="$t('m.modularA.ban3dsc')"></p>
                  </div>
                  <div class="div-spc"><a class="button btn-transparent">{{$t('m.modularA.modularABtn')}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-row div-spc">
          <div class="w-col w-col-4">
            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <div class="ico-flip">
                    <i class="fa fa-magic"></i>
                  </div>
                  <div class="div-spc">
                    <h5>{{$t('m.modularA.ban4title')}}</h5>
                    <!--<h5>多重加密算法</h5>-->
                    <p>{{$t('m.modularA.ban4txt')}}</p>
                  </div>
                </div>
                <div class="back">
                  <div>
                    <h5 class="white-orignal">{{$t('m.modularA.ban4title')}}</h5>
                    <p class="white-orignal" style="text-align: left;" v-html="$t('m.modularA.ban4dsc')"></p>
                  </div>
                  <div class="div-spc"><a class="button btn-transparent">{{$t('m.modularA.modularABtn')}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-col w-col-4">
            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <div class="ico-flip">
                    <i class="fa fa-paint-brush"></i>
                  </div>
                  <div class="div-spc">
                    <h5>{{$t('m.modularA.ban5title')}}</h5>
                    <!--<h5>新手一对一指导</h5>-->
                    <p>{{$t('m.modularA.ban5txt')}}</p>
                  </div>
                </div>
                <div class="back">
                  <div>
                    <h5 class="white-orignal">{{$t('m.modularA.ban5title')}}</h5>
                    <p class="white-orignal" style="text-align: left;" :style="$i18n.locale == 'zh-CN' ? 'padding-left: 60px;':''" v-html="$t('m.modularA.ban5dsc')"></p>
                  </div>
                  <div class="div-spc">
                    <!--<a class="button btn-transparent" >{{$t('m.modularA.modularABtn')}}</a>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-col w-col-4">
            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <div class="ico-flip">
                    <i class="fa fa-trophy"></i>
                  </div>
                  <div class="div-spc">
                    <h5>{{$t('m.modularA.ban6title')}}</h5>
                    <!--<h5>改变韭菜思维</h5>-->
                    <p>{{$t('m.modularA.ban6txt')}}</p>
                  </div>
                </div>
                <div class="back">
                  <div>
                    <h5 class="white-orignal">{{$t('m.modularA.ban6title')}}</h5>
                    <p class="white-orignal" style="text-align: left;" :style="$i18n.locale == 'zh-CN' ? 'padding-left: 60px;':''" v-html="$t('m.modularA.ban6dsc')"></p>
                  </div>
                  <div class="div-spc">
                    <!--<a class="button btn-transparent" >{{$t('m.modularA.modularABtn')}}</a>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--&lt;!&ndash; END SECTION 1 &ndash;&gt;-->

    <!--&lt;!&ndash; START SECTION 2 &ndash;&gt;-->
    <section class="section gray">
      <div class="w-container">
        <div class="top-title">
          <div class="title-txt">
            <h5>{{$t('m.modularB.ban1title')}} <span class="sub-title-lighter">/ Our Best Works</span></h5>
          </div>
          <div class="divider"></div>
        </div>
        <div>
          <div class="w-slider carousel" data-animation="slide" data-duration="500" data-infinite="1">
            <div class="w-slider-mask w-clearfix fp-wrapper">
              <div class="w-slide mix">
                <div class="portfolio-wrapper" data-ix="portfolio-hover">
                  <div class="portfolio-top">
                    <div class="portfolio-overlay">
                      <div class="port-ic-wp">
                        <a class="w-inline-block portfolio-ico" data-ix="move-portfolio-ico" target="_blank" href="https://mp.weixin.qq.com/s/xUlXWlqGDgNAFbTGlvABpw">
                          <i class="fa fa-link"></i>
                        </a>
                        <a class="w-inline-block portfolio-ico-zoom" data-ix="move-portfolio-ico" @click="copyUrlFn('https://mp.weixin.qq.com/s/xUlXWlqGDgNAFbTGlvABpw')">
                          <i class="fa fa-copy"></i>
                        </a>
                      </div>
                    </div><img src="../../static/home/images/p11.jpg" alt="p11">
                  </div><a class="w-inline-block portfolio-bottom"><h6>{{$t('m.modularB.box1_t')}}</h6><div class="sub-txt-portolio">{{$t('m.modularB.box1')}}</div></a>
                </div>
              </div>
              <div class="w-slide mix">
                <div class="portfolio-wrapper" data-ix="portfolio-hover">
                  <div class="portfolio-top">
                    <div class="portfolio-overlay">
                      <div class="port-ic-wp">
                        <a class="w-inline-block portfolio-ico" data-ix="move-portfolio-ico" target="_blank" href="https://mp.weixin.qq.com/s/bFWYIpj1VtqDvBMk9Fknsg">
                          <i class="fa fa-link"></i>
                        </a>
                        <a class="w-inline-block portfolio-ico-zoom" data-ix="move-portfolio-ico" @click="copyUrlFn('https://mp.weixin.qq.com/s/bFWYIpj1VtqDvBMk9Fknsg')">
                          <i class="fa fa-copy"></i>
                        </a>
                      </div>
                    </div><img src="../../static/home/images/p12.jpg" alt="p8">
                  </div><a class="w-inline-block portfolio-bottom"><h6>{{$t('m.modularB.box2_t')}}</h6><div class="sub-txt-portolio">{{$t('m.modularB.box2')}}</div></a>
                </div>
              </div>
              <div class="w-slide mix">
                <div class="portfolio-wrapper" data-ix="portfolio-hover">
                  <div class="portfolio-top">
                    <div class="portfolio-overlay">
                      <div class="port-ic-wp">
                        <a class="w-inline-block portfolio-ico" data-ix="move-portfolio-ico" target="_blank" href="https://mp.weixin.qq.com/s/7PhMfCCFijP5pcMWn6H1Sg">
                          <i class="fa fa-link"></i>
                        </a>
                        <a class="w-inline-block portfolio-ico-zoom" data-ix="move-portfolio-ico" @click="copyUrlFn('https://mp.weixin.qq.com/s/7PhMfCCFijP5pcMWn6H1Sg')">
                          <i class="fa fa-copy"></i>
                        </a>
                      </div>
                    </div><img src="../../static/home/images/p13.jpg" alt="p5">
                  </div><a class="w-inline-block portfolio-bottom" href="single-project.html"><h6>{{$t('m.modularB.box3_t')}}</h6><div class="sub-txt-portolio">{{$t('m.modularB.box3')}}</div></a>
                </div>
              </div>
              <div class="w-slide mix">
                <div class="portfolio-wrapper" data-ix="portfolio-hover">
                  <div class="portfolio-top">
                    <div class="portfolio-overlay">
                      <div class="port-ic-wp">
                        <a class="w-inline-block portfolio-ico" target="_blank" href="https://mp.weixin.qq.com/s/RKQawArnvOex-LchknW2rw" data-ix="move-portfolio-ico">
                          <i class="fa fa-link"></i>
                        </a>
                        <a class="w-inline-block portfolio-ico-zoom" data-ix="move-portfolio-ico" @click="copyUrlFn('https://mp.weixin.qq.com/s/RKQawArnvOex-LchknW2rw')">
                          <i class="fa fa-copy"></i>
                        </a>
                      </div>
                    </div><img src="../../static/home/images/p14.jpg" alt="p7">
                  </div><a class="w-inline-block portfolio-bottom"><h6>{{$t('m.modularB.box4_t')}}</h6><div class="sub-txt-portolio">{{$t('m.modularB.box4')}}</div></a>
                </div>
              </div>
              <div class="w-slide mix">
                <div class="portfolio-wrapper" data-ix="portfolio-hover">
                  <div class="portfolio-top">
                    <div class="portfolio-overlay">
                      <div class="port-ic-wp">
                        <a class="w-inline-block portfolio-ico" data-ix="move-portfolio-ico" target="_blank" href="https://mp.weixin.qq.com/s/SJqYtaEyuWy8Jx5t--Hsig">
                          <i class="fa fa-link"></i>
                        </a>
                        <a class="w-inline-block portfolio-ico-zoom" data-ix="move-portfolio-ico" @click="copyUrlFn('https://mp.weixin.qq.com/s/SJqYtaEyuWy8Jx5t--Hsig')">
                          <i class="fa fa-copy"></i>
                        </a>
                      </div>
                    </div>
                    <img src="../../static/home/images/p15.jpg" alt="p2">
                  </div><a class="w-inline-block portfolio-bottom"><h6>{{$t('m.modularB.box5_t')}}</h6><div class="sub-txt-portolio">{{$t('m.modularB.box5')}}</div></a>
                </div>
              </div>
              <div class="w-slide mix">
                <div class="portfolio-wrapper" data-ix="portfolio-hover">
                  <div class="portfolio-top">
                    <div class="portfolio-overlay">
                      <div class="port-ic-wp">
                        <a class="w-inline-block portfolio-ico" data-ix="move-portfolio-ico" target="_blank" href="https://mp.weixin.qq.com/s/ocnzmX1xAZbLW6BOFVZ0yA">
                          <i class="fa fa-link"></i>
                        </a>
                        <a class="w-inline-block portfolio-ico-zoom" data-ix="move-portfolio-ico" @click="copyUrlFn('https://mp.weixin.qq.com/s/ocnzmX1xAZbLW6BOFVZ0yA')">
                          <div class="w-embed"><i class="fa fa-copy"></i>
                          </div>
                        </a>
                      </div>
                    </div><img src="../../static/home/images/p16.jpg" alt="p6">
                  </div><a class="w-inline-block portfolio-bottom"><h6>{{$t('m.modularB.box5_t')}}</h6><div class="sub-txt-portolio">{{$t('m.modularB.box6')}}</div></a>
                </div>
              </div>
              <div class="w-slide mix">
                <div class="portfolio-wrapper" data-ix="portfolio-hover">
                  <div class="portfolio-top">
                    <div class="portfolio-overlay">
                      <div class="port-ic-wp">
                        <a class="w-inline-block portfolio-ico" data-ix="move-portfolio-ico" target="_blank" href="https://baike.baidu.com/item/%E9%87%8F%E5%8C%96%E4%BA%A4%E6%98%93/5266581?secondId=144943">
                          <i class="fa fa-link"></i>
                        </a>
                        <a class="w-inline-block portfolio-ico-zoom" data-ix="move-portfolio-ico" @click="copyUrlFn('https://baike.baidu.com/item/%E9%87%8F%E5%8C%96%E4%BA%A4%E6%98%93/5266581?secondId=144943')">
                          <div class="w-embed"><i class="fa fa-copy"></i>
                          </div>
                        </a>
                      </div>
                    </div><img src="../../static/home/images/p17.jpg" alt="p6">
                  </div><a class="w-inline-block portfolio-bottom"><h6>{{$t('m.modularB.box7_t')}}</h6><div class="sub-txt-portolio">{{$t('m.modularB.box7')}}</div></a>
                </div>
              </div>
            </div>
            <div class="w-slider-arrow-left arrow-car">
              <div class="w-icon-slider-left arrow-carousel"></div>
            </div>
            <div class="w-slider-arrow-right arrow-car">
              <div class="w-icon-slider-right arrow-carousel"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--&lt;!&ndash; END SECTION 2 &ndash;&gt;-->

    <!-- FOOTER -->
    <footer class="footer">
      <div class="bottom-footer">
        <div class="w-container">
          <div class="w-row">
            <div class="w-col w-col-4 w-col-stack">
              <p class="copyright">© Copyright icode 2020. Mu shu.</p>
            </div>
            <div class="w-col w-col-8 w-col-stack">
              <div>
                <div class="w-clearfix social-wrapper s-footer">
                  <a class="w-inline-block social-ico social-footer google-plus tooltip-2" href="" title="Google Plus">
                    <div class="w-embed"><i class="fa fa-google-plus"></i>
                    </div>
                  </a>
                  <a class="w-inline-block social-ico social-footer tooltip-2 tumblr"  title="Tumblr">
                    <div class="w-embed"><i class="fa fa-tumblr"></i>
                    </div>
                  </a>
                  <a class="w-inline-block social-ico social-footer yahoo tooltip-2"  title="Yahoo">
                    <div class="w-embed"><i class="fa fa-yahoo"></i>
                    </div>
                  </a>
                  <a class="w-inline-block social-ico social-footer instagram tooltip-2"  title="Instagram">
                    <div class="w-embed"><i class="fa fa-instagram"></i>
                    </div>
                  </a>
                  <a class="w-inline-block social-ico social-footer linkedin tooltip-2"  title="LinkedIn">
                    <div class="w-embed"><i class="fa fa-linkedin"></i>
                    </div>
                  </a>
                  <a class="w-inline-block social-ico social-footer pinterest tooltip-2"  title="Pinterest">
                    <div class="w-embed"><i class="fa fa-pinterest-p"></i>
                    </div>
                  </a>
                  <a class="w-inline-block social-ico social-footer rss tooltip-2"  title="Rss">
                    <div class="w-embed"><i class="fa fa-rss"></i>
                    </div>
                  </a>
                  <a class="w-inline-block social-ico social-footer twitter tooltip-2"  title="Twitter">
                    <div class="w-embed"><i class="fa fa-twitter"></i>
                    </div>
                  </a>
                  <a class="w-inline-block social-ico social-footer facebook tooltip-2 tumblr"  title="Facebook">
                    <div class="w-embed"><i class="fa fa-facebook"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: '',
        interVal:''
      }
    },
    mounted() {
      let _this = this;
      // _this.user = !!localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';
      // require("../../static/home/js/form.js");
      // // require("../../static/home/js/particles.min.js");
      // // require("../../static/home/js/particle-code.js");
      // $(window).on('scroll', function() {
      //   if ($(this).scrollTop() > 200) {
      //     $('#header .header-inner').addClass("sticky");
      //   } else {
      //     $('#header .header-inner').removeClass("sticky");
      //   }
      // });
      // Mobile Menu  //
      // let i = 0;
      // _this.interVal = setInterval(function () {
      //   i++;
      //   console.log('interVal');
      //   $('.w-slider-arrow-right.arrow-big-sl').click();
      //   $('.w-slider-arrow-right.arrow-big-sl').trigger('click');
      //   $('.w-icon-slider-right').click();
      //   $('.w-icon-slider-right').trigger('click');
      // },6000);
      setTimeout(function () {
        let myVideo = document.getElementById("videos");
        myVideo.play();
      },500);



    },
    methods: {
      logout() {
        this.$store.dispatch('setLogout');
        window.localStorage.clear();
        this.$router.go("/")
      },
      copyUrlFn (url){
        let _this = this;
        let txt = '';
          txt = url;
        $('#biao1').text(txt)
        var Url2 = document.getElementById('biao1').innerText
        var oInput = document.createElement('input')
        oInput.value = Url2
        document.body.appendChild(oInput)
        oInput.select(); // 选择对象
        document.execCommand('Copy') ;// 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display = 'none';
        _this.myMessage.success('复制成功');
      }
    },
    beforeRouteLeave(to, from, next) {
      let _this = this;
      clearInterval(_this.interVal);
      next(true);
    }
  }
</script>
<style scoped>
  .front{
    width: 100%;
  }
  .back{
    width: 100%;
  }
  .portfolio-top img{
    height: 270px;
  }
  @media (max-width: 991px){
    .portfolio-wrapper .portfolio-top img{
      width: 100%;
    }
    .arrow-big-sl{
      width: 25px;
      height: 40px;
      font-size: 20px;
    }
  }
</style>
