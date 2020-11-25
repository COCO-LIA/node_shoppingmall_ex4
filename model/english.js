const mongoose = require('mongoose')

const englishSchema = mongoose.Schema({
    character : String,
    pingyin : String,
    means: String
})

module.exports = mongoose.model("english", englishSchema )