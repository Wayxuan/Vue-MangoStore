<template>
    <div class="Allorder">
        <div class="inquire2">
    <span>已购买</span>
   
        </div>

        
         <div class="menu">
            <table>
                <tr class="the">
                    <th class="sptp">商品图片</th>
                    <th class="ddh">订单号</th>
                    <th class="spxq">商品详情</th>
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


<style>
@import '../../style/Allorder.css'; 
table{
    width: 100%;
    text-align: center;
    border: 1px solid #333;
    background: #fff;
    font-size: 12px;
    line-height: 30px;
    border-collapse: collapse;
    overflow: hidden;

}
table tr{
        border: 1px solid #333
}
.sptp{
    width: 140px;
}
.ddh{
    width: 100px;
}
.spxq{
    width: 340px;

    
}

.tbo img{
    width: 100px;
    margin: 0 auto
}
</style>
<script>
import axios from 'axios'
import { constants } from 'crypto';
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        const data = {
            userId:localStorage.getItem('token')
        };

        axios.post('http://www.wayxuan.wang:1314/api/order/pro',data)
        .then(res=>{
            console.log(res.data.data);
            
            return this.list=res.data.data;
            
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>