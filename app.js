const express = require("express");
const Router = require("./routes/Routes");
const app = express();
const port = process.env.port || 8080;
require("dotenv").config();

app.get('/',(req,res)=>res.send('hellowordld'));
app.listen(port, ()=>console.log('aplication start'));
    
