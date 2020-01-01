<template>
  <div class="app-container">
    <el-form ref="ruleForm" :model="product" :rules="rules" label-width="80px">
      <el-form-item label="名称" prop="title">
        <el-input v-model="product.title"></el-input>
      </el-form-item>

      <el-form-item label="分类" prop="name">
        <el-input v-model="product.name"></el-input>
      </el-form-item>

      <el-form-item label="价格" prop="OriginPrice">
        <el-input type="number" v-model="product.OriginPrice"></el-input>
      </el-form-item>

      <el-form-item label="数量" prop="Number">
        <el-input type="text" v-model="product.Numb[0]"></el-input>
      </el-form-item>

      <el-form-item label="尺码" prop="Number">
        <el-input type="text" v-model="product.sizeAll[0]"></el-input>
      </el-form-item>

      <!--图片======== -->
      <el-form-item label="主图图片" prop="imgUrl">
        <el-upload
          name="avatar"
          :file-list="fileList"
          action="http://192.168.11.132:1314/upload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-success="handleAvatarSuccess"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <!-- =================== -->

      <!-- 图片============ -->
      <el-form-item label="缩略图片" prop="imgUrlall">
        <el-upload
          name="avatar"
          :file-list="fileList2"
          action="http://www.wayxuan.wang:1314/upload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-success="handleAvatarSuccess2"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立刻修改</el-button>
        <el-button @click="resetForm">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      product: {
        title: "",
        name: "",
        OriginPrice: "",
        Numb: "",
        sizeAll: "",
        imgUrl: "",
        imgUrlall: []
      },
      dialogImageUrl: "",
      dialogImageUrl2: "",
      fileList: [],
      fileList2: [],
      dialogVisible: false,
      rules: {
        title: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, message: "长度在3个字符以上" }
        ],
        name: [
          { required: true, message: "请输入商品分类", trigger: "blur" },
          { min: 2, message: "长度在2个字符以上" }
        ],
        OriginPrice: [
          { required: true, message: "请输入商品价格", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    (this.id = this.$route.query.id), console.log(this.id);
    axios
      .get("http://192.168.11.132:1314/api/detail")
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i]._id == this.id) {
            this.product.title = res.data[i].title;
            this.product.name = res.data[i].name;
            this.product.OriginPrice = res.data[i].OriginPrice;
            this.product.sizeAll = res.data[i].sizeAll;
            this.product.Numb = res.data[i].Numb;
            this.product.imgUrl = res.data[i].imgUrl;
            this.product.imgUrlall = res.data[i].imgUrlall;

            this.fileList.push({ url: res.data[i].imgUrl });
            this.fileList2.push({ url:res.data[i].imgUrlall[1] });
            console.log(this.fileList2[0].url)


          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit");
          axios
            .put("http://192.168.11.132:1314/api/crud/change", {
              id: this.id,
              title: this.product.title,
              name: this.product.name,
              OriginPrice: this.product.OriginPrice,
              Numb: this.product.Numb,
              sizeAll: this.product.sizeAll,
              imgUrl: this.product.imgUrl,
              imgUrlall: this.product.imgUrlall
            })
            .then(res => {
              console.log(res);
              this.$router.push({ name: "Menu1" });
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$router.push({ name: "Menu1" });
    },
    // =============================================
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 主图图片+++++++++++++
    handleAvatarSuccess(res, file) {
      this.product.imgUrl = "http://192.168.11.132:1314" + res.file;
      console.log(this.product.imgUrl);
    },
    //副图图片+++++++++++==================
    handleAvatarSuccess2(res, file) {
      this.product.imgUrlall = "http://192.168.11.132:1314" + res.file;
      console.log(this.product.imgUrlall);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style scoped>
.spam_upload {
  margin-left: 20px;
  color: red;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
