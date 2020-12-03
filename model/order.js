const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({

    chineselist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chinese',
        required: true
    },
    quantity:{
        type: Number,
        default: 1
    }
})

//3
module.exports = mongoose.model("order", orderSchema)