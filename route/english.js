const express = require('express')
const router = express.Router()

router.get("/yingyu", (req, res) => {
    res.json({
        문구 : "영어 페이지"
    })
})




module.exports = router