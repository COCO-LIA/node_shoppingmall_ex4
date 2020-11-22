const express = require('express')
const router = express.Router()


//english 불러오는 API
router.get("/yingyu", (req, res) => {
    res.json({
        문구 : "영어 페이지 보여드립니다"
    })
})


//english 등록하는 API
router.post("/", (req, res) => {
    res.json({
        문구 : " 영어 등록 "
    })
})

//english 수정하는 API
router.patch("/", (req, res) => {
    res.json({
        문구 : "영어 수정 "
    })
})


//english 삭제하는 API
router.delete("/", (req,res) => {
    res.json({
        문구: "영어 삭제 "
    })
})

module.exports = router