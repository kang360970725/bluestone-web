<template>
  <div class="container demo-1">
    <div class="content">
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas"></canvas>
        <div class="logo_box">
          <div class="logo_box_top" style="text-align: center">
            <img src="../../static/home/img/login.png"/>
            <span></span>
            <h3>{{$t('m.login.btn1')}}</h3>
          </div>
          <br>
          <form autocomplete="off">
            <input type="text" style="display: none;"/>
            <input type="password" style="display: none;"/>
            <div class="input_outer">
              <input name="login" class="form-control text" v-model="username" id="username" style="color: #333 !important" type="text" :placeholder="$t('m.login.input1')">
              <span class="error"></span>
            </div>
            <div class="input_outer">
              <input name="password" class="text" v-model="password" id="password" style="color: #333 !important;z-index:100;" type="password" :placeholder="$t('m.login.input2')">
              <span class="error"></span>
            </div>
            <div class="mb2">
              <a class="w-button button no-margin" href="javascript:;" style="color: #FFFFFF;width: 100%;margin: 0;" @click="login" v-show="loginBtn">{{$t('m.login.btn1')}}</a>
              <a class="w-button button no-margin" href="javascript:;" style="color: #FFFFFF;width: 100%;margin: 0;" v-show="!loginBtn">
                <img width="16" src="../../static/home/img/loading.gif"/>
              </a>
            </div>
            <div class="form-group">
              <p style="text-align: center;font-size: 14px;letter-spacing: 2px;">
                <span>{{$t('m.login.btn4_2')}}</span><a href="/register" style="color: #00aecd;">{{$t('m.login.btn4_3')}}</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5'
  import CryptoJS from 'crypto-js'
  import vdialog from "../components/com-dialog";
export default {
  name: 'login',
  components: {
    vdialog
  },
  data() {
    return {
      username: "",
      password: "",
      bot_update_state: false,
      rePwd: '',
      reComPwd: '',
      loginBtn: true
    }
  },
  mounted() {
    let _this = this;
    if(!!JSON.parse(localStorage.getItem('user'))){
      _this.$router.push('/index');
      _this.$router.go(0)
    }
    $('.input_outer input').keypress(function(e) {
      if (e.which == 13) {
        _this.login()
        return false;
      }
    });
    require("../../static/home/js/TweenLite.min.js");
    require("../../static/home/js/EasePack.min.js");
    require("../utils/rAF.js");
    require("../utils/demo-1.js");

  },
  methods: {
    formValidate() {
      let objArr = [$('#username'), $('#password')];
      let _username = window.formValidation({
        obj: objArr[0],
        empty: '请输入用户名'
      });
      let _password = window.formValidation({
        obj: objArr[1],
        empty: '请输入密码'
      });
      objArr.forEach(function(element) {
        element.blur();
      })
      return _username.tag && _password.tag
    },
    login() {
      let _this = this;
      if (!_this.formValidate()) { return; }
      let Authent = _this.encrypt(_this.password,'hAw6eqnFLKxpsAv3');
      let userInfo = {
        account: _this.username,
        pwd: md5(_this.password),
        authent:Authent
      };
      _this.loginBtn = false;
      _this.$axios.post('login', userInfo).then(function(result) {
        if (result.status == 0) {
          let sessionInfo = result.data;
            sessionInfo.sessionId = result.sessionId;
          _this.loginBtn = true;
          _this.myMessage.success('登录成功');
          let json = {
            token: result.sessionId,
            user: JSON.stringify(sessionInfo)
          };
          _this.$store.commit('ADD_COUNT', json);
          if( sessionInfo.level < 5){
            setTimeout(function () {
              _this.$router.push('/index');
              _this.$router.go(0)
            },300);
          }else {
            setTimeout(function () {
              _this.$router.push('/admin');
              _this.$router.go(0)
            },300);
          }
        } else {
          _this.loginBtn = true;
          _this.myMessage.error(result.msg);
        }
      }).catch(function(err) {
        _this.loginBtn = true;
        _this.myMessage.error('网络请求发生异常,请稍后再试...');
      })
    },
    encrypt(word, keyStr){
      keyStr = keyStr ? keyStr : 'hAw6eqnFLKxpsAv3';
      var key  = CryptoJS.enc.Utf8.parse(keyStr);
      var srcs = CryptoJS.enc.Utf8.parse(word);
      var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
      return encrypted.toString();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../static/home/css/normalize.css" scoped></style>
<style scoped>
  .large-header {
    position: relative;
    width: 100%;
    background: #333;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    z-index: 1;
  }

  .demo-1 .large-header {
    /*background-image: url('../../static/home/images/slider-1.jpg');*/
    background: #fafafa;
  }
  @media (max-width: 767px){
    .logo_box{
      top: 40px !important;
    }
  }
  .logo_box{
    width: 400px;
    height: 400px;
    padding: 35px;
    color: #EEE;
    position: absolute;
    left: 0;
    top: 140px;
    right: 0;
    margin: 0 auto;
    background: rgba(255,255,255,1);
  }
  .logo_box{
    -webkit-box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
  }
  .logo_box h3{
    height: 20px;
    font: 26px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei",sans-serif;
    color: #333;
    line-height: 60px;
    display: inline-block;
    vertical-align: top;
  }
  .logo_box_top img{
    width: 60px;
    display: inline-block;
    vertical-align: top;
  }
  .logo_box_top span{
    display: inline-block;
    height: 60px;
    width: 1px;
    background: #cfcfcf;
    margin: 0 20px 0;
  }
  .input_outer{
    height: 52px;
    padding: 0 5px;
    margin-bottom: 30px;
    position: relative;
  }
  .input_outer input{
    border: rgba(0,0,0,0.2) 1px solid !important;
    border-radius: 4px;
    transition: all 300ms;
  }
  .input_outer input:focus{
    border: rgba(51, 171, 184, 0.8) 1px solid !important;
    box-shadow: 2px 2px 10px rgba(51, 171, 184, 0.5);
    border-radius: 4px;
  }
  .text{
    width: 320px;
    height: 46px;
    outline: none;
    display: inline-block;
    font: 14px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
    text-indent: 10px;
    border: none;
    background: none;
    line-height: 46px;
  }
  /*///*/
  .mb2{
    margin-bottom: 20px
  }
  .mb2 a{
    text-decoration: none;
    outline: none;
    display: inline-block;
    margin: 0 1% 0 3%;
  }
  span.error {
    color: red;
    font-size: 13px;
    text-align: right;
    display: block;
    width: 325px;
  }
</style>
