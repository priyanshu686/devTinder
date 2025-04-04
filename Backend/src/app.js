const express = require('express');
const cookie_parser = require('cookie-parser')
require('dotenv').config();
const connectDb = require("./config/database")
const Port = process.env.PORT || 3011

const app = express();
app.use(express.json());
app.use(cookie_parser());
app.use('/user',require('./Routers/userRoute'))


connectDb().then(()=>{
    console.log("Database is Connected");
    app.listen(Port,()=>{
        console.log(`Server Start at Port ${Port}`);
    });
}).catch((err)=>{
    console.error("Database is not Connecting")
})

