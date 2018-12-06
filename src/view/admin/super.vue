<template>
  <div>
    <!-- SUB BANNER -->
    <div class="sub-banner">
      <div class="w-container">
        <div class="w-row">
          <div class="w-col w-col-8">
            <h4 class="title-bread">{{$t('m.header.Bot')}} <span class="sub-title-lighter">/ {{$t('m.header.bodyTitle')}}<br></span>
            </h4>
          </div>
          <div class="w-col w-col-4 col-right">
            <!--<div class="breadcrumbs">Unikue /&nbsp;Shortcodes</div>-->
          </div>
        </div>
      </div>
    </div>
    <!-- END SUB BANNER -->

    <section class="w-section section" style="padding: 20px 10px;">
      <div class="container">
        <div class="w-col w-col-12 border1" style="margin: 0 auto;float: none;">
          <div class="w-clearfix">
            <div class="w-col-6" style="margin: 0 auto;text-align: center">
              <label>
                <input class="form-control text" style="width: 300px;float: left;" type="text" v-model="keyWord"/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a class="w-button button no-margin" @click="decrypt">ok</a>
              </label>
              <h6>{{txt}}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import CryptoJS from 'crypto-js'
  export default {
    name: 'information',
    data: function () {
      return {
        keyTxt: '',
        keyWord: '',
        txt: '',
      }
    },
    mounted() {
      this.user = JSON.parse(localStorage.getItem('user')) || '';
      if(this.user.level < 8){
        this.$router.push('/');
        this.$router.go(0)
      }
    },
    methods: {
      //解密
      // decrypt(word, keyStr){
      // encrypt(){
      //   let _this = this;
      //   let keyStr = 'hAw6eqnFLKxpsAv3';
      //   let word = _this.keyTxt;
      //   let key  = CryptoJS.enc.Utf8.parse(keyStr);
      //   let srcs = CryptoJS.enc.Utf8.parse(word);
      //   let encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
      //   _this.keyWord = encrypted.toString();
      //   _this.decrypt()
      // },
      decrypt(){
        let _this = this;
        let keyStr = 'hAw6eqnFLKxpsAv3';
        var word = _this.keyWord;
        var key  = CryptoJS.enc.Utf8.parse(keyStr);
        var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
        _this.txt = CryptoJS.enc.Utf8.stringify(decrypt).toString();
        console.log(_this.txt);
      }
    }
  }
</script>

<style src="../../../static/admin/css/styles.css" scoped></style>
<style>
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .form-control{
    width: 100%;
  }
  .w-button.button{
    padding: 11px 16px;
    border-radius: 4px;
    background-color: #00aecd;
    color: #fff;
    text-decoration: none !important;
  }
  .button:hover {
    background-color: #414141;
  }
</style>
