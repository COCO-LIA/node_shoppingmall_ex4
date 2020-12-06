const mongoose = require('mongoose')

//DB커넥트

const dbOptions =  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}


mongoose
    .connect(process.env.MONGODB_URI, dbOptions )
    .then(() => console.log(" DB 연결성공 "))
    .catch(err => console.log("++++++++", err.message))

