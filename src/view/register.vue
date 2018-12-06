<template>
  <div class="container demo-1">
    <div class="content">
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas"></canvas>
        <div class="logo_box">
          <div class="logo_box_top" style="text-align: center">
            <img src="../../static/home/img/login.png"/>
            <span></span>
            <h3>{{$t('m.login.btn2')}}</h3>
          </div>
          <br>
          <form autocomplete="off">
            <!--<div class="input_outer">-->
              <!--<input type="text" class="form-control text" style="color: #333 !important" v-model="username" id="username" name="username" :placeholder="$t('m.login.input3')" maxlength="12">-->
              <!--<span class="error"></span>-->
            <!--</div>-->
            <div class="input_outer">
              <input type="text" class="form-control text" style="color: #333 !important" v-model="emailAdd" id="emailAdd" name="emailAdd" :placeholder="$t('m.login.input4')" @blur="validName()">
              <span class="error"></span>
            </div>
            <div class="input_outer">
              <input type="text" class="form-control text" maxlength="6" style="color: #333 !important" v-model="emailCode" id="emailcode" name="invitcode" :placeholder="$t('m.login.input4_1')">
              <span class="sendEmail" v-show="!hide" :class="emailState ? '' : 'is-disabled'" @click="sendEmailFn">{{emailTimeNum > 0 ? emailTimeNum : $t('m.login.input4_2')}}</span>
              <span class="sendEmail is-disabled" v-show="hide"><img width="16" src="../../static/home/img/loading.gif"/></span>
              <span class="error"></span>
            </div>
            <div class="input_outer">
              <input type="password" class="form-control text" style="color: #333 !important" v-model="password" id="password" name="password" :placeholder="$t('m.login.input5')">
              <span class="error"></span>
            </div>
            <div class="input_outer">
              <input type="text" class="form-control text" style="color: #333 !important" v-model="invitcode" id="invitcode" name="invitcode" :placeholder="$t('m.login.input6')">
              <span class="error"></span>
            </div>
            <!--<div class="form-group">-->
              <!--<div class="col-md-12 col-xs-12" style="padding-left: 0;">-->
                <!--<div class="app-checkbox success inline">-->
                  <!--<label style="margin-bottom: 15px;padding-left: 22px;">-->
                    <!--<input type="checkbox" v-model="agrType" name="app-checkbox-3" style="opacity: 0;margin: 0 0 0 -10px;" value="0">我同意,-->
                  <!--</label>-->
                  <!--<span><a @click="showPromp">会员注册协议条款</a></span>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <div class="mb2">
              <a class="w-button button no-margin" href="javascript:;" style="color: #FFFFFF;width: 100%;margin: 0;" @click="register">{{$t('m.login.btn3')}}</a>
            </div>
            <div class="form-group">
              <p style="text-align: center;font-size: 14px;letter-spacing: 2px;">
                <span>{{$t('m.login.btn4')}}</span><a href="/login" style="color: #00aecd;">{{$t('m.login.btn4_1')}}</a>
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
  // import '../../static/boooya/js/app_plugins.js';
  import vdialog from "../components/com-dialog";
  // import demo from "../utils/demo-1.js";
