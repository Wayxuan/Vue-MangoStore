<template>
<div>
  <div class="head-big">
    <div class="head">
      <img src="../assets/Mango-min.jpg" id="logo" alt="">
    </div>
  </div>
  <table id="commodity_box">
    <tr>
      <td>商品信息</td>
      <td>单价/原价</td>
      <td>数量</td>
      <td>小计</td>
      <td>操作</td>
    </tr>
  </table>
</div>
  
</template>
<script>

export default {
  data(){
    return{
      product:[],
    }
  },
  created(){
    this.$axios.get("http://www.wayxuan.wang:1314/api/detail")
    .then(res=>{
      console.log(res)
      this.product=res.data
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>


<style>
  /*引入css 样式文件*/
  @import '../style/Shopping-style/reset.css';
</style>
<style scoped>
  /*引入css 样式文件*/
  @import '../style/Shopping-style/shopping.css';
</style>

