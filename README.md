# MangoStore

### 如何安装

1. 请确保安装MongoDB并正确启动
2. Clone该项目到本地 git clone git@github.com:Wayxuan/MangoStore.git
3. 安装c端商城依赖包 cd Vue-MangoStore & npm install
4. 运行c端 npm run serve 
5. 安装b端管理系统依赖包 cd vue-MangoAdmin & npm install
6. 运行b端 npm run dev
7. 该项目数据已上传至服务器，但若想瞅一瞅,先安装后端依赖 cd Node-data & npm i
8. 运行服务器 node MGdata
9. 但是该项目数据皆截取的，先重新截取 node spider
10. 使用前对进行一些加工 node updb
11. 现在再运行服务器启动端口号 node MGdata 即可

### 项目技术栈

前端技术：Vue+Vue-Router+Vuex+axios+Scss
前端脚手架：Vue-cli
UI组件库：Element-UI / Bootstrap
后端技术：Node+Express+Cheerio+Mongoose

该项目采用前后端分离技术，前端使用Vue全家桶;
该项目整体框架使用vue-cli;
该项目后端使用express+cheerio+mongoose进行后端业务处理及数据库操作。

### 实现功能

1. 买家登录注册功能
2. 买家浏览跳转，详情页，收藏，购买等购物车逻辑功能
3. 卖家登录功能，该项目为某一家商家所用，而非多家齐用
4. 卖家商品管理，订单管理，地址管理等
5. 具体功能请看Node-data的API文档，接口功能皆已实现

[视频预览](https://www.bilibili.com/video/av81479550)

#### 欢迎 Star ~ 
项目周期八天，不完善之处，请见谅，加油~
