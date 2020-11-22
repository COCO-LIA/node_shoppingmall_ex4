const express = require('express')
const router = express.Router()


// chinese 불러오는 API
router.get("/zhongyu", (req, res) => {
    res.json({
        message: "중국어 목록"
    })
})

//chinese 등록하는 API
router.post("/", (req, res) =>{
    res.json({
        message: "중국어 등록 "
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
    res.json({
        message: "중국어 삭제"
    })
})


module.exports = router