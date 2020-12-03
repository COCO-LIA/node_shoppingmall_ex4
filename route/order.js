const express = require("express")
const router = express.Router()

const orderModel = require('../model/order')


//API 생성하기

//order 불러오는 API
router.get("/", (req, res) => {
    res.json({
        msg: "order 불러오기 "
    })
})


//order 등록하는 API
router.post("/", (req, res) => {

    const  orderInfo = new orderModel({
        chineselist: req.body.chid,
        quantity: req.body.qty
    })

    orderInfo
        .save()
        .then(item => {
            res.json({
                msg: " 중국어 목록 장바구니 ",
                orderInfo: item
            })
        })
        .catch(err=> {
            res.json({
                msg: err.message
            })
        })

})


//order 수정하는 API
router.patch("/", (req, res) => {

})


//order 삭제하는 API
router.delete("/", (req, res) => {

})


module.exports = router