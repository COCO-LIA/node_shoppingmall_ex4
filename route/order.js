const express = require("express")
const router = express.Router()

const checkAuth = require('../middelware/check-auth')
const {
    orders_get_all,
    order_post_order,
    order_patch_order,
    order_delete_order,
    order_get_order
} = require('../controller/order')

//API 생성하기

//order 불러오는 API
router.get("/", orders_get_all )

//상세 불러오는 API
router.get("/:orderId", checkAuth,order_get_order )

//order 등록하는 API
router.post("/", checkAuth, order_post_order )

//order 수정하는 API
router.patch("/:orderId", checkAuth, order_patch_order )

//order 삭제하는 API
router.delete("/", checkAuth, order_delete_order )



module.exports = router