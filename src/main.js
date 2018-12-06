// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import axios from './axios'
// import store from './vuex/store'
import './utils/formValidation'
import echarts from 'echarts'
import common from '../commonFunction/common'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'

Vue.use(VueI18n) // 通过插件的形式挂载
Vue.use(Vuex) // 通过插件的形式挂载

const i18n = new VueI18n({
  locale: !!localStorage.getItem('locale') ? localStorage.getItem('locale') : 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'en-US': require('./common/lang/en'),    // 英文语言包
    'Korean': require('./common/lang/zh'),   // 韩文语言包
    'Japan': require('./common/lang/en')    // 日文语言包
  }
})

const ADD_COUNT = 'ADD_COUNT'; // 用常量代替事件类型，使得代码更清晰
const REMOVE_COUNT = 'REMOVE_COUNT';
//注册状态管理全局参数
var store = new Vuex.Store({
  state: {
    token: '',
    user: '',
  },
  mutations: {
    //写法与getters相类似
    //组件想要对于vuex 中的数据进行的处理
    //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
    //内部操作必须在此刻完成(同步)
    [ADD_COUNT](state, json) { // 第一个参数为 state 用于变更状态 登录
      localStorage.setItem("token", json.token);
      localStorage.setItem("user", json.user);
      state.token = json.token;
    },
    [REMOVE_COUNT](state, token) { // 退出登录
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.token = token;
    },
  }
});

router.beforeEach((to, from, next) => {
  store.state.token = localStorage.getItem('token');//获取本地存储的token
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (!!store.state.token) {  // 通过vuex state获取当前的token是否存
      next();
    }
    else {
      next({
        path: '/login',
        query: {}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

router.afterEach(route => {
});


Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.common = common;
// Vue.prototype.$router = router;
new Vue({
  el: '#app',
  i18n,
  router,
  axios,
  store,
  components: {App},
  template: '<App/>'
})

