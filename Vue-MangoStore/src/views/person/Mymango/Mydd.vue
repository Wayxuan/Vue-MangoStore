<template>
    <div class="Mydd">
        <div class="Mydd_header">
            <div class="Mydd_headerl">
                <img src="../../../assets/miao.png" alt="">
                <h3><span>Hi~</span><b>{{liss.name}}</b> </h3>
              
            </div>

            <div class="Mydd_headerr">
                <div class="jif1">
                    <span>我的积分：0</span>
                </div>
                <div class="jif2">
                    <span>我的优惠券：0  </span>               </div>
                <div class="jif3">
                    <span><router-link :to="{name:'Basics'}">基本资料</router-link></span>
                </div>
                <div class="jif4">
                    <span><router-link :to="{name:'Address'}">收货地址</router-link></span>
                </div>

            </div>
        </div>
<div class="inquire">
    <span>全部订单</span>
    
        </div>

        <div class="menubox">
        <table>
                <tr class="the">
                    <th class="sptp">商品图片</th>
                    <th class="ddh">订单号</th>
                    <th class="spxq" style="width:200px;">商品详情</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>尺寸</th>
                </tr>
                <tr class="tbo" v-for="(item,index) in list" :key="index">
                    <td><img :src="item.productImg" /></td>
                    <td>{{item._id}}</td>
                    <td>{{item.productTitle}}</td>
                    <td>{{item.productPrice}}</td>
                    <td>{{item.productNum}}</td>
                    <td>{{item.productSize}}</td>
                </tr>
            </table>
            
        </div>

    </div>
    
</template>



<style scoped>
@import '../../style/Mydd.css'; 
</style>
<script>
import axios from 'axios'
import { constants } from 'crypto';
export default {
    data(){
        return {
            list:[],
            liss:[]
        }
    },
    created(){
        const data = {
            _id:localStorage.getItem('token')
        };
        const dat={
            userId:localStorage.getItem('token')
        }
        console.log(localStorage.getItem('token'))

        axios.post('http://www.wayxuan.wang:1314/api/order/pro',dat)
        .then(res=>{
            console.log(res);
            return this.list=res.data.data;
        }).catch(err=>{
            console.log(err)
        })
       

        axios.get('http://www.wayxuan.wang:1314/api/customer',{params:data})
        .then(res=>{
            console.log(res)
            return this.liss=res.data;
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>