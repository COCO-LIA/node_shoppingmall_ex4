const orderModel = require('../model/order')

exports.orders_get_all = (req, res) => {
    // res.json({
    //     msg: "order 불러오기 "
    // })

    orderModel
        .find()
        .populate("chineselist", ["character","pingyin"])
        .then(docs => {
            res.json({
                msg: "order total ",
                count: docs.length,
                orders: docs.map(doc => {
                    return {
                        id: doc._id,
                        중국어:doc.chineselist,
                        갯수:doc.quantity,
                        request: {
                            type: 'GET',
                            url: "http://localhost:4000/ccorder/"+doc._id
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

};

exports.order_get_order = (req, res) => {

    orderModel
        .findById(req.params.orderId)
        .populate("chineselist", ["character","pingyin"])
        .then(item => {
            res.json({
                msg: "order data" + item._id,
                orderInfo: {
                    id: item._id,
                    중국어: item.chineselist,
                    갯수: item.quantity,
                    request:{
                        type: 'GET',
                        url: "http://localhost:4000/ccorder"
                    }
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
};

exports.order_post_order = (req, res) => {

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

};

exports.order_patch_order = (req, res) => {

    const updateOps = {}
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }

    orderModel
        .findByIdAndUpdate(req.params.orderId,{ $set: updateOps})
        .then(() => {
            res.json({
                msg: "order 수정완료// " + req.params.orderId,
                request: {
                    type: 'GET',
                    url: "http://localhost:4000/ccorder/" + req.params.orderId
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })

};

exports.order_delete_order = (req, res) => {

    orderModel
        .deleteMany()
        .then(()=> {
            res.json({
                msg: "deleted ",
                request: {
                    type: 'GET',
                    url: "http://localhost:4000/ccorder"
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
};