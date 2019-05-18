<template>
  <nav class="nav">
    <div class="header-nav">
      <img class="logo" :src="logoImg" alt="logo">
      <div class="nav-list">
        <div class="nav-item" v-for="($item,$index) in navList" :key="$index">
          <a link @click="goPage($item)">{{$item.title}}</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import logo from "../assets/images/logo.png";
export default {
  data() {
    return {
      logoImg: logo,
      navList: [
        { id: 1, title: "首页", route: "home" },
        { id: 2, title: "蛋糕", route: "cake" },
        { id: 3, title: "面包", route: "bread" },
        { id: 4, title: "冰淇淋", route: "icecream" },
        { id: 5, title: "咖啡下午茶", route: "tea" },
        { id: 6, title: "咖啡全国送", route: "give" },
        { id: 7, title: "企业专区", route: "area" }
      ]
    };
  },
  methods: {
    goPage(item) {
      this.$router.push({
        name: item.route,
        query: {}
      });
    }
  }
};
</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 2px 0 rgba(195, 195, 195, 0.5);
  .header-nav {
    max-width: 1200px;
    min-width: 760px;
    height: 80px;
    margin: 0 auto;
    .logo {
      width: 120px;
      height: 44px;
      margin-top: 18px;
      float: left;
    }
    .nav-list {
      display: inline-block;
      margin-left: 30px;
      line-height: 80px;
      &:after {
        display: block;
        content: "";
        clear: fixed;
      }
      .nav-item {
        float: left;
        margin: 0 15px;
        font-size: 14px;
        a {
          cursor: pointer;
          color: #684029;
          &:hover {
            color: #dac593;
            transition: 1s;
          }
        }
      }
    }
  }
}
</style>
