<template>
    <div class="Mymango">
        <div class="left">
            <ul>
                <li class="dingdan"><router-link :to="{name:'Mydd'}">我的订单</router-link></li>

                <li class="dingdan2"><router-link :to="{name:'Obligation'}">购物车</router-link></li>
                <li class="dingdan2"><router-link :to="{name:'Intransit'}">已购买</router-link></li>
                <li class="dingdan" style="margin-top:10px"><router-link :to="{name:'Residue'}">我的余额</router-link></li>
                <li class="dingdan"><router-link :to="{name:'Collect'}">我的收藏</router-link></li>
                <li></li>
            </ul>
        </div>

        <div class="right">
        
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
@import '../style/Mymango.css'; 
</style>
