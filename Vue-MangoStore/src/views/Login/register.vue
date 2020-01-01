<template>
  <div class="register">
    <h2 style="margin-top:30px"></h2>
    <el-steps :active="active" finish-status="success" align-center>
      <!-- <el-step title="阅读注册协议" description="Read The Agreement"></el-step> -->
      <el-step
        title="新用户注册"
        description="Account Password"
        icon="el-icon-s-custom"
      ></el-step>
      <!--    <el-step title="安全验证" description="Security Code"></el-step>
      <el-step title="注册完成" description="Finish Register"></el-step> -->
    </el-steps>

    <div id="Box" class="demo-input-suffix" v-show="b2">
      <el-input
        style="width:350px;margin:5px auto;"
        placeholder="只能使用数字字母下划线，且不能以数字开头，长度在6-15之间"
        suffix-icon="el-icon-user"
        v-model="user.userName"
        @blur="username"
        @input="log1"
      >
      </el-input>
      <span style="margin-left:340px">{{ zhengz1 }}</span>

     
      <el-input
        type="password"
        style="width:350px;margin:5px auto;"
        placeholder="长度为3-20"
        suffix-icon="el-icon-lock"
        v-model="user.password"
        @blur="password"
        @input="log2"
      ></el-input>
      <span style="margin-left:340px">{{ zhengz2 }}</span>
   
      <el-input
        style="width:350px;margin:5px auto;"
        v-model="user.tel"
        @blur="didi"
        placeholder="请输入电话"
        @input="log3"
        suffix-icon="el-icon-connection"
      ></el-input>
      <span style="margin-left:340px">{{ zhengz3 }}</span>

     
      <el-input
        style="width:350px;margin:5px auto;"
        v-model="user.address"
        placeholder="请输入地址"
        @blur="diz"
        @input="log4"
        suffix-icon="el-icon-truck"
      ></el-input>
      <span style="margin-left:340px">{{ zhengz4 }}</span>
 <el-button id="reg" style="margin-top: 12px;" @click="registerHandle"
      ><span style="margin-left:35px">同意并继续</span></el-button
    >
    
    </div>
   <!--  <div id="Box1" v-show="b1">
      <h2>我们不卖芒果，我们是一家服装商城</h2>
    </div>
    <div id="Box2" v-show="b3">
      <h2>这是一个验证</h2>
    </div> -->
    <!-- <div id="Box3" v-show="b4">
      <h2 style="font-size:20px;color:green;font-weight:1000">注册成功  √</h2>
</div> -->

   
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      active: 0,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      zhengz1: "",
      zhengz2: "",
      zhengz3: "",
      zhengz4: "",
      user: {
        userName: "",
        password: "",
        tel: "",
        address: ""
      },
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flags: false,
      flags2: false,
      flags3: false,
      flags4: false,
      b1: false,
      b2: true,
      b3: false,
      b4: false,
      
    };
  },
  methods: {
    username() {
      var reg = /^[a-zA-Z_]\w{5,14}$/;
      if (reg.test(this.user.userName)) {
        this.flags = true;
        this.zhengz1 = "账号可用！";
      } else {
        this.zhengz1 = "请输入正确格式";
      }
    },
    password() {
      var reg = /^.{3,20}$/;
      if (reg.test(this.user.password)) {
        this.flags2 = true;
        this.zhengz2 = "密码格式正确！";
      } else {
        this.zhengz2 = "请输入正确格式";
      }
    },
    didi() {
      var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
      if (reg.test(this.user.tel)) {
      this.flags3 = true;
        this.zhengz3 = "手机可用！";
      } else {
        this.zhengz3 = "手机格式错误";
      }
    },
    diz() {
      if (this.user.address == null || this.user.address == "") {
        this.zhengz4 = "请输入地址";
      } else {
        this.flags4 = true;
        this.zhengz4 = "";
      }
    },
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
    log3() {
      if (this.user.tel == "") {
        this.flag3 = false;
      } else {
        this.flag3 = true;
      }
    },
    disa3() {
      (this.user.tel = ""), (this.flag3 = false);
    },
    log4() {
      if (this.user.address == "") {
        this.flag4 = false;
      } else {
        this.flag4 = true;
      }
    },
    disa4() {
      (this.user.address = ""), (this.flag4 = false);
    },
    registerHandle() {
      console.log(this.flags,this.flags2,this.flags3,this.flags4)
      if (this.flags == true && this.flags2 == true && this.flags3 == true && this.flags4 == true) {
        if (this.active++ > 0) this.$router.push({ path: "Login" });
        const data = {
          name: this.user.userName,
          password: this.user.password,
          tel: this.user.tel,
          address: this.user.address
        };
        axios
          .post("http://www.wayxuan.wang:1314/api/customer/add", data)
          .then(res => {
            console.log(data);
            console.log(res);
            if (res.data.code == "1") {
              alert("注册成功");
              this.$router.push({ path: "Login" });
            } else {
              this.count = "请检查用户名或密码";
            }
          });
      }else{
        alert('格式错误，注册失败')
      }
    }
  }
};
</script>

<style scoped>
/*引入css 样式文件*/
@import "../../style/sty/register.css";
</style>
