const router = require("express").Router();
const CartList = require("../models/cartList");
const Customer = require("../models/customers");
const Order = require("../models/order");
const Detail = require("../models/detail");


router.post("/addO", (req, res) => {
    //proId,userId, productId,productImg, Numb,productPrice,productTitle,address,isPayed
    const { _id } = req.body;
    const proId = req.body.productId;
    const proNum = req.body.productNum;
    CartList.findByIdAndUpdate(_id, req.body)
        .then((r) => {
            const order = new Order(req.body);
            order.save((err) => {
                if (err) {
                    //数据库异常
                    res.json({
                        code: 0,
                        err
                    })
                } else {
                    //保存成功
                    CartList.findByIdAndDelete(req.body._id).then(() => {

                        Detail.findByIdAndUpdate(req.body.productId, {
                            Numb: req.body.Numb
                        }).then(() => {
                            res.json({
                                code: 1,
                                msg: "用户订单保存成功,购物订单删除成功,商品库存减少成功"
                            })
                        })
                    })
                }
            });
        })

})


router.post("/pro", (req, res) => {
    // userToken
    const { userId } = req.body
    console.log(req.body)
    Order.find({ userId }).populate("customer").then((data) => {
        res.json({
            data
        })
    })
})


router.delete("/pro", (req, res) => {
    // userToken,proId
    const { userId, proId } = req.query;
    Order.findOne({ userId }).populate("customer").then(data => {
        Order.findByIdAndDelete(proId).then(() => {
            res.json({
                code: 1,
                msg: "找到并删除成功"
            })
        }).catch(() => {
            res.json({
                code: 0,
                msg: "找到但删除失败"
            })
        })
    }).catch((e) => {
        console.log(e)
        res.json({
            code: 0,
            msg: "没找到删不掉"
        })
    })
})

router.get("/allO", (req, res) => {
    Order.find({}, function(err, doc) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(doc)
        }
    })
})
module.exports = router