<template>
    <div>
        <!--<transition name="fade">-->
        <!--</transition>-->
    </div>
</template>
<script>
  import Vue from 'vue'
  import eventBus from '../utils/eventBus'
  import iziToast from '../../static/iziToast/js/iziToast.min.js'
  import '../utils/eventBus'
  let _emitFn = ( type, msg ) => {
    // eventBus.$emit('eventMsg',{
    //   type: type,
    //   msg: msg
    // })
    iziToast.destroy();
    iziToast.show({
      class: 'test',
      color: 'dark',
      icon: 'icon-contacts',
      title: '提示',
      message: msg,
      timeout: 2000,
      position: 'topCenter',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      progressBarColor: 'rgb(0, 255, 184)',
      image: '../../static/home/img/login.png',
      imageWidth: 55,
      layout:2,
      displayMode :2,
      iconColor: 'rgb(0, 255, 184)'
    });
  };
  Vue.prototype.myMessage = {
    info: ( msg ) => {
      _emitFn( 'info', msg );
    },
    success: ( msg ) => {
      _emitFn( 'success', msg );
    },
    error:  ( msg ) => {
      _emitFn( 'danger', msg );
    },
    warning: ( msg ) => {
      _emitFn( 'warning', msg );
    }
  };

  let data = {
    messageData:{
        msg: '',
        type: 'info'
    },
    showMsg: false
  }
  export default {
    data() {
      return data
    },
    mounted() {
      // this.getEventData();
    },
    methods: {
      // getEventData () { //获取来自列表的数据
      //   eventBus.$off('eventMsg').$on('eventMsg', (obj) => {
      //     this.$set(data, 'messageData', obj);
      //     this.showMsg = true;
      //     clearTimeout( this.autoClose );
      //     this.autoClose ();
      //   });
      // },
      // closeMsg () {//关闭msg
      //   this.showMsg = false;
      //   clearTimeout( this.autoClose );
      // },
      // autoClose () {
      //     return setTimeout(() => {
      //         this.showMsg = false;
      //     }, 1500);
      // },
      // closeFn(){
      //   this.showMsg = false;
      // }
    }
  }
</script>
<!--<style scoped>-->
<!--</style>-->

