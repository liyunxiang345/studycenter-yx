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
import swiper1 from "../assets/images/swiper/swiper1.jpg";
import swiper2 from "../assets/images/swiper/swiper2.jpg";
import swiper3 from "../assets/images/swiper/swiper3.jpg";
import swiper4 from "../assets/images/swiper/swiper4.jpg";
export default {
  data() {
    return {
      swiperList: [
        { picture: swiper1 },
        { picture: swiper2 },
        { picture: swiper3 },
        { picture: swiper4 }
      ]
    };
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
