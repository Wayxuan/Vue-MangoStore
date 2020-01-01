<template>
<div class="Lijigoumai">
    <div class="Lijigoumai_headerbj">
    <div class="Lijigoumai_header">
        <img src="../../src/assets/Mango-min.png" alt="">
        <h3>确认订单</h3>
    </div>
    </div>
    <div class="Lijigoumai_count">
        <div class="Lijigoumai_count1">
            选择收货地址
        </div>
        <div class="Lijigoumai_count2">
            <a href="#">新增地址</a>
        </div>
        <div class="newbiao">
            <p>收货人:
                <input type="text" style="padding-left:4px" placeholder="只包含汉字、数字和字母，长度不超过16个字">
            </p>
            <p>手机号码:
                <input type="text" style="padding-left:4px">
            </p>
            <p>所在地区:
                <input type="text" style="padding-left:4px">
            </p>
            <p>街道地址:
                <input type="text" style="padding-left:4px" placeholder="建议您如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息">
            </p>
            <p>
                <input type="checkbox">
                设置为默认收获地址
            </p>
            <p>
            <button>保存</button>
            <button>取消</button>
            </p>
        </div>
        <div class="Lijigoumai_count3">
            确认订单信息
        </div>
        <div class="Lijigoumai_count4">
            <table>
                <tr>
                    <th class="th1">商品信息</th>
                    <th>规格</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>小计</th>
                </tr>
            </table>
        </div>
        <div class="Lijigoumai_count5">
            <div class="byou">
                <span>
                    包邮
                </span>
            </div>
            <table>
            
                <tr>
                    <th class="th1"><img src="../assets/jay.png" alt=""><span>JAY全套专辑</span></th>
                    <th>L</th>
                    <th>￥999.00</th>
                    <th>2</th>
                    <th>￥999.00</th>
                </tr>
            </table>
        </div>
        <div class="ljm">
        <button type="button">确认并支付</button>
        </div>
    </div>

</div>
    
</template>
<style scoped>
@import './style/Lijigoumai.css'; 


</style>