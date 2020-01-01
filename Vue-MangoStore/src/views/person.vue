<template>
<div class="person">
    <div class="person_header">
        <div class="person_countbj">
        <div class="person_count" style="margin-top:20px">
        <h1><a href=""><img src="../assets/Mango-min.png" alt=""></a></h1>
        <div class="com">
            <p class="p1"><span>用</span><span>户</span><span>中</span><span>心</span></p>
            <p>MANGGUO.COM</p>
        </div>
        
        </div>
        </div>
        <div class="navbj">

        <div class="nav">
            <router-link @click.native="onMy" class="ys" id="nav_my" :to="{name:'Mydd'}">我的芒果</router-link>
            <router-link @click.native="onMy" class="ys" id="nav_ac" :to="{name:'Basics'}">账号设置</router-link>
            <router-link @click.native="onMy" class="ys" id="nav_ad" :to="{name:'Advices'}">消息中心</router-link>
        </div>
        </div>
    <router-view></router-view>
    </div>  
    </div>
</template>

<style>

@import './style/person.css'; 
</style>
<script>

export default {
    methods:{
        onMy(event){
            var oYs=document.getElementsByClassName('ys');
            for(let i=0;i<oYs.length;i++){
                oYs[i].style.background='#fff';
                oYs[i].style.color='#333'
            };
            event.target.style.background='#333';
            event.target.style.color='#fff'
        }
    }
}
</script>