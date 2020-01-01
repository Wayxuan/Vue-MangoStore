<template>
  <div style="padding:30px;">
    <el-alert :closable="false" type="success" />
  <table>
      <tr>
        <th>订单号</th>
        <th>商品图片</th>
        <th>商品描述</th>
        <th>商品价格</th>
        <th>商品数量</th>
        <th>商品尺码</th>
        <th>买家用户名</th>
        <th>买家地址</th>
      </tr>
      <tr v-for="(p, i) in liss" :key="i">
        <td>{{ p._id }}</td>
        <td><img :src="p.productImg" /></td>
        <td class="sptp">{{ p.productTitle }}</td>
        <td>{{ p.productPrice }}</td>
        <td>{{ p.productNum }}</td>
        <td>{{ p.productSize }}</td>
        <td>用户名</td>
        <td>{{ p.address }}</td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
table tr {
  border: 1px solid #333;
  border-left: none;
  border-right: none;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  margin-top: 40px;
}

table tr td {
  width: 140px;
}
table tr img {
  width: 70px;
}
table .sptp {
  width: 240px;
}
</style>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      liss:[]
    }
  },
  created(){
    const data={
      userId:localStorage.getItem('token')
    }
    axios.get('http://www.wayxuan.wang:1314/api/order/allO')
    .then(res=>{
      console.log(res.data)
      this.liss=res.data
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>
