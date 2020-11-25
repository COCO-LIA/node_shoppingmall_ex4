const mongoose = require('mongoose')

const productSchema4 = mongoose.Schema({
    name : String,
    price : Number,
    category: String
})

module.exports = mongoose.model("product4", productSchema4)