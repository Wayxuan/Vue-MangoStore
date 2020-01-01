const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Category = require("./models/category");
const Product = require("./models/product");
const Detail = require("./models/detail");
const cors = require("cors");
const Customer = require("./models/customers");
const Order = require("./models/order");
const path = require("path")




app.use(cors());
app.use(express.urlencoded());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/MangoStore-app", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(res => {
    console.log("数据库连接成功")
});


app.get("/", (req, res) => {
    res.send("我是一个服务器！！");
});

app.get("/api/category", (req, res) => {
    Category.find({}, function(err, doc) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(doc)
        }
    })
})



app.get("/api/detail", (req, res) => {
    Detail.find({}, function(err, doc2) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(doc2)
        }
    })
})

app.get("/api/product", (req, res) => {
    Product.find({}, function(err, doc1) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(doc1)
        }
    })
})

var multer = require("multer"); // 使用图片上传插件，用来解析form-data数据

// 存储路径
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // 设置存储位置
        cb(null, "uploads");
    },
    filename: function(req, file, cb) {
        // 设置存储的文件名
        cb(null, file.fieldname + "-" + Date.now() + file.originalname);
    }
});
var upload = multer({ storage });
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/upload", upload.single("avatar"), function(req, res, next) {
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据，如果存在的话
    res.json({ file: "/uploads/" + req.file.filename });
});

app.use('/api/type', require("./controllers/category")); // 商品表增删改查
app.use('/api/crud', require("./controllers/crud")); // 商品表增删改查
app.use('/api/cart', require("./controllers/cartList")); // 用户购物车表
app.use('/api/order', require("./controllers/order")); // 用户订单表
app.use('/api/customer', require("./controllers/customer")); // 用户表登录注册表
app.use('/api/fav', require("./controllers/favor")); // 用户表收藏表


app.listen(1314, () => {
    console.log("服务器运行于1314端口")
})