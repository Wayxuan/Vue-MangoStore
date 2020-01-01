<template>
<div>
    <h1>修改信息</h1>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="昵称">
      <el-input v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="sizeForm.tel"></el-input>
    </el-form-item>
    <el-form-item label="默认地址">
      <el-select v-model="sizeForm.region" placeholder="选择地址">
        <el-option label="地址一" value="shanghai"></el-option>
        <el-option label="地址二" value="beijing"></el-option>
      </el-select>
    </el-form-item> 
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {
        name: "",
        tel:"",
        region: "",
        date1: "",
        date2: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
