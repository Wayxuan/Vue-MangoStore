<template>
  <div class="loginPage">
    <div class="loginbox">
      <h1>登录</h1>
      <ul>
        <li>
          <input type="text" v-model="user.userName" placeholder="请输入用户名" @input="log1" />
        </li>
        <li>
          <input type="password" v-model="user.password" placeholder="请输入密码" @input="log2" />
        </li>
        <li>
          <div @click="loginHandle">立即登录</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.loginPage h4 {
  font-size: 24px;
}
.loginPage {
  background: black;
}

.loginbox h1 {
  letter-spacing: 10px;
  font-weight: 600;
  color: #333;
  font-family: -apple-system, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif;
}

.loginbox {
  text-align: center;
  width: 295px;
  margin: 130px auto;
  padding: 40px 80px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  box-shadow: 0 0 20px #fff;
}
.loginbox:hover {
  box-shadow: 0px 0px 50px 15px rgba(255, 255, 255, 1);
  transition: box-shadow 0.5s;
  -webkit-transition: box-shadow 0.5s;
  -moz-transition: box-shadow 0.5s;
  -ms-transition: box-shadow 0.5s;
  -o-transition: box-shadow 0.5s;
}
.loginbox ul li:nth-child(1) input {
  width: 280px;
  height: 30px;
  letter-spacing: 2px;
  border-color: #757575;
  padding-left: 10px;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.6);
}
.loginbox ul li:nth-child(2) input {
  letter-spacing: 2px;
  width: 280px;
  height: 30px;
  margin-top: 20px;
  border-color: #757575;
  padding-left: 10px;
  background: rgba(255, 255, 255, 0.6);
}
.loginbox ul li div {
  line-height: 34px;
  width: 293px;
  height: 34px;
  margin: 20px auto;
  border: none;
  background: #333;
  color: #757575;
  letter-spacing: 4px;
  font-size: 16px;
  font-weight: 550;
  border: 0;
}
.loginbox ul li div:active {
  /* background: rgba(255, 255, 255, 0.6); */
  /* color: black */
}
.loginbox ul li div:hover {
  cursor: pointer;
  background: white;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        userName: "",
        password: ""
      },
      flag1: false,
      flag2: false
    };
  },
  methods: {
    log1() {
      if (this.user.userName == "") {
        this.flag1 = false;
      } else {
        this.flag1 = true;
      }
    },
    disa1() {
      (this.user.userName = ""), (this.flag1 = false);
    },
    log2() {
      if (this.user.password == "") {
        this.flag2 = false;
      } else {
        this.flag2 = true;
      }
    },
    disa2() {
      (this.user.password = ""), (this.flag2 = false);
    },
    loginHandle() {
      const data = {
        name: this.user.userName,
        password: this.user.password
      };
      axios
        .post("http://www.wayxuan.wang:1314/api/customer/login", data)
        .then(res => {
          console.log(data);
          console.log(res);
          if (res.data.code == "1") {
            const user ={
                userName: data.name,
                userLogin:true
            }
            localStorage.setItem("token", res.data._id);
            this.$store.commit("login", user);
            this.$router.push({ name: "indexIndex" });
          } else {
            this.count = "请检查用户名或密码";
          }
        });
    }
  }
};
</script>
<style scoped>
/*引入css 样式文件*/
@import "../../style/sty/login.css";
</style>