export default {
  name: 'login',
  components: {
    vdialog
  },
  data() {
    return {
      emailAdd: "",
      hide: false,
      emailState: false,
      emailTimeNum: 0,
      emailCode: "",
      phoneNum: "",
      username: "",
      password: "",
      invitcode: "",
      agrType : false,
      dialogOptions: {//弹窗配置项
        width: '800',//弹窗宽度
        hasBtn: false //是否需要确定按钮，默认没有确认按钮
      },
      showDialog: false
    }
  },
  mounted() {
    let _this = this;
    if(!!_this.$route.query.code){
      _this.invitcode = _this.$route.query.code
    }
    console.log(!!JSON.parse(localStorage.getItem('user')));
    if(!!JSON.parse(localStorage.getItem('user'))){
      _this.$router.push('/index');
      _this.$router.go(0)
    }
    _this.initHeader();
    require("../../static/home/js/TweenLite.min.js");
    require("../../static/home/js/EasePack.min.js");
    require("../utils/rAF.js");
    require("../utils/demo-1.js");
  },
  methods: {
    formValidate() {
      let objArr = [$('#emailAdd'),$('#phoneNum'),$('#username'), $('#password'), $('#invitcode')];
      let _nickname = window.formValidation({
        obj: objArr[0],
        type:'email',
        empty: '请给输入常用邮箱',
        error:'邮箱格式不正确'
      });
      // let _name = window.formValidation({
      //   obj: objArr[1],
      //   type:'phone',
      //   empty: '请输入+86的电话号码',
      //   error:'电话号码格式不正确'
      // });
      let _invitcode = window.formValidation({
        obj: objArr[4],
        empty: '请输有效的邀请码'
      });
      // let _username = window.formValidation({
      //   obj: objArr[2],
      //   type: 'username',
      //   notNeedFill: true,
      //   empty: '请输入用户帐号',
      //   error:'字母开头6-20位用户帐号'
      // });
      let _password = window.formValidation({
        obj: objArr[3],
        empty: '请输入密码'
      });
      objArr.forEach(function(element) {
        element.blur();
      })
      // return _nickname.tag && _name.tag && _username.tag && _password.tag
      return _nickname.tag && _password.tag && _invitcode.tag
    },
    validName(){
      let _this = this;
      if (_this.emailTimeNum > 0) {  _this.hide = false; return; }
      if(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(_this.emailAdd)){
        _this.$axios.post('validName', {account:_this.emailAdd}).then(function(result) {
          if (result.status === 0) {
            _this.username = '';
            _this.myMessage.error('该用邮箱已被注册');
            _this.emailState = false;
            return true;
          } else {
            _this.emailState = true;
            return false;
          }
        }).catch(function(err) {
          _this.emailState = false;
          _this.myMessage.error('网络请求发生异常,请稍后再试...');
          return true;
        })
      }else {
        _this.emailState = false;
        return true;
      }
    },
    sendEmailFn(){
      let _this = this;
      _this.hide = true;
      if (!_this.emailState) { _this.hide = false; return; }
      _this.emailState = false;
      if (_this.validName()) { _this.hide = false; return; }
      if (_this.emailTimeNum > 0) {  _this.hide = false; return; }
      _this.emailState = false;
      //发送邮件
      _this.$axios.post('sendEmail', {type:'register', account:_this.emailAdd}).then(function(result) {
        if (result.status == 0) {
          _this.emailState = false;
          _this.hide = false;
          _this.myMessage.success('发送成功!');
          _this.timeoutFn(60);
        } else {
          _this.emailState = true;
          _this.myMessage.info(result.msg);
        }
      }).catch(function(err) {
        _this.emailState = false;
        _this.myMessage.error('网络请求发生异常,请稍后再试...');
        return true;
      })
    },
    timeoutFn(num){
      let _this = this;
      num --;
      _this.emailTimeNum = num;
      if(num > 0){
        setTimeout(function () {
          _this.timeoutFn(_this.emailTimeNum);
        },1000)
      }else if(num > -2){
        _this.emailState = true;
      }
    },
    register() {
      let _this = this;
      if (!_this.formValidate() || !_this.emailCode || !_this.invitcode) { return; }
      // if(!_this.agrType){
      //   _this.myMessage.error('请阅读并勾选同意注册协议条款！');
      //   return;
      // }
      let userInfo = {
        email: _this.emailAdd,
        emailCode: (_this.emailCode).toUpperCase(),
        phone: _this.phoneNum,
        account: _this.emailAdd,
        invitcode: _this.invitcode,
        password: md5(_this.password)
      };
      _this.$axios.post('register', userInfo).then(function(result) {
        if (result.status == 0) {
          _this.myMessage.success('注册成功,即将跳转！');
          let sessionInfo = result.data;
          sessionInfo.sessionId = result.sessionId;
          let json = {
            token: result.sessionId,
            user: JSON.stringify(sessionInfo)
          };
          _this.$store.commit('ADD_COUNT', json);
          setTimeout(function () {
            _this.$router.go(0);
            _this.$router.push('/index')
          },1500)
        } else {
          _this.myMessage.error(result.data);
        }
      }).catch(function(err) {
        _this.myMessage.error('网络请求发生异常,请稍后再试...');
      })
    },
    showPromp () {
      this.showDialog = true;
      // this.myMessage.warning('修改成功！')
    },
    modalResponse (json) {
      if(json.type === 'close'){
        this.showDialog = false;
      } else {//有表单等要操作的内容

      }
    },
    initHeader() {
      let _this = this;
      let width = window.innerWidth;
      let height = window.innerHeight;
      let target = {x: width/2, y: height/2};
      let largeHeader = document.getElementById('large-header');
      if((height - 130) < 720){
        height = 850;
      }
      largeHeader.style.height =(height - 130) +'px';

    },
  },
}
</script>

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
  .sendEmail{
    position: absolute;
    right: 6px;
    top: 1px;
    padding: 10px 20px;
    border-radius: 0 2px 2px 0;
    background-color: #3b4c77!important;
    border-color: #3b4c77!important;
    color: #fff;
    display: inline-block;
    line-height: 24px;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    font-size: 14px;
  }
  .is-disabled{
    opacity: .5;
  }
  .logo_box{
    width: 400px;
    height: 540px;
    padding: 35px;
    color: #EEE;
    position: absolute;
    left: 0;
    top: 80px;
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
    text-align: left;
    height: 20px;
    font: 26px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei",sans-serif;
    color: #333;
    line-height: 60px;
    display: inline-block;
    vertical-align: top;
  }
  .logo_box_top{
    margin-bottom: 20px;
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
    height: 46px;
    padding: 0 5px;
    margin-bottom: 26px;
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
