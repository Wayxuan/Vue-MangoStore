<template>
  <div>
    <div class="hotPerducts">
      <h1 v-if="nullProducts">没有搜索到哦！</h1>
      <div v-for="(item) in sreachProducts" :key="item._id" class="index_perducts">
        <router-link :to="{name: 'particulars',query:{id:item._id}}"><img :src="item.imgUrlall" alt /></router-link>
        <p class="perduct_price">￥ {{item.OriginPrice}}</p>
        <p class="perduct_name">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapSata, mapState } from "vuex";
export default {
  name: "Hot",
  data() {
    return {
      cearchPerducts: [],
      nullProducts: false
    };
  },
  computed: {
    ...mapState(["sreachProducts"])
  },
  created() {
    if (this.sreachProducts.length < 1) {
      this.nullProducts = true;
    } else {
      this.cearchPerducts = this.sreachProducts;
    }
  }
};
</script>
<style scoped>
.hotPerducts {
  width: 1200px;
  min-height: 500px;
  margin: 0 auto;
  background: #fff;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>