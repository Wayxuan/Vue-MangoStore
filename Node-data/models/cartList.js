const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartListSchema = new Schema({
    userId: {
        type: String,
        ref: 'customer'
    },
    productId: {
        type: String
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
    },
    isFav: {
        type: Boolean,
        default: false
    },
    isPayed: {
        type: Boolean,
        default: false
    }
}, {
    // 为每一条记录添加一个新增和修改时间的时间戳
    timestamps: true

});

// 转化成模型
const CartList = mongoose.model("CartList", CartListSchema);
module.exports = CartList;