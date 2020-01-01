const router = require("express").Router();
const Detail = require("../models/detail");


router.get("/", (req, res) => {
    res.send("俺是路由拆分")
})


router.post("/get", (req, res) => {
    // userToken
    const _id = req.body
    Detail.findById(_id).then(data => {
        res.json({
            data
        })
    })
})

router.post("/add", (req, res) => {
    console.log(req.body);
    var detail = new Detail(req.body)
    detail.save()
        .then(() => {
            res.json({
                code: 1,
                msg: '保存成功'
            })
        })
})

router.put("/change", (req, res) => {
    console.log(req.body);
    const id = req.body.id
    Detail.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.json({
                code: 1,
                msg: '修改成功'
            })
        })
})

/* router.delete('/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const delResult = await Detail.findByIdAndDelete(id);
        res.json(delResult);
    } catch (err) {
        next(err);
    }
}); */

router.post('/', async(req, res) => {
    // id
    try {
        const { id } = req.body;
        const delResult = await Detail.findByIdAndDelete(id);
        res.json({ code: 1, msg: "商品删除成功", delResult });
    } catch (err) {
        res.json({
            code: 0,
            msg: "删除失败"
        })
    }
});

module.exports = router
