const cheerio = require("cheerio");
const axios = require("axios").default;
const mongoose = require("mongoose");
const Entities = require("html-entities").XmlEntities;
const entities = new Entities();
const { Product, Detail, Category } = require("./models");

mongoose.connect("mongodb://localhost:27017/MangoStore-app", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(res => {
    const removeAll = Promise.all([
        Product.remove({}),
        Detail.remove({}),
        Category.remove({})
    ]);
    removeAll.then(res => {
        loadData();
    });
});

function loadData() {

    const types = [{
            name: "女鞋",
            url: "https://www.yougou.com/f-0-MXZ-0-1.html"
        },
        {
            name: "男鞋",
            url: "https://www.yougou.com/f-0-Y0A-04Y004-1.html"
        }, {
            name: "运动",
            url: "https://www.yougou.com/f-0-PTK-0-1.html"
        },
        {
            name: "箱包",
            url: "https://www.yougou.com/f-0-6LJ-0-1.html"
        },
        {
            name: "儿童",
            url: "https://www.yougou.com/f-0-9XB-0-1.html"
        }
    ];
    Category.insertMany(types)
        .then(res => {
            for (var i = 0; i < res.length; i++) {
                loadProduct(res[i]);
            }
        })

}

function loadProduct({
    url,
    name,
    _id
}, isFirst = true) {
    fetchData(url).then(res => {
        const $ = cheerio.load(res.data.toString());
        const products = [];
        if (isFirst) {
            const $tagProducts = $(".proList li");
            $tagProducts.each(function() {
                const product = {};
                product.title = $(this)
                    .find('.srchlst-wrap .bd .nptt a')
                    .text();
                product.imgUrl = $(this)
                    .find(".srchlst-wrap .goods-desc .collect")
                    .attr("src");
                product.CurrentPrice = $(this)
                    .find(".srchlst-wrap .bd .price_sc em")
                    .eq(2).attr("price");
                product.OriginPrice = $(this)
                    .find(".srchlst-wrap .bd .origin-price i")
                    .text();
                product.detailUrl = $(this)
                    .find(".srchlst-wrap .goods-head a")
                    .attr("href");
                product.category = name;
                product.id = _id;
                products.push(product);
            });
        } else {
            const $tagProducts = $(".proList li");
            $tagProducts.each(function(index) {
                const product = {};
                product.title = $(this)
                    .find('.srchlst-wrap .bd .nptt a')
                    .text();
                product.imgUrl = $(this)
                    .find(".srchlst-wrap .goods-desc .collect")
                    .attr("src");
                product.CurrentPrice = $(this)
                    .find(".srchlst-wrap .bd .price_sc em")
                    .eq(2).attr("price");
                product.OriginPrice = $(this)
                    .find(".srchlst-wrap .bd .origin-price i")
                    .text();
                product.detailUrl = $(this)
                    .find(".srchlst-wrap .goods-head a")
                    .attr("href");
                product.category = name;
                product.id = _id;
                products.push(product);
            });
        }
        Product.insertMany(products)
            .then(res => {
                for (var i = 0; i < res.length; i++) {
                    loadDt(res[i]);
                }
            });

    });
}

function loadDt({ detailUrl, name, _id, category }) {
    fetchData(detailUrl)
        .then(res => {
            const $ = cheerio.load(res.data.toString());
            const proDetails = [];
            const $goodsDetails = $("#goodsContainer");
            $goodsDetails.each(function() {
                let proDetail = {};
                proDetail.imgUrl = $(this)
                    .find("#goodsImg0 .goodsPic img")
                    .attr("src");
                proDetail.imgUrlall = [
                    $(this)
                    .find("#goodsImg0 .goodsPic img")
                    .attr("src"),
                    $(this)
                    .find("#spec-list .list-h li .picSmallClass2")
                    .attr("src"),
                    $(this)
                    .find("#spec-list .list-h li .picSmallClass3")
                    .attr("src"),
                    $(this)
                    .find("#spec-list .list-h li .picSmallClass4")
                    .attr("src"),
                    $(this)
                    .find("#spec-list .list-h li .picSmallClass5")
                    .attr("src"),
                    $(this)
                    .find("#spec-list .list-h li .picSmallClass6")
                    .attr("src")
                ];
                proDetail.title = $(this)
                    .find(".shopping-container h1")
                    .text();
                proDetail.OriginPrice = $(this)
                    .find(".shopping-container .good_ygprcarea #ygprice_area del")
                    .text();
                proDetail.title = $(this)
                    .find(".shopping-container h1")
                    .text();
                proDetail.OriginPrice = $(this)
                    .find(".shopping-container .good_ygprcarea #ygprice_area del")
                    .text();
                proDetail.sizeAll = [
                    $(this)
                    .find(".size .prosize .prodSpec a")
                    .eq(0).attr("data-name"),
                    $(this)
                    .find(".size .prosize .prodSpec a")
                    .eq(1).attr("data-name"),
                    $(this)
                    .find(".size .prosize .prodSpec a")
                    .eq(2).attr("data-name"),
                ];

                console.log(proDetail);
                proDetail.id = _id;
                proDetail.name = category;
                proDetails.push(proDetail);
            });
            Detail.insertMany(proDetails).then(detEnd => console.log("保存详情成功"));
        })
}


function fetchData(url) {
    const userAgents = [
        "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11",
        "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50",
        "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0",
        "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)",
        "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
    ];
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            axios
                .get(url, {
                    timeout: 500000,
                    headers: {
                        "user-agent": userAgents[Math.floor(Math.random() * userAgents.length)],
                        "X-FORWARDED-FOR": Math.floor(Math.random() * 255) +
                            "." +
                            Math.floor(Math.random() * 255) +
                            "." +
                            Math.floor(Math.random() * 255) +
                            "." +
                            Math.floor(Math.random() * 255),
                        "CLIENT-IP": Math.floor(Math.random() * 255) +
                            "." +
                            Math.floor(Math.random() * 255) +
                            "." +
                            Math.floor(Math.random() * 255) +
                            "." +
                            Math.floor(Math.random() * 255)
                    }

                }).then(res => resolve(res))
        }, Math.random() * 100 * Math.random());
    });
}
