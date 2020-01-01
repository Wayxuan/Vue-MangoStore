<template>
  <div>
    <div class="head-big">
      <div class="head">
        <img src="../assets/Mango-min.jpg" id="logo" alt="" />
      </div>
    </div>
    <div class="Part-middle clean">
      <div class="Part-middle-head clean">
        <div class="Part-middle-head1">
          <router-link :to="{ name: 'indexIndex' }">首页</router-link>
        </div>
        <div class="Part-middle-head2">
          >
        </div>
        <div class="Part-middle-head3">
          <a href="#">{{ list.name }}</a>
        </div>
        <div class="Part-middle-head4">
          >
        </div>
        <div class="Part-middle-head5">
          <a href="#">{{ list.title }}</a>
        </div>
      </div>
      <div class="Part-middle-xq">
        <div class="Part-middle-xq-left1">
          <img
            :src="item"
            v-for="(item, index) in imagesList"
            :key="index"
            class="xiaotu"
            @mouseenter="changeImage(index)"
          />
        </div>
        <div class="Part-middle-xq-left2">
          <div id="fangdajing-da-box">
            <pic-zoom :url="imgurl" :scale="2" id="fangdajing-da"></pic-zoom>
          </div>
        </div>
        <div class="Part-middle-xq-right clean">
          <div class="Part-middle-xq-right-title">
            {{ list.title }}
          </div>
          <div class="Part-middle-xq-right-price clean">
            <div class="Part-middle-xq-right-price1">
              ￥
            </div>
            <div class="Part-middle-xq-right-price2">
              {{ list.OriginPrice }}
            </div>
          </div>
          <div class="Part-middle-xq-right-size clean">
            <div class="Part-middle-xq-right-size1">
              尺码：
            </div>
            <div
              class="Part-middle-xq-right-size2"
              :class="activeClass == index ? 'active-size' : ''"
              v-for="(item, index) in list_sizeAll"
              :key="index"
              @click="getItem(index)"
            >
              {{ item }}
            </div>
          </div>
          <div class="Part-middle-xq-right-num clean">
            <div class="Part-middle-xq-right-num1">
              数量：
            </div>
            <div class="Part-middle-xq-right-num2" @click="sub">
              -
            </div>
            <div class="Part-middle-xq-right-num2">
              {{ count }}
            </div>
            <div class="Part-middle-xq-right-num2" @click="plus">
              +
            </div>
          </div>
          <div class="Part-middle-xq-right-kucun clean">
            <div class="Part-middle-xq-right-kucun1">
              剩余库存：
            </div>
            <div class="Part-middle-xq-right-kucun1">
              {{ kucun }}
            </div>
          </div>
          <div class="Part-middle-xq-right-btn">
            <div class="buttons">
              <div class="container">
                <router-link :to="{name:'Obligation'}" class="btn effect01"><span style="padding-left:50px">立即购买</span></router-link>
              </div>
            </div>
            <div class="buttons">
              <div class="container">
                <div class="btn effect01">
                  <span @click="jiarugouwuche" style="padding-left:40px"> 加入购物车</span>
                </div>
              </div>
            </div>
          </div>
          <div class="Part-middle-xq-right-collect" v-show="isshow">
            <el-tooltip
              class="item"
              effect="dark"
              content="点击收藏此物品"
              placement="top"
            >
              <el-button type="success" plain @click="shoucang">收藏</el-button>
            </el-tooltip>
          </div>
          <div class="Part-middle-xq-right-collect" v-show="!isshow">
            <el-tooltip
              class="item"
              effect="dark"
              content="点击取消收藏此物品"
              placement="top"
            >
              <el-button type="danger" plain @click="quxiaoshoucang"
                >已收藏</el-button
              >
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*引入css 样式文件*/
@import "../style/Shopping-style/Part.css";
</style>

<style scoped>
/*引入css 样式文件*/
@import "../assets/iconfont2/iconfont.css";
</style>

