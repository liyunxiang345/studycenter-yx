<template>
  <div class="home">
    <swiper-module></swiper-module>
    <div class="type-module clearfix">
      <div class="type-item pull-left" v-for="(item,$index) in type_list" :key="$index">
        <img class="title font-18 pull-left" :src="item.img_url" />
      </div>
    </div>
    <div class="home-module" v-for="(item,$index) in type_list" :key="$index">
      <h4 class="home-module-title font-26">
        {{item.title}}
        <span class="font-14">/</span>
        <span class="font-14">专区</span>
      </h4>
      <div class="home-module-banner">
        <img :src="item.banner_url" alt />
      </div>
    </div>
  </div>
</template>
<script>
import swiperModule from "@/components/swiper.vue";
import Api from "@/api/index";
export default {
  components: {
    swiperModule
  },
  data() {
    return {
      type_list: [
        {
          title: "新品",
          img_url: require("@/assets/images/home/new.png"),
          banner_url: require("@/assets/images/home/newArea.png")
        },
        {
          title: "生日",
          img_url: require("@/assets/images/home/birthday.png"),
          banner_url: require("@/assets/images/home/birthdayArea.png")
        },
        {
          title: "儿童",
          img_url: require("@/assets/images/home/children.png"),
          banner_url: require("@/assets/images/home/childArea.png")
        },
        {
          title: "聚会",
          img_url: require("@/assets/images/home/party.png"),
          banner_url: require("@/assets/images/home/partyArea.png")
        },
        {
          title: "活动专区",
          img_url: require("@/assets/images/home/activity.png"),
          banner_url: require("@/assets/images/home/newArea.png")
        }
      ]
    };
  },
  methods: {
    getData() {
      Api.userInfo().then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="less" scoped>
.home {
  .type-module {
    width: 1124px;
    margin: 26px auto 0;
    padding-top: 0;
    .type-item {
      width: 200px;
      height: 100px;
      margin: 6px 12px;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.06);
      .title {
        color: #684029;
        margin-left: 35px;
        line-height: 100px;
        font-weight: 500;
      }
    }
  }
  .home-module {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    .home-module-title {
      width: 1100px;
      color: #724228;
      line-height: 36px;
      font-weight: normal;
      margin: 0 auto 20px;
      span {
        color: #8e5d43;
      }
    }
    .home-module-banner {
      width: 1100px;
      height: 250px;
      margin: 0 auto;
      padding-top: 100px;
      margin-top: -100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
