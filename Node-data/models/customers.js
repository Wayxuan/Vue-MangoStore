const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tel: {
        type: Number,
        required: true
    },
    address: {
        type: String
    },
    avator: {
        type: String
    }


}, {
    // 为每一条记录添加一个新增和修改时间的时间戳
    timestamps: true

});

// 转化成模型
const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
