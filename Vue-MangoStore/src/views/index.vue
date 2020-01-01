<template>
  <div @click="bodyshow">
    <!-- 主页右侧边栏 -->
    <div id="indexRightNav"  v-show="flagg">
      <div class="wodedangxuan">
        <router-link :to="{name:'Mydd'}">
          <i class="iconfont icon-wodedangxuan"></i>
        </router-link>
        <div class="opacity-wode">个人中心</div>
      </div>
      <div class="rightBorder">
        <div class="rightBorder2">
          <i class="iconfont icon-5gouwudai2"></i>
          <p class="right-gouWuDai">购物袋</p>
        </div>
      </div>
      <div class="bqxin">
        <router-link :to="{name:'Collect'}">
          <i class="iconfont icon-bqxin"></i>
        </router-link>
        <div class="opacity-bqxin">我的收藏</div>
      </div>
      <!-- 二维码 -->
      <div class="erweima">
        <i class="iconfont icon-erweima"></i>
        <div class="hover-erweima2">
          <img src="../assets/indexImg/logoma.png" alt />
          <p>随时购 及时抢</p>
        </div>
      </div>
      <!-- 跟随高多变化的2个font -->
      <div class="ziShiYing"  >
        <div class="icon-pencil"  @click="changee">
          <i class="iconfont icon-icon-pencil"></i>
        </div>
        <div @click="backTop()" class="tubiaozhizuo">
          <i class="iconfont icon-tubiaozhizuo-"></i>
          <div class="opacity-tubiaozhizuo">回到顶部</div>
        </div>
      </div>
    </div>
    <!-- 主页右侧边栏 -->
    <!-- ============================================= -->

    <div class="index_logo-waitao">
      <div class="index_logo">
        <img class="m_logo" src="../assets/indexImg/m.jpg" alt  @click="change"/>
        <ul id="index_nav">
          <router-link :to="{name:'indexIndex'}">
            <li :class="activeClass == 0? 'liStyle':''" @click="activeClass=0">
              <h4>首页</h4>
            </li>
          </router-link>
          <router-link :to="{name:'nanXie'}">
            <li :class="activeClass == 1 ? 'liStyle':''" @click="nanxie">
              <h4>男鞋</h4>
            </li>
          </router-link>
          <router-link :to="{name:'nvXie'}">
            <li :class="activeClass == 2 ? 'liStyle':''" @click="nvXie">
              <h4>女鞋</h4>
            </li>
          </router-link>
          <router-link :to="{name:'yunDong'}">
            <li :class="activeClass == 3 ? 'liStyle':''" @click="yunDong">
              <h4>运动</h4>
            </li>
          </router-link>
          <router-link :to="{name:'children'}">
            <li :class="activeClass == 4 ? 'liStyle':''" @click="childer">
              <h4>儿童</h4>
            </li>
          </router-link>
          <router-link :to="{name:'xiangBao'}">
            <li :class="activeClass == 5 ? 'liStyle':''" @click="xiangBao">
              <h4>箱包</h4>
            </li>
          </router-link>
        </ul>
        <p id="ppp">PRADA FOR ADIDAS</p>
        <div class="kong"></div>
        <div class="input_logo">
          <input type="text" placeholder="请输入想找的宝贝" v-model="keyword" @keyup="keyup"/>
          <div class="dangDaJing" @click="sreach">
            <i class="iconfont icon-fangdajing"></i>
          </div>
          <!-- 搜索提示 -->
          <ul class="sousuo" v-show="showToggle">
            <li v-for="(item) in filterPeoPle" :key="item._id">{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- ========= -->

    <!-- <div class="ul_list">
      <router-link :to="{name:'indexIndex'}">首页</router-link>
      <router-link :to="{name:'Hot'}">品质推荐</router-link>
    </div>-->

    <!-- ======= -->
    <router-view></router-view>
  </div>
</template>
<script>
import search from "../components/indexSearch.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: {
    search
  },
  data() {
    return {
      activeClass: "",
      showToggle: false,
      keyword: "", //搜索关键词
      agentlisttwo: [],
       flagg: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  created() {
    this.loadData();
    //   get请求----------
    this.$axios
      .get("http://www.wayxuan.wang:1314/api/detail")
      .then(res => {
        this.agentlisttwo = res.data;
        // console.log(this.agentlisttwo)
      })
      .catch(err => {
        console.log(err);
      });
  },

  computed: {
    ...mapState(["sreachProducts"]),
    filterPeoPle() {
      if (this.keyword) {
        return this.agentlisttwo.filter(
          item => item.title.indexOf(this.keyword) > -1
        );
      }
    }
  },
  methods: {
    ...mapMutations([
      "add",
      "nanxie",
      "nvXie",
      "childer",
      "yunDong",
      "xiangBao",
      "changee",
      "change"
    ]),
    ...mapActions(["loadData"]),
    sreach() {
      //搜索------------
      if (this.$route.path == "/search") {
        this.$store.commit("sreach", this.keyword);
        console.log(this.sreachProducts);
      } else {
        this.$store.commit("sreach", this.keyword);
        this.$router.push({ path: "/search" });
      }
    },
     keyup(e) {
      if (e.keyCode == 13) {
        if (this.$route.path == "/search") {
          this.$store.commit("sreach", this.keyword);
          console.log(this.sreachProducts);
        } else {
          this.$store.commit("sreach", this.keyword);
          this.$router.push({ path: "/search" });
        }
      }
    },
    nanxie() {
      this.activeClass = 1;
      this.$store.commit("nanxie");
    },
    nvXie() {
      this.activeClass = 2;
      this.$store.commit("nvXie");
    },
    yunDong() {
      this.activeClass = 3;
      this.$store.commit("yunDong");
    },
    childer() {
      this.activeClass = 4;
      this.$store.commit("childer");
    },
    xiangBao() {
      this.activeClass = 5;
      this.$store.commit("xiangBao");
    },
    change(){
      this.flagg=true
    },
    changee(){
      this.flagg=false
    },

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++

    bodyshow(e) {
      //判断input点击时事件源
      if (e.target.nodeName == "LI") {
        this.keyword = e.target.innerText;
        this.showToggle = false;
      } else if (e.target.nodeName == "INPUT") {
        this.showToggle = true;
      } else {
        this.showToggle = false;
      }
    },
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // 点击回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 1600) {
        this.flagg=true;
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>
<style scoped>
.input_logo {
  position: relative;
}
.sousuo {
  position: absolute;
  width: 260px;
  background: #fff;
  top: 35px;
  z-index: 50;
}
.sousuo li {
  width: 240px;
  height: 35px;
  background: #efefef;
  line-height: 35px;
  margin-top: 2px;
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sousuo li:hover {
  background: #fff;
}
</style>
