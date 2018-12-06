<template>
  <nav>
    <ul class="pagination pagination-rounded">
      <li :class="pagination.pageIndex == 1 ? 'disabled' : ''" @click="jumpPage(1)" v-if="pagination.pageCount > 0">
        <a aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li :class="pagination.pageIndex == item ? 'active' : ''" v-for="item in pagination.pageCount <= 0 ? 1 : pagination.pageCount" :key="item" @click="jumpPage(item)"
          v-if="(pagination.pageIndex + (pagination.pageIndex == 1 ? 5 : (pagination.pageIndex == 2 ? 4 : 3))) > item && (pagination.pageIndex - (pagination.pageIndex == pagination.pageCount ? 5 : (pagination.pageIndex == pagination.pageCount-1 ? 4 : 3))) < item">
        <a>{{item}}</a>
      </li>
      <li :class="pagination.pageIndex == pagination.pageCount ? 'disabled' : ''" @click="jumpPage(pagination.pageCount)" v-if="pagination.pageCount > 0">
        <a aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props:['pagination'],
    data:function(){
      return{
      }
    },

    mounted () {
    },
    methods:{
      jumpPage:function (item) {
        let _this = this;
        if(item == _this.pagination.pageIndex){
          return false;
        }
        _this.pagination.pageIndex = item;
        _this.pagination.startCount = (item - 1) * _this.pagination.pageSize;
        _this.$emit('setPageData',_this.pagination);
      },
      // pageMove:function () {//更多
      //   let _this = this;
      //
      // },
    }
  }
</script>

<style scoped>
</style>
