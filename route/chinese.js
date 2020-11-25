const express = require('express')
const router = express.Router()
const chineseModel = require('../model/chinese')


// chinese 불러오는 API
router.get("/zhongyu", (req, res) => {

    chineseModel
        .find()
        .then(docs => {
            res.json({
                msg: " 중국상품 목록 불러오기됨 ",
                count: docs.length,
                list: docs
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })

    // res.json({
    //     message: "중국어 목록"
    // })

})

//chinese 상세목록 불러오는 API
router.get("/:chineseId", (req, res) => {

    chineseModel
        .findById(req.params.chineseId)
        .then(item => {
            res.json({
                msg: "중국 상품 상세보기 " + item._id,
                list: item
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})


//chinese 등록하는 API
router.post("/", (req, res) => {

    // //사용자 입력값 설정
    // const chineseInfo = {
    //     character: req.body.chnch,
    //     pingyin: req.body.chnpy,
    //     means: req.body.chnmn
    // }
    //
    // res.json({
    //     message: "중국어 등록 ",
    //     chinese: chineseInfo
    // })
    const chineseInfo = new chineseModel({

        character: req.body.chnch,
        pingyin: req.body.chnpy,
        means: req.body.chnmn

    })

    chineseInfo
        .save()
        .then(item => {
            res.json({
                msg: " 저장 성공 ",
                chineseInfo: item
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })


})


//chinese 수정하는 API
router.patch("/", (req, res) =>{
    res.json({
        message : "중국어 수정"
    })
})

//chinese 삭제하는 API
router.delete("/", (req, res) =>{
    // res.json({
    //     message: "중국어 삭제"
    // })
    

})


module.exports = router