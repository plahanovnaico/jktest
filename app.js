const express=require("express");
const app=express();
var port=process.env.PORT || '3000'
app.get('/',(req,res)=> res.send ('hello world test '));
app.listen(port,()=> console.log("server is running on the port"+port));
