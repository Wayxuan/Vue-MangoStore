const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    imgUrlall: {
        type: Array
    },
    OriginPrice: {
        type: String,
        default: 0
    },
    Numb: {
        type: Array,
        default: [77, 5, 25]
    },
    sizeAll: {
        type: Array
    }

}, {
    // 为每一条记录添加一个新增和修改时间的时间戳
    timestamps: true

});
const Detail = mongoose.model("Detail", detailSchema);
module.exports = Detail;
