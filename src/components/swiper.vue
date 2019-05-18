<template>
  <div>
    <el-carousel class="swiper-wrap" :interval="5000" arrow="always" indicator-position="none">
      <el-carousel-item
        :style="{'background-image':'url(' + item.picture +')','background-size':'100% 100%'}"
        v-for="(item,index) in swiperList"
        :key="index"
      ></el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import swiper1 from "../assets/images/swiperone.png";
import swiper2 from "../assets/images/swipertwo.png";
import swiper3 from "../assets/images/logo.png";
export default {
  data() {
    return {
      swiperList: [
        { picture: swiper1 },
        { picture: swiper2 },
        { picture: swiper3 }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.swiper-wrap {
  width: 100%;
  height: 600px;
}
/deep/.el-carousel__container {
  height: 100%;
}
</style>
