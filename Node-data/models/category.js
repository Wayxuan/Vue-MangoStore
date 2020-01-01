const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
    }
}, {
    // 为每一条记录添加一个新增和修改时间的时间戳
    timestamps: true

});
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;