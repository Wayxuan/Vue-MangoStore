<template>
  <div class="loginPage">
    <div class="aaicon">
      <el-steps  finish-status="success" align-center>
        <el-step title="用户登录" icon="el-icon-user-solid"></el-step>
      </el-steps>
    </div>

    <div class="loginbox">
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
  background: #fff;
}

.loginbox h1 {
  letter-spacing: 10px;
  font-weight: 600;
  color: #333;
  font-family: -apple-system, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif;
}
.aaicon {
  margin: 70px auto 0;
  color: black;
}
.loginbox {
  text-align: center;
  width: 295px;
  margin: 30px auto;
  padding: 40px 200px;
  border-radius: 8px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 15px #999;
}
/* .loginbox:hover {
  box-shadow: 0px 0px 50px 15px black;
  transition: box-shadow 0.5s;
  -webkit-transition: box-shadow 0.5s;
  -moz-transition: box-shadow 0.5s;
  -ms-transition: box-shadow 0.5s;
  -o-transition: box-shadow 0.5s;
} */
.loginbox ul li:nth-child(1) input {
  width: 280px;
  height: 35px;
  letter-spacing: 2px;
  border-color: #757575;
  padding-left: 10px;
  margin-top: 10px;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 0 5px #999;
}
.loginbox ul li:nth-child(2) input {
  letter-spacing: 2px;
  width: 280px;
  height: 35px;
  margin-top: 25px;
  border-color: #757575;
  padding-left: 10px;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 0 5px #999;
}
.loginbox ul li div {
  line-height: 34px;
  width: 293px;
  height: 34px;
  margin: 30px auto;
  border: none;
  color: #757575;
  border-radius: 3px;
  letter-spacing: 4px;
  font-size: 16px;
  font-weight: 550;
  border: 0;
  box-shadow: 0 0 5px #999;
}
.loginbox ul li div:hover {
  box-shadow: 0px 0px 10px 10px #999;
  transition: box-shadow 0.6s;
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
          console.log(res.data.code);

          if (res.data.code == "1") {
            const user = {
              userName: data.name,
              userLogin: true
            };
            localStorage.setItem("token", res.data._id);
            this.$store.commit("login", user);

            this.$router.push({ name: "indexIndex" });
          } else {
           alert('用户名或密码错误')
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