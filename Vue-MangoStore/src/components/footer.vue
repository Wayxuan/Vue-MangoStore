<template>
  <div>
    <div class="footers">
      <div class="xianTiao"></div>
      <div class="xianTiao2"></div>
      <div class="fot">
        <!-- ul包含二维码 -->
        <div style="display:flex;margin-top:30px;height:155px">
          <div class="erWeima">
            <img src="../assets/indexImg/logoma.png" alt />
            <p>随时逛 及时抢</p>
          </div>
          <ul class="footer-list ulList_1">
            <h4>获取更新</h4>
            <li>
              <a href>iphone/Android</a>
            </li>
            <li>
              <a href>芒果QQ空间</a>
            </li>
            <li>
              <a href>芒果新浪微博</a>
            </li>
            <li>
              <a href>开放API</a>
            </li>
          </ul>
          <ul class="footer-list">
            <h4>商务合作</h4>
            <li>
              <a href>卖家免费报名</a>
            </li>
            <li>
              <a href>商家入驻</a>
            </li>
            <li>
              <a href>廉政邮箱</a>
            </li>
            <li>
              <a href>开放平台</a>
            </li>
          </ul>
          <ul class="footer-list">
            <h4>公司信息</h4>
            <li>
              <a href>关于芒果</a>
            </li>
            <li>
              <a href>媒体报道</a>
            </li>
          </ul>
          <ul class="footer-list">
            <h4>帮助中心</h4>
            <li>
              <a href>新手上路</a>
            </li>
            <li>
              <a href>网站地图</a>
            </li>
          </ul>
          <div class="keFu">
            <img src="../assets/indexImg/lianxidianhua.jpg" alt />
            <p>客服热线：4008-123-123</p>
          </div>
        </div>
        <!-- 友情链接 -->
        <div class="YQlink">
          <a href="#">友情链接：</a>
          <a href>小分店</a>
          <a href>九块邮</a>
          <a href>易迅优惠券</a>
          <a href>中国鲜花礼品网</a>
          <a href>钻石小鸟</a>
          <a href>箱包品牌</a>
          <a href>网上购物</a>
          <a href>中国品牌网</a>
          <a href>会过VIP</a>
          <a href>家居网</a>
          <div class="kong"></div>
          <a href>更多>></a>
        </div>
        <div class="banquan">
          <p
            class="IPC"
          >郑州芒果网络科技有限公司 鄂ICP备10209250号 | ICP许可证号：鄂B2-20150109 | 鄂公网安备42018502000390号 | 食品流通许可证 SP4201991510041888</p>
          <p class="IPC2">Copyright © 2010 -2019 MangGuo.com All Rights Reserved</p>

          <div class="gongShang">
            <img src="../assets/indexImg/r_315new.gif" alt />
            <img src="../assets/indexImg/r_cnnic.gif" alt />
            <img src="../assets/indexImg/r_gongshang.gif" alt />
            <img src="../assets/indexImg/sm_124x47.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footers",
  props: {
    msg: String
  }
};
</script>
<style scoped>
.footers {
  height: 396px;
  margin: 0 auto;
}
.xianTiao {
  height: 40px;
  border-bottom: 2px solid #000;
}
.xianTiao2 {
  height: 4px;
  background: #333;
}
.fot {
  height: 351px;
  width: 1100px;
  margin: 0 auto;
  /* border: 1px solid black; */
}
.erWeima img {
  width: 90px;
  height: 90px;
}
.erWeima p {
  margin-top: 15px;
  font-size: 14px;
  color: #956666;
}
/* class="footer-list" */
.footer-list {
  width: 200px;
}
.footer-list h4 {
  color: #000;
  font-weight: 550;
  font-size: 15px;
  margin-bottom: 12px;
}

.footer-list li {
  margin-top: 5px;
}
.footer-list li a {
  color: #666;
  font-size: 12px;
}
.ulList_1 {
  margin-left: 74px;
}
.keFu img {
  width: 158px;
  height: 37px;
  margin-top: 30px;
}
.keFu p {
  margin-top: 24px;
  font-size: 12px;
  color: #666;
}
.YQlink {
  display: flex;
}
.YQlink a {
  font-size: 12px;
  color: #999;
  margin-right: 20px;
}
.kong {
  flex: 1;
}
.IPC {
  margin-top: 20px;
}
.IPC,
.IPC2 {
  width: 100%;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #c6c6c6;
}

.banquan {
  border-top: 1px dotted black;
  margin-top: 15px;
}

.gongShang {
  display: flex;
  margin: 0 auto;
  width: 550px;
}
.gongShang img{
  margin: 15px 5px 0;
}
</style>