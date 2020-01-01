# MangoStore API

###### baseURL全部更换为 http://www.wayxuan.wang:1314

- 获取所有商品信息
```
URL      http://192.168.11.132:1314/api/detail
Methods  get
Params   null
Return   goods
```

- 根据id获取指定商品信息
```
URL      http://192.168.11.132:1314/api/crud/get
Methods  post
Params   _id
Return   aGoodsCategory
```

- 新增商品信息
```
URL      http://192.168.11.132:1314/api/crud/add
Methods  post
Params
title，name，imgUrl，imgUrlall，OriginPrice, Numb, sizeAll
Return
{
    "code": 1,
    "msg": "保存成功"
}
```

- 修改商品信息
```
URL      http://192.168.11.132:1314/api/crud/change
Methods  put
Params
id, title，name，imgUrl，imgUrlall，OriginPrice, Numb, sizeAll
Return
{
    "code": 1,
    "msg": "修改成功"
}
```

- 删除商品信息
```
URL      http://192.168.11.132:1314/api/crud/
Methods  post
Params   id
{
    "code": 1,
    "msg": "商品删除成功"
}
```


- 获取所有商品分类
```
URL      http://192.168.11.132:1314/api/type
URL      http://192.168.11.132:1314/api/category
Methods  get
Params   null
Return   goodsCategory
```

- 新增商品分类
```
URL      http://192.168.11.132:1314/api/type/add
Methods  post
Params   name
Return
{
    "code": 1,
    "msg": "分类添加成功"
}
```

- 修改商品分类
```
URL      http://192.168.11.132:1314/api/type
Methods  put
Params   id,name
Return
{
    "code": 1,
    "msg": "修改成功"
}
```

- 删除商品分类
```
URL      http://192.168.11.132:1314/api/type
Methods  post
Params   id
Return
{
    "code": 1,
    "msg": "删除成功"
}
```

- 用户注册
```
URL      http://192.168.11.132:1314/api/customer/add
Methods  post
Params   name（unique），password，tel，address
Return
{
    "code": 1,
    "msg": "保存成功"
}
```

- 用户登录
```
URL      http://192.168.11.132:1314/api/customer/login
Methods  post
Params   name，password
Return
{
    "code": 1,
    "msg": "登录成功"
}
```

- 用户修改信息
```
URL      http://192.168.11.132:1314/api/customer
Methods  put
Params   name，password,tel,address
Return
{
    "code": 1,
    "msg": "修改成功"
}
```

- 删除用户信息
```
URL      http://192.168.11.132:1314/api/customer
Methods  delete
Params   id
Return
{
    "msg": "注销/删除成功",
    "delResult"
}
```

- 获取所有用户信息
```
URL      http://192.168.11.132:1314/api/customer/cus
Methods  get
Params   null
Return   users
```


- 根据id获取用户信息
```
URL      http://192.168.11.132:1314/api/customer
Methods  get
Params   _id
Return   user
```

- 加入购物车
```
URL      http://192.168.11.132:1314/api/cart/addPro
Methods  post
Params
  userId, productId, productImg,productSize, productNum,productPrice,productTitle,address
Return
{
    code: 1,
    info: '保存成功'
}
```

- 获取某用户的所有购物车订单
```
URL      http://192.168.11.132:1314/api/cart/pro
Methods  get
Params
  userId
Return
{
    data
}
```

- 删除某用户的某个购物车订单
```
URL      http://192.168.11.132:1314/api/cart/pro
Methods  delete
Params
  userId,proId
Return
{
    code: 1,
    msg: "找到并删除成功"
}
```

- 修改某用户的某个购物车订单
```
URL      http://192.168.11.132:1314/api/cart/pro
Methods  put
Params
  proId,userId, productId,productImg, productSize, productNum,productPrice,productTitle,address
Return
{
    code: 1,
    msg: "修改成功"
}
```

- 订单结算
```
URL      http://192.168.11.132:1314/api/order/addO
Methods  post
Params
    proId,userId, productId,productImg, Numb,productPrice,productTitle,address,isPayed
Return
{
    code: 1,
    msg: "用户订单保存成功,购物订单删除成功,商品库存减少成功"
}
```

- 获取某用户的已购订单
```
URL      http://192.168.11.132:1314/api/order/pro
Methods  post
Params
    userId
Return
{
    data
}
```

- 删除某用户的某个已购订单
```
URL      http://192.168.11.132:1314/api/order/pro
Methods  delete
Params
    userId,proId
Return
{
   code: 1,
   msg: "找到并删除成功"
}
```

- 获取所有用户已购订单
```
URL      http://192.168.11.132:1314/api/order/allO
Methods  get
Params   null
Return
{
   data
}
```

- 获取所有用户购物车订单
```
URL      http://192.168.11.132:1314/api/cart/allC
Methods  get
Params   null
Return
{
   data
}
```

- 加入收藏
```
URL      http://192.168.11.132:1314/api/fav/addF
Methods  post
Params   userId,productId
Return
{
    code: 1,
    msg: "收藏成功"
}
```

- 根据userId查询已收藏的商品
```
URL      http://192.168.11.132:1314/api/fav/pro
Methods  get
Params   userId
Return
{
    data
}
```

- 根据productId查询已收藏的人
```
URL      http://192.168.11.132:1314/api/fav/ppro
Methods  get
Params   productId
Return
{
    data
}
```

- 取消收藏
```
URL      http://192.168.11.132:1314/api/fav/del
Methods  delete
Params   userId,proId
Return
{
    code: 1,
    msg: "找到并删除成功"
}
```
