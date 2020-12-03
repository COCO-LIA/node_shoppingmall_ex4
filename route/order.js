const express = require("express")
const router = express.Router()

//API 생성하기

//order 불러오는 API
router.get("/", (req, res) => {
    res.json({
        msg: "order 불러오"
    })
})


//order 등록하는 API
router.post("/", (req, res) => {

})


//order 수정하는 API
router.patch("/", (req, res) => {

})


//order 삭제하는 API
router.delete("/", (req, res) => {

})


module.exports = router