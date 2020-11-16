<template>
  <div class="app-header">
    <header class="header-v1">
      <div class="top-header"><!-- Top Header -->
        <div class="w-container">
          <!--<div class="top-left">-->
            <!--<ul class="w-list-unstyled">-->
              <!--<li class="li-top m-space">-->
                <!--<div class="top-ico">-->
                  <!--<i class="fa fa-phone"></i>-->
                <!--</div>-->
                <!--&lt;!&ndash;<div class="txt-top">{{$t('m.header.notice')}}：maoxrr</div>&ndash;&gt;-->
              <!--&lt;!&ndash;</li>&ndash;&gt;-->
              <!--<li class="li-top">-->
              <!--<a class="w-inline-block top-link" href="#">-->
              <!--<div class="top-ico">-->
              <!--&lt;!&ndash;<i class="fa fa-angle-right"></i>&ndash;&gt;-->
              <!--</div>-->
              <!--<div class="txt-top"></div>-->
              <!--</a>-->
              <!--</li>-->
              <!--&lt;!&ndash;<li class="li-top">&ndash;&gt;-->
              <!--&lt;!&ndash;<a class="w-inline-block top-link" href="#">&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="top-ico">&ndash;&gt;-->
              <!--&lt;!&ndash;<i class="fa fa-angle-right"></i>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="txt-top">Contact</div>&ndash;&gt;-->
              <!--&lt;!&ndash;</a>&ndash;&gt;-->
              <!--&lt;!&ndash;</li>&ndash;&gt;-->
            <!--</ul>-->
          <!--</div>-->
          <div class="top-right">
            <ul class="w-list-unstyled" v-if="!userName">
              <li class="li-top">
                <a class="w-inline-block" @click="changeLangEvent('zh')">
                  <img class="tooltip-2" style="border: 1px solid #cfcfcf;" width="25" src="../../static/home/img/ja-JP.svg" title="日本語" alt="日本語">
                </a>
              </li>
              <li class="li-top">
                <a class="w-inline-block" @click="changeLangEvent('zh')">
                  <img class="tooltip-2" style="border: 1px solid #cfcfcf;" width="25" src="../../static/home/img/ko-KR.svg" title="한국어" alt="한국어">
                </a>
              </li>
              <li class="li-top">
                <a class="w-inline-block" @click="changeLangEvent('zh')">
                  <img class="tooltip-2" width="24" src="../../static/home/img/zh-CN.svg" title="中文" alt="中文">
                </a>
              </li>
              <li class="li-top">
                <a class="w-inline-block" @click="changeLangEvent('en')">
                  <img class="tooltip-2" width="24" src="../../static/home/images/english.png" title="English" alt="english">
                </a>
              </li>
