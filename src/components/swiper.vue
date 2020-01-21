<template>
  <div>
    <el-carousel class="swiper-wrap" :interval="5000" arrow="always" indicator-position="none">
      <el-carousel-item
        :style="{'background-image':'url(' + item.picture +')','background-size':'cover'}"
        v-for="(item,index) in swiperList"
        :key="index"
      ></el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperList: [
        { picture: require("../assets/images/swiper/swiper1.jpg") },
        { picture: require("../assets/images/swiper/swiper2.jpg") },
        { picture: require("../assets/images/swiper/swiper3.jpg") },
        { picture: require("../assets/images/swiper/swiper4.jpg") }
      ]
    };
  },
  mounted() {
    console.log(this.$parent);
  }
};
</script>
<style lang="less" scoped>
.swiper-wrap {
  width: 100%;
  height: 580px;
}
/deep/.el-carousel__container {
  height: 100%;
}
</style>
