const express = require("express")

const bodyParser = require('body-parser')

const app = express()

//req res test
// app.use((req, res) =>{
//     res.json({
//         message: "서버 시작"
//     })
// })


const chnRoute = require('./route/chinese')
const engRoute = require('./route/english')

//미들웨어 설정
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use("/chn", chnRoute)
app.use("/eng", engRoute)


const port = 4000

app.listen(port, console.log("server started"))

