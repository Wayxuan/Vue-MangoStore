const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
    },
    CurrentPrice: {
        type: Number,
        default: 0
    },
    OriginPrice: {
        type: Number,
        default: 0
    },
    detailUrl: {
        type: String
    },
    category: {
        type: String,
        required: true
    }
}, {
    // 为每一条记录添加一个新增和修改时间的时间戳
    timestamps: true
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;

// 创建模型如上，使用的话通过 const Product=require("./model/product")
