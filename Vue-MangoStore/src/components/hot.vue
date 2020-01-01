<template>
  <div>
    <img src="//jp.juancdn.com/juanpi/images/brand/banner_all.jpg?ts=20181022174388" alt />
    <div class="hotPerducts">
      <div v-for="item in perductList2" :key="item._id" class="index_perducts">
        <img :src="item.imgUrl" alt=""/>
        <p class="perduct_price">{{item.OriginPrice}}</p>
        <p class="perduct_name">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hot",
  data () {
      return {
          perductList2:[]
      }
  },
  created() {
    //   get请求----------
    this.$axios
      .get("http://www.wayxuan.wang:1314/api/detail")
      .then(res => {
        this.perductList2 = res.data;
        console.log(this.perductList[0].imgUrl);
      })
      .catch(err => {
        console.log(err);
      });
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
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>