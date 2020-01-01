<template>
  <div id="page">
    <!-- 头部导航 -->
    <div style="height:30px"></div>
    <div class="nav_waitao">
      <div id="nav">
        <div style="flex:1"></div>
        <router-link :to="{name:'indexIndex'}">首页</router-link>
        <router-link :to="{name:'login'}" v-show="!login">登录</router-link>
        <a @click="tuiChuClick" v-show="login" href="#">退出</a>

        <router-link :to="{name:'Mydd'}" style="color:pink" v-show="login">欢迎您：{{userName}}</router-link>

        <router-link :to="{name:'register'}" v-show="!login">免费注册</router-link>
        <span class="fenGe">|</span>
        <router-link :to="{name:'Mydd'}">我的订单</router-link>
        <div style="display: flex;">
          <i class="iconfont icon-xiexiangbao"></i>
          <router-link class="carts" :to="{name:'Obligation'}">购物袋</router-link>
        </div>
        <span class="fenGe">|</span>
        <a href="localhost:9528/">商家中心</a>
      </div>
    </div>
    <div class="border1px"></div>
    <!-- <index></index> -->
    <!-- 主体内容 -->
    <router-view></router-view>
    <!-- 尾部信息 -->
    <footers></footers>
  </div>
</template>
<script>
import footers from "./components/footer.vue";
import index from "./views/index.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      indexAdemin: "登录",
      tuiChu: ""
    };
  },
  name: "app",
  components: {
    footers
  },
  computed: {
    ...mapState(["login", "userName"])
  },
  created() {
    // 取token值++++++++++++++++==
    let indexToken = localStorage.getItem("token");
    if (indexToken) {
      this.indexAdemin = indexToken;
      this.tuiChu = true;
    } else {
      this.tuiChu = false;
    }
  },
  methods: {
    tuiChuClick() {
      if (confirm("确认退出")) {
        localStorage.removeItem("token");
        const user = {
          userName: "",
          userLogin: false
        };

        this.$store.commit("login", user);
      }
    }
  }
};
</script>


<style scoped>
/* 以下是页头NAV */
.nav_waitao {
  width: 100%;
  background: #000;
  position: fixed;
  z-index: 55;
  top: 0;
}
#nav {
  height: 30px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  font-size: 12px;
  line-height: 30px;
}
#nav a {
  margin: 0 10px;
  color: #fff;
}
#nav a:hover {
  color: pink;
}
#nav .carts {
  margin-left: 0;
}
#nav .iconfont {
  margin-left: 20px;
  margin-right: 5px;
  color: #fff;
  font-size: 20px;
}
#navPreductCount {
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 18px;
  color: #fff;
  margin: 5px;
}
.border1px {
  width: 100%;
  height: 1px;
  background: black;
}
#nav .fenGe {
  color: #666;
  margin: 0 5px;
}
</style>

