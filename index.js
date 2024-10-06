const express = require("express");
const app = express();

const port = 3000;


app.listen(port, (req, res)=>{
    console.log(`Server started at port: ${port}`);
})

app.get('/home',(req,res)=>{
    res.send('Welcome to home page');
})

app.get('/',(req,res)=>{
    res.send('Welcome to home page');
})