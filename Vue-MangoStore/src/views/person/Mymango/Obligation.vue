<template>
  <div class="Allorder">
    <div class="inquire2">
      <span>全部订单</span>
      <select name="" class="menu">
        <option value="">订单状态</option>
        <option value="" selected>待付款</option>
        <option value="">代发货</option>
        <option value="">运送中</option>
        <option value="">已送达</option>
        <option value="">已关闭</option>
      </select>
    </div>

    <div class="menubox" v-show="isshow">
      <img src="../../../assets/mygeren/gouwudai2.png" alt="" style="width:160px;float:left;margin-left:200px;margin-top:80px">
      <h4>您的订单下还没有购买过的商品哦~</h4>
      <p style="margin-top:10px">快来选购自己心仪的商品吧~</p>
      <p>去<router-link :to="{ name: 'indexIndex' }">首页</router-link>看看</p>
    </div>
    <div class="menubox1" v-show="!isshow">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        @select="selectionChange"
        @select-all="selectAll"
      >
        <el-table-column type="selection" width="39"> </el-table-column>
        <el-table-column label="图片">
          <template slot-scope="scope">
            <img
              :src="scope.row.productImg"
              class="head_pic"
              width="100"
              height="100"
            />
          </template>
        </el-table-column>

        <el-table-column
          prop="productTitle"
          label="商品名"
          width="180"
        ></el-table-column>
        <el-table-column prop="productSize" label="型号"> </el-table-column>
        <!-- <el-table-column prop="productNum" label="数量"> </el-table-column> -->
        <el-table-column prop="productNum" label="数量（个）">
        </el-table-column>
        <!-- <el-table-column prop="productPrice" label="价格"> </el-table-column> -->
        <el-table-column prop="productPrice" label="价格（元）">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-input
        placeholder="总价格:"
        :disabled="true"
        class="zongjiage"
      ></el-input>
      <el-input
        placeholder="总价格:0元"
        v-model="count"
        :disabled="true"
        class="zongjiage"
      ></el-input>
      <el-button type="primary" class="jiesuan" @click="lijijiesuan"
        ><router-link to="">立即结算</router-link></el-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      count: 0,
      imgAll: [],
      zhunbeimai: [],
      isshow: true
    };
  },
  created() {
    const data = {
      userId: localStorage.getItem("token")
    };
    axios
      .get("http://www.wayxuan.wang:1314/api/cart/pro", {
        params: data
      })
      .then(res => {
        console.log(res);
        if (res.data.data.length == 0) {
          this.isshow = true;
        } else {
          this.isshow = false;
        }
        this.tableData = res.data.data;
        this.imgAll = [];
        for (let i = 0; i < this.tableData.length; i++) {
          this.imgAll.push(this.tableData[i].productImg);
        }
      });
  },
  methods: {
    handleDelete(index, row) {
      let othis = this;
      this.$confirm('此操作将删除该商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const userId = localStorage.getItem("token");
      const data = {
        userId: userId,
        proId: row._id
      };
      axios
        .delete("http://www.wayxuan.wang:1314/api/cart/pro", { params: data })
        .then(res => {
          const userId = localStorage.getItem("token");
          const data = {
            userId: localStorage.getItem("token")
          };
          axios
            .get("http://www.wayxuan.wang:1314/api/cart/pro", {
              params: data
            })
            .then(res => {
              if (res.data.data.length == 0) {
                this.isshow = true;
              } else {
                this.isshow = false;
              }
              console.log(res);
              this.tableData = res.data.data;
              console.log(this.tableData);
            });
        });
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        }); 
    },
    selectionChange(selection, row) {
      var shu = 0;
      this.zhunbeimai = selection;
      console.log(this.zhunbeimai);
      for (let i = 0; i < selection.length; i++) {
        shu += selection[i].productPrice;
      }
      this.count = shu;
    },
    selectAll(selection) {
      this.zhunbeimai = selection;
      console.log(this.zhunbeimai);
      var shu = 0;
      for (let i = 0; i < selection.length; i++) {
        shu += selection[i].productPrice;
      }
      this.count = shu;
    },
    lijijiesuan() {
      this.$confirm('是否立即购买勾选商品?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          for (let i = 0; i < this.zhunbeimai.length; i++) {
        let numxin = [];
        this.$axios.get("http://www.wayxuan.wang:1314/api/detail").then(res => {
          //console.log(res);
          for (let j = 0; j < res.data.length; j++) {
            if (res.data[j]._id == this.zhunbeimai[i].productId) {
              console.log(res.data[j]);
              for (let k = 0; k < res.data[j].Numb.length; k++) {
                if (this.zhunbeimai[i].productSize == res.data[j].sizeAll[k]) {
                  numxin = res.data[j].Numb;
                  var bb = Number(this.zhunbeimai[i].productNum);
                  numxin[k] -= bb;
                  var data = this.zhunbeimai[i];
                  console.log(data)
                  data.Numb = numxin;
                  console.log(data)
                  axios
                    .post("http://www.wayxuan.wang:1314/api/order/addO", data)
                    .then(res => {
                      console.log(res);
                      axios
                        .get("http://www.wayxuan.wang:1314/api/cart/pro", {
                          params: data
                        })
                        .then(res => {
                          if (res.data.data.length == 0) {
                            this.isshow = true;
                          } else {
                            this.isshow = false;
                          }
                          this.tableData = res.data.data;
                          this.imgAll = [];
                          for (let i = 0; i < this.tableData.length; i++) {
                            this.imgAll.push(this.tableData[i].productImg);
                          }
                        });
                    });
                }
              }
            }
          }
        });
      }
      this.count = 0;
          this.$message({
            type: 'success',
            message: '购买成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消购买'
          });          
        });

      
    }
  }
};
</script>

<style>
@import "../../style/Allorder.css";
</style>

<style scoped>
.zongjiage {
  width: 80px;
  float: left;
}
.jiesuan {
  float: right;
}
</style>
