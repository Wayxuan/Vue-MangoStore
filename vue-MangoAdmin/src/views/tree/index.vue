<template>
  <div class="app-container">
  <table>
    <thead>
      <tr>
      <th>序号</th>
        <th>地址</th>
        <th>价格</th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="(p,i) in people" :key="i">
        <td>
          {{i+1}}
        </td>
        <td>
          <span>{{p.address}}</span>
        </td>
        <td>
          <input v-show="p.isshow" v-model="p.prices">
          <span>{{p.prices}}</span>
        </td>
        <button @click="p.isshow=!p.isshow" v-show="!p.isshow">修改</button>
        <button @click="p.isshow=!p.isshow" v-show="p.isshow">完成</button>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<style scoped>
.app-container th{
  text-align: center
}
.app-container table{
  border-collapse:collapse;
  width: 100%
}
.app-container tbody tr{
  border: 1px solid #333;
}

.app-container td{
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.app-container  tbody tr:nth-child(even){
  background: #ebebeb
}
.app-container button{

  background:#333;
  color:#fff;
  border: 0;
  font-size: 12px;
  margin-top:10px;
  width: 40px;
  height: 24px;
}
</style>
<script>

export default {
    data() {

      return {
        people: [{
          prices: 9.9,
          address: '北京',
          isshow:false
        }, {
          prices: 9.9,
          address: '天津',
          isshow:false
        }, {
          prices: 9.9,
          address: '上海',
          isshow:false
        }, {
          prices: 9.9,
          address: '重庆',
          isshow:false
        }, {
          prices: 9.9,
          address: '河北',
          isshow:false
        }, {
          prices: 9.9,
          address: '山西',
          isshow:false
        }, {
          prices: 9.9,
          address: '辽宁',
          isshow:false
        }, {
          prices: 9.9,
          address: '吉林',
          isshow:false
        }, {
          prices: 9.9,
          address: '黑龙江',
          isshow:false
        }, {
          prices: 9.9,
          address: '江苏',
          isshow:false
        }, {
          prices: 9.9,
          address: '浙江',
          isshow:false
        }, {
          prices: 9.9,
          address: '安徽',
          isshow:false
        }, {
          prices: 9.9,
          address: '福建',
          isshow:false
        }, {
          prices: 9.9,
          address: '江西',
          isshow:false
        }, {
          prices: 9.9,
          address: '山东',
          isshow:false
        }, {
          prices: 9.9,
          address: '河南',
          isshow:false
        }, {
          prices: 9.9,
          address: '湖北',
          isshow:false
        }, {
          prices: 9.9,
          address: '湖南',
          isshow:false
        }, {
          prices: 9.9,
          address: '广东',
          isshow:false
        }, {
          prices: 9.9,
          address: '海南',
          isshow:false
        }, {
          prices: 9.9,
          address: '四川',
          isshow:false
        }, {
          prices: 9.9,
          address: '贵州',
          isshow:false
        }, {
          prices: 9.9,
          address: '云南',
          isshow:false
        }, {
          prices: 9.9,
          address: '陕西',
          isshow:false
        }, {
          prices: 9.9,
          address: '甘肃',
          isshow:false
        }, {
          prices: 9.9,
          address: '青海',
          isshow:false
        }, {
          prices: '中间有海，不邮',
          address: '台湾',
          isshow:false
        }, {
          prices: '太远,不邮',
          address: '内蒙古',
          isshow:false
        }, {
          prices: '不邮',
          address: '广西',
          isshow:false
        }, {
          prices: '不邮',
          address: '西藏',
          isshow:false
        }, {
          prices: 9.9,
          address: '宁夏',
          isshow:false
        }, {
          prices: '太远，不邮',
          address: '新疆',
          isshow:false
        }, {
          prices: 9.9,
          address: '香港',
          isshow:false
        }, {
          prices: 9.9,
          address: '澳门',
          isshow:false
        }
        ]
}
}
}
</script>

