const express = require('express')
const router = express.Router()

const chineseModel = require('../model/chinese')
const checkAuth = require('../middelware/check-auth')


// chinese 불러오는 API
router.get("/", (req, res) => {

    chineseModel
        .find()
        .then(docs => {
            res.json({
                msg: " 중국상품 목록 불러오기됨 ",
                count: docs.length,
                list: docs.map(doc => {
                    return{
                        id: doc._id,
                        character: doc.character,
                        pingyin:doc.pingyin,
                        means:doc.means,
                        request: {
                            type: 'GET',
                            url: "http://localhost:4000/chn/" + doc._id
                        }
                    }
                })
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
router.get("/:chineseId", checkAuth, (req, res) => {

    chineseModel
        .findById(req.params.chineseId)
        .then(item => {
            res.json({
                msg: "중국 상품 상세보기 " + item._id,
                list: {
                    id: item._id,
                    character: item.character,
                    pingyin:item.pingyin,
                    means:item.means,
                    request: {
                        type: 'GET',
                        url: "http://localhost:4000/chn"
                    }
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})


//chinese 등록하는 API
router.post("/", checkAuth, (req, res) => {

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
                chineseInfo: {
                    id: item._id,
                    character: item.character,
                    pingyin:item.pingyin,
                    means:item.means,
                    request: {
                        type: 'GET',
                        url: "http://localhost:4000/chn/" + item._id
                    }
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })


})


//chinese 수정하는 API
router.patch("/:chineseId", checkAuth, (req, res) =>{
    // res.json({
    //     message : "중국어 수정"
    // })

    //수정할 내용을 정의
    const updateOps = {}
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }


    chineseModel
        .findByIdAndUpdate(req.params.chineseId, { $set: updateOps})
        .then(() => {
            res.json({
                msg: "chn 수정완료 " + req.params.chineseId,
                request:{
                type: 'GET',
                url: "http://localhost:4000/chn/"+ req.params.chineseId
                }
            })
        })

        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})

//chinese 전체 삭제하는 API
router.delete("/", checkAuth, (req, res) =>{
    // res.json({
    //     message: "중국어 삭제"
    // })
    chineseModel
        .deleteMany()
        .then(() => {
            res.json({
            msg: "deleted All",
                request: {
                type: 'GET',
                    url: "http://localhost:4000/chn"

                }
        })
    })
        .catch(err => {
            res.json({
            msg: err.message
        })
    })

})

//  부분삭제 API
router.delete("/:chineseId", checkAuth, (req, res) =>{
    chineseModel
        .findByIdAndDelete(req.params.chineseId)
        .then(() => {
            res.json({
                msg: "deleted one",
                request:{
                    type: 'GET',
                    url: "http://localhost:4000/chn"
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})


module.exports = router