<template>
  <div>
  
      <!-- banner轮播图 -->
      <div class="banner_slideshow">
        <SliderIndex></SliderIndex>
      </div>
    <!-- 今日新品================== -->
    <div class="index_conter">
      <div class="xinPin">
        <h2>今日新品 TODAY'S BRAND</h2>
      </div>
      <div class="Perducts">
        <!-- 商品信息----- -->
        <div v-for="item in productsList" :key="item._id" class="index_perducts">
         <router-link :to="{name: 'particulars',query:{id:item._id}}"><img :src="item.imgUrl" alt=""></router-link>
          <!-- <div class="img">{{item.imgUrl}}</div> -->
          <p class="perduct_price">￥ {{item.OriginPrice}}</p>
          <p class="perduct_name">{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import SliderIndex from "../components/swiper.vue";
export default {
  name: "index",
  components: {
    SliderIndex
  },
  computed: {
    ...mapState(["productsList"]),
  },
 
  data() {
    return {
      perductList: []
    };
  },
  created() {
    //   get请求----------
    // this.$axios
    //   .get("http://192.168.11.132:1212/api/detail")
    //   .then(res => {
    //     this.perductList = res.data;
    //     // console.log(this.perductList[0].imgUrl);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>
