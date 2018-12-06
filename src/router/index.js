import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import information from '@/view/home/info'
import index from '@/view/home/user-index'
import register from '@/view/register'
import homepage from '@/view/index'
import more from '@/view/more'
import aboutUs from '@/view/information/about-us'
import contactUs from '@/view/information/contact-us'
import botSet from '@/view/product/bot-setting'
import faq from '@/view/information/faq'
import news from '@/view/information/news'
import admin from '@/view/admin/admin'
import super_info from '@/view/admin/super'
import product from '@/view/information/product-intro'//产品介绍
import service from '@/view/information/service-intro'//服务介绍

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      title:'首页',
      component: homepage
    },
    {
      path: '/login',
      name: 'login',
      title:'登录',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      title:'注册',
      component: register
    },
    {
      path: '/more',
      name: 'more',
      title:'更多',
      component: more
    },
    {
      path: '/about',
      name: 'about',
      title:'关于我们',
      component: aboutUs
    },
    {
      path: '/contact',
      name: 'contact',
      title:'联系我们',
      component: contactUs
    },
    {
      path: '/bot',
      name: 'bot',
      title:'Bot设置',
      component: botSet,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/product',
      name: 'product',
      title:'产品介绍',
      component: product
    },
    {
      path: '/service',
      name: 'service',
      title:'服务介绍',
      component: service
    },
    {
      path: '/faq',
      name: 'faq',
      title:'FAQ',
      component: faq
    },
    {
      path: '/news',
      name: 'news',
      title:'新闻动态',
      component: news
    },
    {
      path: '/index',
      name: 'user-index',
      title:'量化交易',
      component: index,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/information',
      name: 'information',
      title:'个人资料',
      component: information,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/admin',
      name: 'renew-list',
      title:'充值核实',
      component: admin,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/super-info',
      name: 'super-info',
      title:'充值核实',
      component: super_info,
      meta: {
        requireAuth: true,
      }
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component: botUser
    // }
  ]
})

