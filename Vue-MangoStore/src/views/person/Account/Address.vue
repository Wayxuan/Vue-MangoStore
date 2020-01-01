<template>
    <div class="Address">
        <div class="Address_h">
            收货地址
        </div>
        <div class="Address_wz">
            <span>已经保存的收获地址</span>
            <span>最多可创建<b>5</b>个</span>
        </div>
        <div class="newlys">
            <div class="newly">
                <p>收货人：{{list.name}}</p>
                <p>手机号码：{{list.tel}}</p>
                <p>所在地区：{{list.address}}</p>
            
            </div>
            <div class="newly">
                <router-link :to="{name:'Dizhi'}">
                新增地址
                </router-link>
            
            </div>
            
        </div>
        <router-view></router-view>
    </div>
</template>


<style scoped>
@import '../../style/Address.css'; 
</style>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            list:[],
        }
    },
    created(){
        const data={
            _id:localStorage.getItem('token')
        }
        axios.get('http://192.168.11.132:1314/api/customer',{params:data})
        .then(res=>{
            console.log(res.data)
            this.list=res.data;
        })
    }
}
</script>