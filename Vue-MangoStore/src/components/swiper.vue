<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img class="swiperImg" src="../assets/indexImg/6.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img class="swiperImg" src="../assets/indexImg/2.gif" alt />
    </swiper-slide>
    <swiper-slide>
      <img class="swiperImg" src="../assets/indexImg/1.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img class="swiperImg" src="../assets/indexImg/3.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img class="swiperImg" src="../assets/indexImg/4.png" alt />
    </swiper-slide>
     <swiper-slide>
      <img class="swiperImg" src="../assets/indexImg/5.jpg" alt />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        notNextTick: true,
        autoplay: true,
        effect: "coverflow",
        grabCursor: true,
        setWrapperSize: true,
        paginationType: "bullets",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        mousewheelControl: true,
        observeParents: true
      },
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets"
      }
    };
  }
};
</script>
<style scoped>
.swiperImg{
    width:100%;
    height:100%
}
</style>