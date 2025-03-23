const express = require('express');

const app = express();


app.use("/hello",(req,res)=>{
    res.send("Its a Dashboard ! ")
});

app.use("/test",(req,res)=>{
    res.send("Test is Going on!")
});

app.listen(3001,()=>{
    console.log("Server Start at PORT No 3001");
});