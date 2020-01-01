<template>
    <div class="Basics">
        <div class="Basics_header">
            基本资料
        </div>
        <div class="Basics_count">
            <div class="sctx" style="overflow:hidden">
                           <img src="../../../assets/miao.png" alt="" style='width:100%'>

            </div>
            <div class="jbxx">
                <div>
                </div>
                <p>用户名：{{list.name}}</p>
                <p>地址：{{list.address}}
                    
                </p>
                <p>手机：{{list.tel}}
                </p>
                <button class="tjiao" type="button">确定</button>
            </div>
        
            
        </div>
    </div>
</template>

<style scoped>
@import '../../style/Basics.css'; 
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
        const data = {
            _id:localStorage.getItem('token')
        };
        axios.get('http://www.wayxuan.wang:1314/api/customer',{params:data})
        .then(res=>{
            console.log(res.data)
            this.list=res.data;
        })
    }
}
</script>