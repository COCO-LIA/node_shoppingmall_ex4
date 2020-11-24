const express = require("express")
const bodyParser = require('body-parser')

//1
const mongoose = require('mongoose')

const app = express()

//DB connect
const dbAddress = "mongodb+srv://admin:qwer@cluster0.huxry.mongodb.net/nodeshoppingmall4?retryWrites=true&w=majority"

mongoose
    .connect(dbAddress)
    .then(() => console.log("DB 연결 성공 "))
    .catch(err => console.log("++++++++", err.message))


const chnRoute = require('./route/chinese')
const engRoute = require('./route/english')

//미들웨어 설정
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use("/chn", chnRoute)
app.use("/eng", engRoute)


const port = 4000

app.listen(port, console.log("server started"))

