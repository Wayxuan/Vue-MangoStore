const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FavorSchema = new Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Customer"
    },
    productId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Detail"
    },
    productTitle: {
        type: String
    }
}, {
    // 为每一条记录添加一个新增和修改时间的时间戳
    timestamps: true
});
const Favor = mongoose.model("Favor", FavorSchema);
module.exports = Favor;