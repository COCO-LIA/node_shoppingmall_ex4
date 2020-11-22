const express = require('express')
const router = express.Router()

router.get("/zhongyu", (req, res) => {
    res.json({
        message: "중국어 페이지"
    })
})

module.exports = router