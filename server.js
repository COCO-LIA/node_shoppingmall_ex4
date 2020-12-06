const express = require("express")
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()


//1

const app = express()

//DB connect
require('./middelware/database')

const chnRoute = require('./route/chinese')
const engRoute = require('./route/english')
const orderRoute = require('./route/order')
const userRoute = require('./route/user')


//미들웨어 설정
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/chn", chnRoute)
app.use("/eng", engRoute)
app.use("/ccorder", orderRoute)
app.use("/user", userRoute)

const port = process.env.PORT || 4004

app.listen(port, console.log("server started"))

