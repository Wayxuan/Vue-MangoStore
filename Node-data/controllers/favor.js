const router = require("express").Router();
const Detail = require("../models/detail");
const Favor = require("../models/favor");
const Customer = require("../models/customers");

router.post("/addF", (req, res) => {
    // userId,productId
    const favor = new Favor()
    const productId = req.body.productId
    const userId = req.body.userId
    Detail.findById(productId).then((data) => {

        favor.userId = userId
        favor.productId = data._id
        favor.save().then(() => {
            res.json({
                code: 1,
                msg: "收藏成功"
            })
        })
    })

})


//  关联查询
router.get("/pro", (req, res) => {
    Favor.find({ userId: req.query.userId }).populate('productId')
        .then(d => {
            res.json(d)
        })
})

router.get("/ppro", (req, res) => {
    Favor.find({ productId: req.query.productId }).populate('userId')
        .then(d => {
            res.json(d)
        })
})

// Favor.findById().populate('productId').


router.delete("/del", (req, res) => {
    // userId,proId
    const { userId, productId } = req.query;
    // console.log(req.query)
    Favor.findOneAndDelete({ userId, productId }).then((r) => {
        // console.log(r)
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
})

module.exports = router
