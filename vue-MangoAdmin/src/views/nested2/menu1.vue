<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="title" label="商品名称" width="480"></el-table-column>
      <el-table-column prop="OriginPrice" label="商品价格" width="150"></el-table-column>

      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.imgUrlall[0]" />
          <img :src="scope.row.imgUrlall[1]" />
          <img :src="scope.row.imgUrlall[2]" />
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="chenge(scope.row._id)">修改</el-button>
          <el-button size="small" type="danger" @click="remove(scope.row._id,scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import procuctList from "../../api/products";
import { filter } from "minimatch";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    axios
      .get("http://www.wayxuan.wang:1314/api/detail")
      .then(res => {
        // console.log(res.data);
        this.list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    remove(id, index) {
      //删除====

      if (confirm("确认删除")) {
        axios
          .post("http://www.wayxuan.wang:1314/api/crud", { id: id })
          .then(res => {
            console.log(res);
            this.list.splice(index, 1);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    chenge(id) {
      //点击修改按钮转跳到修改页
      this.$router.push({ name: "chenge", query: { id } });
    }
  }
};
</script>
<style scoped>
img {
  height: 50px;
}
</style>
