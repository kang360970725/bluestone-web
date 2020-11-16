<template>
  <div class="app-heading-container app-heading-bordered bottom" v-if="!!isShow">
    <div class="app-heading app-heading-bordered app-heading-page">
      <div class="icon icon-lg">
        <span class="icon-bubble-alert"></span>
      </div>
      <div class="title">
        <h1>沐数科技2.0即将开启</h1>
        <p>公告:沐数即将开启，奖励更加疯狂。</p>
      </div>
    </div>
  </div>
</template>

<script>
import menusConfig from '../config/sidebar'
let _menusConfig = Object.values(JSON.parse(JSON.stringify(menusConfig)));
let _menuList = [];
export default {
  name: 'com-breadcrumb',
  data() {
    return {
      menuNode: [],
      isShow: false
    }
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    getMenuNode: function(router, parentItem) {
      let _this = this, _menuItem = _menusConfig;
      if (!!parentItem) (_menuItem = parentItem.children)
      _menuItem.forEach(function(item) {
        if (item.key == router.name) {
          _menuList.push(parentItem);
          _menuList.push(item);
          return false;
        }
        if (!!item.children) {
          _this.getMenuNode(router, item);
        }
      }, this);
      return _menuList;
    },
    getMenu: function() {
      let _router = this.$route;
      //是否显示面包屑
      this.isShow = _router.name == "home" ? false : true;
      _menuList = [];
      //获取当前url面包屑数据
      this.menuNode = this.getMenuNode(_router);
    }
  },
  watch: {
    $route() {
      this.getMenu();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.breadcrumb{
  margin-left: 15px;
}
  .app-heading-container.app-heading-bordered.bottom{
    padding: 0 0 0 1px;
  }
</style>
