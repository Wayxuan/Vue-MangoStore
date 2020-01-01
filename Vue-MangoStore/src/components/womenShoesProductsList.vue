<template>
<div class="box">
 <div v-for="item in nvXie" :key="item._id" class="index_perducts">
         <router-link :to="{name: 'particulars',query:{id:item._id}}"><img :src="item.imgUrl" alt=""></router-link>
          <!-- <div class="img">{{item.imgUrl}}</div> -->
          <p class="perduct_price">￥ {{item.OriginPrice}}</p>
          <p class="perduct_name">{{item.title}}</p>
        </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
   computed:{
       ...mapState(['nvXie'])
   },
   created(){
      
   }
}
</script>
<style scoped>
.box{
    min-height: 500px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    /* justify-content:space-around; */
}
</style>