<!--              <li class="li-top">-->
<!--                <div class="top-link t-nhover" style="padding: 8px 2px;">-->
<!--                  &lt;!&ndash;<div class="top-ico">&ndash;&gt;-->
<!--                  &lt;!&ndash;<i class="fa fa-clock-o"></i>&ndash;&gt;-->
<!--                  &lt;!&ndash;</div>&ndash;&gt;-->
<!--                  <a href="/login"><div class="txt-top">{{$t('m.login.btn1')}}</div></a>-->
<!--                </div>-->
<!--              </li>-->
<!--              <li class="li-top">-->
<!--                <div class="top-link t-nhover" style="padding: 8px 2px;">-->
<!--                  &lt;!&ndash;<div class="top-ico">&ndash;&gt;-->
<!--                  &lt;!&ndash;<i class="fa fa-clock-o"></i>&ndash;&gt;-->
<!--                  &lt;!&ndash;</div>&ndash;&gt;-->
<!--                  <a href="/register"><div class="txt-top">{{$t('m.login.btn2')}}</div></a>-->
<!--                </div>-->
<!--              </li>-->
            </ul>
            <ul class="w-list-unstyled" v-if="!!userName">
              <li class="li-top">
                <a class="w-inline-block" @click="changeLangEvent('Japan')">
                  <img class="tooltip-2" style="border: 1px solid #cfcfcf;" width="25" src="../../static/home/img/ja-JP.svg" title="日本語" alt="日本語">
                </a>
              </li>
              <li class="li-top">
                <a class="w-inline-block" @click="changeLangEvent('Korean')">
                  <img class="tooltip-2" style="border: 1px solid #cfcfcf;" width="25" src="../../static/home/img/ko-KR.svg" title="한국어" alt="한국어">
                </a>
              </li>
              <li class="li-top">
                <a class="w-inline-block" @click="changeLangEvent('zh')">
                  <img class="tooltip-2" width="24" src="../../static/home/img/zh-CN.svg" title="中文" alt="中文">
                </a>
              </li>
              <li class="li-top">
                <a class="w-inline-block" @click="changeLangEvent('en')">
                  <img class="tooltip-2" width="24" src="../../static/home/images/english.png" title="English" alt="english">
                </a>
              </li>
              <li class="li-top">
                <div class="top-link t-nhover">
                  <a><div class="txt-top">{{userName}}, {{$t('m.header.welcome')}}</div></a>
                </div>
                <ul class="w-list-unstyled dropdown-menu">
                  <li class="li-drop" v-if="user.level >= 5">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown" href="/admin">
                      <div class="dd-txt" :class="url == 'admin' ? 'active' : ''">{{$t('m.header.dashboard')}}</div>
                    </a>
                  </li>
                  <li class="li-drop" v-if="user.level > 8">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown" href="/super-info">
                      <div class="dd-txt" :class="url == 'super-info' ? 'active' : ''">{{$t('m.header.dashboard')}}</div>
                    </a>
                  </li>
                  <li class="li-drop" v-if="user.level < 5">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown" href="/index">
                      <div class="dd-txt" :class="url == 'index' ? 'active' : ''">{{$t('m.header.dashboard')}}</div>
                    </a>
                  </li>
                  <li class="li-drop" v-if="user.level < 5">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown" href="/bot">
                      <div class="dd-txt" :class="url == 'bot' ? 'active' : ''">{{$t('m.header.userHead')}}</div>
                    </a>
                  </li>
                  <li class="li-drop" v-if="user.level < 5">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown" href="/information">
                      <div class="dd-txt" :class="url == 'information' ? 'active' : ''">{{$t('m.header.personal')}}</div>
                    </a>
                  </li>
                  <li class="li-drop">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown" @click="logout">
                      <div class="dd-txt">{{$t('m.header.out')}}</div>
                    </a>
                  </li>
                </ul>
              </li>
              <!--<li class="li-top">-->
                <!--<div class="top-link t-nhover">-->
                  <!--<a href="/bot"><div class="txt-top">{{$t('m.header.userHead')}}</div></a>-->
                <!--</div>-->
              <!--</li>-->
            </ul>
          </div>
        </div>
      </div><!-- End Top Header -->

      <!-- Start Bottom Header -->
      <div class="bottom-header" v-if="user.level < 5 || !user">
        <div class="w-container">
          <a class="w-inline-block hamburger" data-ix="show-navigation-menu"></a>
          <a class="w-inline-block brand-logo">
            <!--<span class="slider-sub-txt" style="font-size: 27px"><span style="color: #00aecd;font-size: 31px">{{$t('m.header.logo1')}}</span>{{$t('m.header.logo2')}}</span>-->
            <span class="slider-sub-txt" style="font-size: 27px"><span style="color: #00aecd;font-size: 31px">M</span>u Shu</span>
            <!--<img class="tooltip" width="55" src="../../static/home/img/logo.png" title="It's time to impress your visitors!" alt="Unikue Logo">-->
          </a>
          <!-- Navigation -->
          <nav class="navigation">
            <ul class="w-list-unstyled">
              <li class="li-menu" data-ix="show-dropdown">
                <a class="w-inline-block link-menu" :class="url == 'index' ? 'active' : ''" href="/">
                  <div>{{$t('m.header.Home')}}</div>
                </a>
              </li>
              <li class="li-menu" data-ix="show-dropdown">
                <a class="w-inline-block link-menu" :class="url == 'about' ? 'active' : ''" href="/about">
                  <div>{{$t('m.header.FireUser')}}</div>
                </a>
              </li>
              <li class="li-menu" data-ix="show-dropdown">
                <a class="w-inline-block link-menu" style="cursor: pointer;" :class="(url == 'product' || url == 'service') ? 'active' : ''">
                  <div>{{$t('m.header.Bot')}}</div>
                </a>
                <ul class="w-list-unstyled dropdown-menu">
                  <!--<li class="li-drop">-->
                    <!--<a class="w-inline-block dd-link" data-ix="move-txt-dropdown" href="/product?type=1">-->
                      <!--<div class="dd-txt">{{$t('m.header.Bot1')}}</div>-->
                    <!--</a>-->
                  <!--</li>-->
                  <!--<li class="li-drop">-->
                    <!--<a class="w-inline-block dd-link" data-ix="move-txt-dropdown" href="/product?type=2">-->
                      <!--<div class="dd-txt">{{$t('m.header.Bot2')}}</div>-->
                    <!--</a>-->
                  <!--</li>-->
                  <li class="li-drop">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown" href="/product">
                      <div class="dd-txt" :class="url == 'product' ? 'active' : ''">{{$t('m.header.Bot5')}}</div>
                    </a>
                  </li>
                  <li class="li-drop">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown" href="/service">
                      <div class="dd-txt" :class="url == 'service' ? 'active' : ''">{{$t('m.header.Bot4')}}</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="li-menu" data-ix="show-dropdown" @click="showTagFn">
                <a class="w-inline-block link-menu">
                  <div>{{$t('m.header.Data')}}</div>
                </a>
                <ul class="w-list-unstyled dropdown-menu">
                  <li class="li-drop">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown">
                      <div class="dd-txt">{{$t('m.header.Data1')}}</div>
                    </a>
                  </li>
                  <li class="li-drop">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown">
                      <div class="dd-txt">{{$t('m.header.Data2')}}</div>
                    </a>
                  </li>
                  <li class="li-drop">
                    <a class="w-inline-block dd-link" data-ix="move-txt-dropdown">
                      <div class="dd-txt">{{$t('m.header.Data3')}}</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="li-menu" data-ix="show-dropdown">
                <a class="w-inline-block link-menu" :class="url == 'faq' ? 'active' : ''"  href="/faq">
                  <div>{{$t('m.header.FAQ')}}</div>
                </a>
              </li>
              <li class="li-menu" data-ix="show-dropdown">
                <a class="w-inline-block link-menu" :class="url == 'news' ? 'active' : ''" href="/news">
                  <div>{{$t('m.header.team')}}</div>
                </a>
              </li>
              <li class="li-menu" data-ix="show-dropdown">
                <a class="w-inline-block link-menu" :class="url == 'contact' ? 'active' : ''" href="/contact">
                  <div>{{$t('m.header.product')}}</div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <!-- END HEADER -->
  </div>
