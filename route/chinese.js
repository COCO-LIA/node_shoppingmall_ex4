const express = require('express')
const router = express.Router()


const checkAuth = require('../middelware/check-auth')
const {
    chinese_get_all,
    chinese_get_chinese,
    chinese_post_chinese,
    chinese_patch_chinese,
    chinese_delete_all,
    chinese_delete_chinese
} = require('../controller/chinese')

// chinese 불러오는 API
router.get("/", chinese_get_all )


//chinese 상세목록 불러오는 API
router.get("/:chineseId", checkAuth, chinese_get_chinese )


//chinese 등록하는 API
router.post("/", checkAuth, chinese_post_chinese )


//chinese 수정하는 API
router.patch("/:chineseId", checkAuth, chinese_patch_chinese )

//chinese 전체 삭제하는 API
router.delete("/", checkAuth, chinese_delete_all )

//  부분삭제 API
router.delete("/:chineseId", checkAuth, chinese_delete_chinese )


module.exports = router