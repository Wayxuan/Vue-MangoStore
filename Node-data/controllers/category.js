const router = require("express").Router();
const Category = require("../models/category");

router.get("/", (req, res) => {
    Category.find({}, function(err, doc) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(doc)
        }
    })
})


router.post("/add", (req, res) => {
    // name
    const category = new Category(req.body)
    category.save().then(() => {
        res.json({
            code: 1,
            msg: "分类添加成功"
        })
    })
})



router.post('/', async(req, res) => {
    // id
    try {
        const { id } = req.body;
        const delResult = await Category.findByIdAndDelete(id);
        res.json({ msg: "分类删除成功", delResult });
    } catch (err) {
        res.json({
            code: 0,
            msg: "删除失败"
        })
    }
});

router.put("/", (req, res) => {
    // id name
    const { id, newName } = req.body
    Category.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.json({
                code: 1,
                msg: '修改成功'
            })
        })
})

module.exports = router