<script>
import PicZoom from "vue-piczoom";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      imgurl: require("../assets/mbsimg/jztp.jpg"),
      imagesList: [
        require("../assets/mbsimg/jztp.jpg"),
        require("../assets/mbsimg/jztp.jpg"),
        require("../assets/mbsimg/jztp.jpg"),
        require("../assets/mbsimg/jztp.jpg"),
        require("../assets/mbsimg/jztp.jpg")
      ],
      id: this.$route.query.id,
      list: [],
      list_sizeAll: [],
      count: 1,
      synumAll: [],
      activeClass: 0,
      kucun: 1,
      ceshi: [],
      isshow: true
    };
  },
  components: {
    PicZoom
  },
  methods: {
    changeImage: function(index) {
      this.imgurl = this.imagesList[index];
    },
    shoucang() {
      console.log(localStorage.getItem("token") == true);
      if (localStorage.getItem("token")) {
        console.log("aa");
        var data = {
          userId: localStorage.getItem("token"),
          productId: this.id
        };
        axios
          .post("http://www.wayxuan.wang:1314/api/fav/addF", data)
          .then(res => {
            console.log(res);
            this.isshow = false;
          })
          .catch(err => {
            console.log(err);
          });
      }else {
        this.$router.push({
          name: "login"
        });
      }
    },
    quxiaoshoucang() {
      console.log("bb");
      var data = {
        userId: localStorage.getItem("token"),
        productId: this.id
      };
      axios
        .delete("http://www.wayxuan.wang:1314/api/fav/del", { params: data })
        .then(res => {
          console.log(res);
          this.isshow = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    sub() {
      if (this.count > 0) {
        this.count--;
      } else {
        this.count = 0;
      }
    },
    plus() {
      if (this.count < this.kucun) {
        this.count++;
      } else {
        this.count = this.kucun;
      }
    },
    getItem(index) {
      this.activeClass = index;
      this.kucun = this.synumAll[index];
      if (this.count > this.kucun) {
        this.count = this.kucun;
      }
    },
    jiarugouwuche() {
       if (localStorage.getItem("token")) {
      const data1 = {
        userId: localStorage.getItem("token")
      };
      let gouwuche = [];
      axios
        .get("http://www.wayxuan.wang:1314/api/cart/pro", {
          params: data1
        })
        .then(res => {
          gouwuche = res.data.data;
          console.log("aa");
          console.log(gouwuche);
          console.log("aa");
          panduan();
        });
      const othis = this;
      function panduan() {
        for (let i = 0; i < gouwuche.length; i++) {
          if (
            gouwuche[i].productId == othis.id &&
            gouwuche[i].productSize == othis.list_sizeAll[othis.activeClass]
          ) {
            return chongfu(i);
          }
        }
        return buchongfu();
      }

      function chongfu(i) {
        if (gouwuche[i].productNum + othis.count > othis.kucun) {
          return othis.$message("库存不足");
        }
        let data = {
          _id: gouwuche[i]._id,
          userId: gouwuche[i].userId,
          productId: gouwuche[i].productId,
          productSize: gouwuche[i].productSize,
          productNum: (gouwuche[i].productNum += othis.count),
          productPrice: othis.list.OriginPrice * gouwuche[i].productNum,
          address: "河南省"
        };
        axios.put("http://www.wayxuan.wang:1314/api/cart/Pro", data).then(res => {
          console.log("重复已存");
          othis.$message("已添加购物车");
        });
      }

      function buchongfu() {
        const data = {
          userId: localStorage.getItem("token"),
          productId: othis.id,
          productImg: othis.imagesList[0],
          productSize: othis.list_sizeAll[othis.activeClass],
          productNum: othis.count,
          productPrice: othis.list.OriginPrice * othis.count,
          productTitle: othis.list.title,
          address: "河南"
        };
        axios
          .post("http://www.wayxuan.wang:1314/api/cart/addPro", data)
          .then(res => {
            console.log("不重复，已存");
            othis.$message("已添加购物车");
          });
      }
       } else {
        this.$router.push({
          name: "login"
        });
      }
    }
  },
  created() {
    console.log(this.id)
    this.$axios.get("http://www.wayxuan.wang:1314/api/detail").then(res => {
      //console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i]._id == this.id) {
          this.list = res.data[i];
          console.log("aa");
          console.log(this.list);
          console.log("aa");
        }
      }
      this.imagesList = this.list.imgUrlall;
      this.imgurl = this.imagesList[0];

      for (let i = 0; i < this.list.sizeAll.length; i++) {
        if (this.list.sizeAll[i] != undefined) {
          this.list_sizeAll.push(this.list.sizeAll[i]);
          this.synumAll.push(this.list.Numb[i]);
        }
      }
      this.kucun = this.synumAll[0];

      var data = {
        userId: localStorage.getItem("token")
      };
      axios
        .get("http://www.wayxuan.wang:1314/api/fav/pro",{params:data})
        .then(res => {
          console.log("bb")
          console.log(res);
          for(let i = 0;i<res.data.length;i++){
            if(res.data[i].productId._id==this.id){
              this.isshow=false
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    });
     
  }
};
</script>~
