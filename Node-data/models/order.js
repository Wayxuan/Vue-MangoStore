const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    userId: {
        type: String,
        ref: "cartList"
    },
    proId: {
        type: String,
        ref: "cartList"
    },
    productImg: {
        type: String
    },
    productSize: {
        type: String
    },
    productNum: {
        type: Number
    },
    productPrice: {
        type: Number
    },
    productTitle: {
        type: String
    },
    address: {
        type: String
    }


}, {
    // 为每一条记录添加一个新增和修改时间的时间戳
    timestamps: true
});
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
