<template>
    <div class="Advices">
        <div class="left">
            <ul>
                <li class="dingdan">消息中心</li>
                <li class="dingdan2"><router-link :to="{name:'Winmsd'}">系统消息</router-link></li>
                <li></li>
            </ul>
        </div>

        <div class="right">
        
            <router-view></router-view>
        </div>
    </div>
</template>
<style scoped>
body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend{margin:0; padding:0;}
ul,li,ol{list-style:none;}
img,fieldset{border:0; } 
img{display:block;}
a{text-decoration:none; color:#333;}
h1,h2,h3,h4,h5,h6{font-weight:normal;}
body{ font-family:"微软雅黑";font-size:12px;}
input,a{outline:none;}
.Advices{
    width:1200px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 20px
}


</style>