const router = require("express").Router();
const CartList = require("../models/cartList")
const Customer = require("../models/customers")

router.post("/addPro", (req, res) => {
    // userId, productId, productImg,productSize, productNum,productPrice,productTitle,address,isFav,isPayed
    const cartList = new CartList(req.body);

    cartList.save((err) => {
        if (err) {
            //数据库异常
            res.json({
                code: 0,
                err
            })
        } else {
            //保存成功
            res.json({
                code: 1,
                info: '保存成功'
            })
        }
    });
})


router.get("/pro", (req, res) => {
        // userId
        const { userId } = req.query
        CartList.find({ userId }).populate("customer").then(data => {
            res.json({
                data
            })
        })
    })
    /* router.post("/pro", (req, res) => {
        // userToken
        const { userId } = req.body
        CartList.find({ userId }).populate("customer").then(data => {
            res.json({
                data
            })
        })

    }) */

router.delete("/pro", (req, res) => {
    // userId,proId
    const { userId, proId } = req.query;
    CartList.findOne({ userId }).populate("customer").then(data => {
        CartList.findByIdAndDelete(proId).then(() => {
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


router.put("/pro", async(req, res) => {

    //proId,userId, productId,productImg, productSize, productNum,productPrice,productTitle,address,isFav,isPayed
    const { _id } = req.body;
    CartList.findByIdAndUpdate(_id, req.body)
        .then((r) => {
            res.json({
                code: 1,
                msg: '修改成功'
            })
        }).catch(() => {
            res.json({
                code: 0,
                msg: '修改失败'
            })
        })
})

router.get("/allC", (req, res) => {
    CartList.find({}, function(err, doc) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(doc)
        }
    })

})



module.exports = router