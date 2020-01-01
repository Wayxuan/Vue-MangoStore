<template>
  <div class="app-container">
    <button @click="clickHanld" type="button">获取用户</button>
    <table>
      <tr>
        <th>序号</th>
        <th>账户名</th>
        <th>收货地址</th>
        <th>联系方式</th>
      </tr>
      <tr v-for="(l,i) in list" :key="i">
        <td>{{i+1}}</td>
      <td>{{l.name}}</td>
      <td>{{l.address}}</td>
      <td>{{l.tel}}</td>
    </tr>
    </table>

  </div>
</template>
<style scoped>
.app-container th{
  text-align: center
}
.app-container button{
  width: 80px;
  height: 40px;
  background: #333;
  color: #fff;
  border: 0;
  font-size: 12px
}
.app-container tr:nth-child(even){
  background: #333;
  color: #fff;
}
.app-container tr:nth-child(1){
  border: none
}
.app-container tr{
    border: 1px solid #333
}
.app-container tr td{
  text-align: center;
  font-size: 14px;
  line-height: 40px
}
.app-container table{
  margin-top: 20px;
  width: 100%;
  border-collapse:collapse;
}
</style>

<script>

import axios from 'axios';

export default {
  data(){
    return {
    list:[]
    }
  },
  methods:{
    clickHanld(){
      this.$router.go(0)
    }
  },
  created(){
    axios.get('http://www.wayxuan.wang:1314/api/customer/cus')
    .then(res=>{
      console.log(res.data)
    return this.list =res.data
    console.log(list)
    })
  }
}
</script>
