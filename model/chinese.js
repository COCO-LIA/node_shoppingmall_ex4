const mongoose = require("mongoose")

const chineseSchema = mongoose.Schema({
    character : {
        type: String,
        required: true
    },
    pingyin : {
        type: String,
        required: true
    },
    means : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("chinese", chineseSchema )