 const Detail = require("./models/detail");
 const mongoose = require('mongoose')


 mongoose.connect("mongodb://localhost:27017/MangoStore-app", {
     useUnifiedTopology: true,
     useNewUrlParser: true
 }).then(res => {
     console.log("数据库连接成功")
     Detail.find({})
         .then(list => {
             for (var i = 0; i < list.length; i++) {
                 const item = list[i]
                 item.OriginPrice = parseInt(item.OriginPrice.replace('¥', '').replace(',', '').replace(' ', ''));
                 item.save().then(() => {
                     console.log(`${item.title},更新成功`)
                 })
             }
         })
 });
