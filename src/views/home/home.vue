<template>
  <div class="home">
    <swiper-module></swiper-module>
    <div class="type-module clearfix">
      <div class="type-item pull-left" v-for="(item,$index) in type_list" :key="$index">
        <img class="title font-18 pull-left" :src="item.img_url">
      </div>
    </div>
  </div>
</template>
<script>
import swiperModule from "@/components/swiper.vue";
import newImg from "@/assets/images/tags/new.png";
import birthdayImg from "@/assets/images/tags/birthday.png";
import childrenImg from "@/assets/images/tags/children.png";
import partyImg from "@/assets/images/tags/party.png";
import activityImg from "@/assets/images/tags/activity.png";
export default {
  components: {
    swiperModule
  },
  data() {
    return {
      type_list: [
        { title: "新品", img_url: newImg },
        { title: "生日", img_url: birthdayImg },
        { title: "儿童", img_url: childrenImg },
        { title: "聚会", img_url: partyImg },
        { title: "活动专区", img_url: activityImg }
      ]
    };
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
}
</style>