</template>

<script>
  export default {
    name: 'com-header',
    data() {
      return {userName: "",interVal:'',user:'',url:''}
    },
    mounted() {
      let _this = this;
      if(!!localStorage.getItem('user')){
        _this.user = JSON.parse(localStorage.getItem('user')) || '';
        _this.userName = JSON.parse(localStorage.getItem('user')).nickName || JSON.parse(localStorage.getItem('user')).account
      }
      _this.url = _this.$router.history.current.name;
      if(_this.url == 'user-index' || _this.url == 'bot' || _this.url == 'information' || _this.url == 'admin' || _this.url == 'super-info'){
        _this.getUserData()
      }
      // this.interVal = setInterval(function () {
      //   _this.getUserData()
      // },60000);
    },
    methods: {
      logout() {
        let _this = this;
        clearInterval(_this.interVal);
        _this.$store.commit('REMOVE_COUNT', '');
        window.localStorage.clear();
        // this.$router.push({
        //   path: "/"
        // });
        this.$router.go("/")
      },
      getUserData(){
        let _this = this;
        let info = {
          account: _this.user.account,
          uuid: _this.user.uuid
        }
        _this.$axios.post('getUser', info).then(function(result) {
          if (result.status == 0) {
            let sessionInfo = result.data
            let json = {
              token: result.sessionId,
              user: JSON.stringify(sessionInfo)
            };
            _this.$store.commit('ADD_COUNT', json);
          } else {
            _this.myMessage.error(result.msg);
          }
        }).catch(function(err) {
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
        })
      },
      changeLangEvent(type) {
        let _this = this;
        if ( type === 'zh' ) {
          _this.$i18n.locale = 'zh-CN';//关键语句
          document.title = '沐数科技俱乐部'
        }else if ( type === 'en' ) {
          _this.$i18n.locale = 'en-US';//关键语句
          document.title = 'Mu shu Club'
        }else{
          _this.$i18n.locale = type;//关键语句
          document.title = 'Mu shu Club'
        }
        localStorage.setItem('locale',_this.$i18n.locale)
      },
      showTagFn() {
        let _this = this;
        let msg = '即将开放,敬请期待!';
        switch (_this.$i18n.locale){
          case 'en-US':
            msg = 'Opening soon, please look forward to it!';
            break;
          case 'Japan':
            msg = 'もうすぐオープンですので、お楽しみに！';
            break;
          case 'Korean':
            msg = '곧 개방될 테니, 기대하세요!';
            break;
        }
        _this.myMessage.info(msg)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-container>a{
  line-height: 40px;
}
  .li-drop > a:hover{
    cursor: pointer;
  }
  .li-top:hover .w-list-unstyled.dropdown-menu{
    display: block;
  }
  .dropdown-menu{
    z-index: 999999;
  }
@media (max-width: 991px){
  .li-top .w-list-unstyled.dropdown-menu .dd-link {
    color: white;
  }
  .li-top .w-list-unstyled.dropdown-menu .dd-link:hover {
    color: #fff;
  }
  .li-top .w-list-unstyled.dropdown-menu{
    position: absolute;
    display: none;
    width: 200px;
    background-color: #00aecd;
    right: 5px;
  }
}
</style>
