<template>
  <div class="dashboard-container">
    <p>芒</p>
    <p>果</p>
    <p>商</p>
    <p>城</p>
  </div>
</template>


<style scoped>
.dashboard-container{
  margin-top: -16px;
  height: 800px;
  background: url(../../assets/img1/bj.jpg) no-repeat #181818;
  background-size:cover;
  position: relative;
}
.dashboard-container p{
  color: #fff;
  font-size: 30px;
  position: absolute;
}
.dashboard-container p:nth-child(1){
  left: 14%;
  top: 12%;
  transform: rotate(30deg)
}
.dashboard-container p:nth-child(2){
  left: 24%;
  top: 24%;
  transform: rotate(-30deg)

}
.dashboard-container p:nth-child(3){
  left: 60%;
  top: 34%;
  transform: rotate(60deg)

}
.dashboard-container p:nth-child(4){
  left: 70%;
  top: 24%;
  transform: rotate(-60deg)

}
</style>
