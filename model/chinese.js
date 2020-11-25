const mongoose = require("mongoose")

const chineseSchema = mongoose.Schema({
    character : String,
    pingyin : String,
    means : String
})

module.exports = mongoose.model("chinese", chineseSchema )