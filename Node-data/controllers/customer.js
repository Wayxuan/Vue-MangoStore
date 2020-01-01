const router = require("express").Router();
const Customer = require("../models/customers")


router.get("/cus", (req, res) => {
    Customer.find({}, function(err, xx) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(xx)
        }
    })
})

router.get("/", (req, res) => {
    const _id = req.query
    Customer.findById(_id, function(err, doc3) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(doc3)
        }
    })
})

const bcrypt = require('bcryptjs')

router.post("/add", (req, res) => {
    var customer = new Customer(req.body)
    const _params = req.body; //取得接口传过来的数据
    //此处省略对参数校验的过程，假设传过来的都是合法参数，但实际项目我们还是需要校验的
    const _findParams = { name: _params.name };
    const salt = bcrypt.genSaltSync(10)
    const password = bcrypt.hashSync(_params.password, salt)
        //用账号去数据库中查找账号是否已经注册
    Customer.find(_findParams, (err, data) => {
        if (err) {
            //抛出异常
            res.json({
                code: 0,
                err
            })
        } else {
            //data是我们查数据库得到的数据，没有查到为[]
            if (data.length == 0) {
                const customer = new Customer({
                    ..._params,
                    ... {
                        password
                    }
                });
                customer.save((err) => {
                    if (err) {
                        //数据库异常
                        res.json({
                            code: 0,
                            err
                        })
                    } else {
                        //保存成功
                        // mongoose.disconnect();
                        res.json({
                            code: 1,
                            info: '保存成功'
                        })
                    }
                });
            } else {
                //提示用户该账户已经注册
                res.json({
                    code: 0,
                    info: '用户名已存在'
                })
            }
        }
    });
})

router.post('/login', (req, res) => {
    const { name, password } = req.body
    Customer.findOne({ name })
        .then(data => {
            if (data) {
                if (bcrypt.compareSync(password, data.password)) {
                    res.json({
                        code: 1,
                        info: '登录成功',
                        _id: data.id
                    })
                } else {
                    res.json({
                        code: 0,
                        info: '密码错误'
                    })
                }
            } else {
                res.json({
                    code: 0,
                    info: '用户不存在'
                })
            }
        })
})

router.put("/", (req, res) => {
    const _id = req.body._id
    Customer.findByIdAndUpdate(_id, req.body)
        .then(() => {
            res.json({
                code: 1,
                msg: '修改成功'
            })
        })
})

router.delete('/', async(req, res, next) => {
    try {
        const { id } = req.query;
        const delResult = await Customer.findByIdAndDelete(id);
        res.json({ msg: "注销/删除成功", delResult });
    } catch (err) {
        next(err);
    }
});

module.exports = router
