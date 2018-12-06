<template>
  <div>
    <com-message/>
    <!--<loading/>-->
    <div class="app app-loaded">
      <div class="app-container app-header-inside-content">
        <!--<com-sidebar :isLogin="isLogin && !isRegister" />-->
        <div class="app-content app-sidebar-left">
          <com-header/>
          <!--<com-breadcrumb/>-->
          <div class="container">
            <div id="app" class="clearfix">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
      <!--<com-footer/>-->
    </div>
    <!--<div v-if="!isLogin && !isRegister && !homepage">-->
      <!--<login/>-->
    <!--</div>-->
    <!--<div v-if="isRegister && !homepage">-->
      <!--<register v-if="!isrespwd"/>-->
      <!--<respwd v-if="isrespwd"/>-->
    <!--</div>-->
    <!--<div v-if="homepage">-->
      <!--<homepage/>-->
    <!--</div>-->
  </div>
</template>

<script>
import comSidebar from '@/components/com-sidebar'
import comHeader from '@/components/com-header'
import comFooter from '@/components/com-footer'
import comBreadcrumb from '@/components/com-breadcrumb'
import comMessage from '@/components/com-message'
import loading from '@/components/loading'
export default {
  name: 'App',
  components: { comSidebar, comHeader, comFooter, comBreadcrumb, comMessage,loading},
  data() {
    return {
      homepage:false
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "hideMenuSlide"
  },
  mounted() {
    require("../static/home/js/jquery-moutheme.js");
  },
  methods: {
    // 隐藏MenuSlide
    hideMenuSlide() {
      console.log(123456);
      this.myMessage.info('加载完成......');
    }
  },
}
</script>
<style>
  /*canvas{*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*margin: auto;*/
    /*position: fixed;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 999999;*/
  /*}*/
</style>

<style scoped>
  html,body{
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
    min-height: 100%;
  }
.app {
  overflow: hidden;
}

.app-container {
  /*height: calc(100vh - 40px);*/
  /*min-height: 680px;*/
}

.app-content {
  /*height: 100% !important;*/
}

.app-content>.container,
#app {
  min-height: calc(100vh - 170px);
  /*min-height: 100%;*/
}

#app>div {
  /*height: 100%;*/
  /*overflow-y: auto;*/
}
</style>
