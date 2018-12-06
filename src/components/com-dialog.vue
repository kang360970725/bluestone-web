<template>
  <div class="dialog-wrap" :style="contentStyle">
    <div class="dialog-mask"  v-show="isShow"></div>
    <transition name="drop">
      <div class="dialog-content" :style="contentStyle"  v-show="isShow"  transiton="drop">
        <span class="icon-cross" v-if="!options.closeBtn" v-on:click="modalResponse('close')"></span>
        <div v-if=" !!options.title " style="background-color:rgba(0,0,0,.5)">
          <div class="content-hearder">
            <span>{{ options.title }}</span>
          </div>
        </div>
        <div class="content-body">
          <slot></slot>
        </div>
        <div class="content-footer w-col w-col-12" v-if="!options.hideFooter">
          <div class="w-col-4" v-if="!!options.hasBtn" style="margin: 0 8%;display: inline-block;float: none;">
            <button type="button" class="w-button button no-margin w-col-10" @click="modalResponse('check')">{{options.hasBtnTxt || '确定'}}</button>
          </div>
          <div class="w-col-4" v-if="options.closeBtn" style="margin: 0 8%;display: inline-block;float: none;">
            <button type="button" class="button btn-active w-col-10" @click="modalResponse('close')">{{options.closeBtnTxt || '关闭'}}</button>
          </div>
        </div>
        <div class="content-footer w-col w-col-12" v-if="options.hideFooter">
          <div class=" w-col-4" style="margin: 0 auto;display: block;float: none;">
            <button v-if="!!options.hasBtn" style="margin-left: 0;" type="button" class="w-button button no-margin w-col-10" @click="modalResponse('check')">{{options.hasBtnTxt || '确定'}}</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'v-dialog',
    props: {
      'options': {
        default: () => {
          return {}
        }
      },
      'isShow': {
        default: false
      }
    },
    data () {
      return {
        width: '400',
        height: 'auto',
      }
    },
    computed: {
      contentStyle (obj) {
        let width = parseInt(this.options.width) || parseInt(this.width),
          height = parseInt(this.options.height) || this.height;
        if ($(window).width() < 900) {
          width = 350
        }else {

        }
        return {
          'width': width + 'px',
          'height': height,
          'margin': 'auto'
        }
      }
    },
    methods: {
      modalResponse (type) {
        this.$emit('modalResponse',{ type: type });
      }
    }
  }
</script>
<style scoped>

  .dialog-wrap {
    position: relative;
    width: auto;
    height: auto;
    z-index: 9999;
  }
  .dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: 100;
  }
  /*@media screen and (max-width: 767px) {*/
    /*.dialog-content {*/
      /*width: 350px !important;*/
    /*}*/
  /*}*/
  .dialog-content {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 101;
    background-color: #fff;
    /*border: 12px solid rgba(0,0,0,.5);*/
    box-shadow: 0px 3px 16px 5px rgba(0,0,0,.3);
  }
  .content-hearder {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #8e929e;
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    font-weight: 600;
    border-radius: 5px 5px 0px 0px;
  }
  .icon-cross {
    display: block;
    position: absolute;
    right: 5px;
    top: 10px;
    /*color: #fff;*/
    opacity: 0.7;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
  }
  .content-body {
    width: 90%;
    /*max-height: 350px;*/
    overflow-y: auto;
    height: auto;
    padding: 10px;
    background-color: #fff;
    box-sizing: border-box;
    margin: 10px auto;
  }
  .content-footer {
    /*width: 70%;*/
    height: 80px;
    /*line-height: 80px;*/
    background-color: #fff;
    margin: 20px auto 0;
  }
  .button{
    margin: 0 auto;
    display: block;
  }
</style>


