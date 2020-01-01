<template>
    <div class="Account">
        <div class="left">
<ul>
                <li class="dingdan">账号设置</li>
                <li class="dingdan2"><router-link :to="{name:'Basics'}">基本资料</router-link></li>
                <li class="dingdan2"><router-link :to="{name:'Address'}">收货地址</router-link></li>
                <li class="dingdan2"><router-link :to="{name:'Security'}">安全中心</router-link></li>
                <li style="border:none"></li>
            </ul>
        </div>

        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>