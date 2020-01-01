<template>
  <div class="app-container">
    <el-form ref="ruleForm" :model="product" :rules="rules" label-width="80px">
      <el-form-item label="名称" prop="title">
        <el-input v-model="product.title"></el-input>
      </el-form-item>

      <el-form-item label="分类" prop="name">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="价格" prop="OriginPrice">
        <el-input type="number" v-model="product.OriginPrice"></el-input>
      </el-form-item>

      <el-form-item label="数量" prop="Number">
        <el-input type="number" v-model="product.Numb"></el-input>
      </el-form-item>

      <el-form-item label="尺码" prop="sizeAll">
        <el-input v-model="product.sizeAll"></el-input>
      </el-form-item>
      <!--图片======== -->
      <div class="img11">
        <el-form-item label="主图图片" prop="sizeAll">
          <el-upload
            name="avatar"
            action="http://www.wayxuan.wang:1314/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-success="handleAvatarSuccess"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <!-- =================== -->

        <!-- 图片============ -->
        <el-form-item label="缩略图片" prop="imgUrlall">
          <el-upload
            name="avatar"
            action="http://www.wayxuan.wang:1314/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-success="handleAvatarSuccess2"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      options: [],
      value: '',
      product: {
        title: '',
        name: '',
        OriginPrice: '',
        Numb: '',
        sizeAll: '',
        imgUrl: '',
        imgUrlall: []
      },
      dialogImageUrl: '',
      dialogVisible: false,
      rules: {
        title: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 3, message: '长度在3个字符以上' }
        ],
        OriginPrice: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        Numb: [{ required: true, message: '请输入商品数量', trigger: 'blur' }]
      }
    }
  },
  created() {
    axios.get('http://www.wayxuan.wang:1314/api/type').then(res => {
      console.log(res.data)

      res.data.forEach((item, i) => {
        // console.log(item.name)
        this.options.push({ value: item.name, label: item.name })
      })

      console.log(this.options)
    })
  },

  methods: {
    submitForm(formName) {

          this.product.name = this.value
          axios
            .post('http://www.wayxuan.wang:1314/api/crud/add', this.product)
            .then(res => {
              console.log(res)
              this.$router.push({ name: 'Menu12' })
            })
            .catch(err => {
              console.log(err)
            })

    },
    resetForm(formName) {
      // this.$refs[formName].resetFielde()
      this.$router.push({ name: 'Menu12' })
    },
    // =============================================
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // 主图图片+++++++++++++
    handleAvatarSuccess(res, file) {
      this.product.imgUrl = 'http://www.wayxuan.wang:1314' + res.file
      console.log(this.product.imgUrl)
    },
    //副图图片+++++++++++==================
    handleAvatarSuccess2(res, file) {
      this.product.imgUrlall.push('http://www.wayxuan.wang:1314' + res.file)
      console.log(this.product.imgUrlall)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
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
