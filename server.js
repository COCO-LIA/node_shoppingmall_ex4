const express = require("express")

const app = express()

//req res test
app.use((req, res) =>{
    res.json({
        message: "서버 시작"
    })
})

const port = 4000

app.listen(port, console.log("server started"))
