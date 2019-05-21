<template>
  <div class="menu">
    <dl class="menu-list">
      <dt class="pull-left">分类:</dt>
      <dd class="pull-left" v-for="(type,$index) in type_list" :key="$index">
        <a href="javascript:void(0)">{{type.name}}</a>
      </dd>
    </dl>
    <dl class="menu-list">
      <dt class="pull-left">口味:</dt>
      <dd class="pull-left" v-for="(flavor,$index) in flavor_list" :key="$index">
        <a href="javascript:void(0)">{{flavor.name}}</a>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    type_list: {
      type: Array
    },
    flavor_list: {
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
.menu {
  width: 1200px;
  margin-top: 25px;
  margin-bottom: 35px;
  border-top: #f2f2f2 solid 1px;
  border-bottom: #f2f2f2 solid 1px;
  .menu-list {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    margin: 0;
    dt {
      color: #9b9b9b;
      margin-right: 38px;
    }
    dd {
      a {
        color: #684029;
        font-size: 13px;
        text-decoration: none;
        &:hover {
          color: #bb9772;
        }
      }
    }
  }
}
</style>
