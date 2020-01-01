<template>
  <table class="table table-striped table-hover table-bordered">
    <button @click="addclass" class="btn btn-primary btn-sm">新增分类</button>
    <thead>
      <tr>
        <th>序号</th>
        <th>分类名称</th>
        <th>操作</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(p, i) in productClass" :key="i">
        <td style="width:80px">{{i+1}}</td>
        <td class="tdInput">
          <input class="input" v-show="p.isEdit" v-model="p.name" />
          <p class="span" v-show="!p.isEdit">{{p.name}}</p>
        </td>
        <td>
          <button @click="chenge(p._id,i)" v-show="!p.isEdit" class="btn btn-primary btn-sm">修改</button>
          <button @click="chenge2(p._id,i)" v-show="p.isEdit" class="btn btn-danger btn-sm">完成</button>
          <button @click="removebtn(p._id,i)" class="btn btn-danger btn-sm">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      show: false,
      productClass: [],
      name: ''
    }
  },
  created() {
    axios.get('http://www.wayxuan.wang:1314/api/type').then(res => {
      res.data.forEach(item => {
        item.isEdit = false
      })

      this.productClass = res.data
      console.log(this.productClass)
    })
  },
  methods: {
    save() {
      this.people.push({
        id: Date.now(),
        name: this.name,
        age: this.age,
        gender: this.gender,
        skills: this.skills,
        isEdit: false
      })
    },
    removebtn(id, i) {
      //删除------------------------
      if (confirm('确认删除吗')) {
        this.productClass.splice(i, 1)
        axios
          .post('http://www.wayxuan.wang:1314/api/type', { id: id })
          .then(res => {
            console.log(res)
          })
      }
    },
    addclass() {
      this.productClass.push({ isEdit: true })
    },
    wancheng() {
      this.productClass.push({ name: this.name, isEdit: false })
      axios
        .post('http://www.wayxuan.wang:1314/api/type/add', { name: this.name })
        .then(res => {
          console.log(res)
          this.name = ''
          this.show = !this.show
        })
    },
    chenge(id, index) {
      //修改按钮-------------
      this.productClass[index].isEdit = !this.productClass[index].isEdit
    },
    chenge2(id, index) {
      //修改完成----------
      console.log(this.productClass[index].name, id)
      if (id === undefined) {
        axios
          .post('http://www.wayxuan.wang:1314/api/type/add', {
            name: this.productClass[index].name
          })
          .then(res => {
            console.log(res)
            this.productClass[index].isEdit = !this.productClass[index].isEdit
          })
      } else {
        if (confirm('确认修改吗')) {
          axios
            .put('http://www.wayxuan.wang:1314/api/type', {
              id: id,
              name: this.productClass[index].name
            })
            .then(res => {
              this.productClass[index].isEdit = !this.productClass[index].isEdit
            })
        }else{
           this.productClass[index].isEdit = !this.productClass[index].isEdit
        }
      }
    }
  }
}
</script>
<style scoped>
.input {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
  background: #fff;
  text-indent: 10px;
}
.tdInput {
  padding: 0;
  margin: 0;
  width: 600px;
}
.span {
  margin-top: 13px;
  margin-left: 10px;
}
</style>
