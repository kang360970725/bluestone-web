<template>
  <div id="aa" class="app-sidebar app-navigation app-navigation-style-default app-navigation-open-hover dir-left" data-type="close-other">
    <a href="/" class="app-navigation-logo">
      蓝猫科技
      <!--<button class="app-navigation-logo-button mobile-hidden" data-sidepanel-toggle=".app-sidepanel">-->
        <!--<span class="icon-alarm"></span>-->
        <!--<span class="app-navigation-logo-button-alert">7</span>-->
      <!--</button>-->
    </a>
    <nav>
      <ul class="menu-list">
        <li v-for="item in menuList" :key="item.key" v-if="item.isShow">
          <a :class="$route.name==item.key?'active':''"  @click="switchPage(item)">
            <span :class="item.icon"></span> {{item.title}}</a>
          <!--<ul v-if="!!item.children">-->
            <!--<li v-for="itemChildren in item.children" :key="itemChildren.key" v-if="itemChildren.isShow">-->
              <!--&lt;!&ndash; <router-link :to="itemChildren.href" :class="$route.name==itemChildren.key?'active':''"> &ndash;&gt;-->
              <!--<a :class="$route.name==itemChildren.key?'active':''" @click="switchPage(itemChildren)"-->
                 <!--v-if="!itemChildren.newOpen">-->
                <!--<span :class="itemChildren.icon"></span>{{itemChildren.title}}</a>-->
              <!--<a :href="itemChildren.href" target="_blank" v-if="itemChildren.newOpen">-->
                <!--<span :class="itemChildren.icon"></span>{{itemChildren.title}}</a>-->
              <!--&lt;!&ndash; <a @click="switchPage(itemChildren)" :class="[$route.name==itemChildren.key?'active':'', itemChildren.icon ]">{{itemChildren.title}}</a>  &ndash;&gt;-->
              <!--&lt;!&ndash; </router-link> &ndash;&gt;-->
            <!--</li>-->
          <!--</ul>-->
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import menusConfig from '../config/sidebar'
export default {
  name: 'com-sidebar',
  data() {
    return {
      menuList: []
    }
  },
  mounted() {
    this.getMenuList();
  },
  methods: {
    getMenuList: function() {
      this.menuList = menusConfig;
    },
    switchPage(item) {
      let currentPage = this.$route.path;
      if (item.href != currentPage) {
        this.$router.push({
          path: item.href
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-sidebar {
  /*min-height: 100% !important;*/
}

.app-sidebar .log-text {
  width: 119px;
  padding: 15px 0 0 0;
}

/*.app-navigation .app-navigation-logo {*/
  /*background: url() !important;*/
/*}*/

.app-navigation .app-navigation-logo {
  padding-left: 8px;
}

.app-sidebar .menu-list {
  cursor: pointer;
}
.app-navigation-p{
  color: rgb(255, 255, 255);
  font-size: 24px;
  line-height: 60px;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
