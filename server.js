
const express =require("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname"/index.html");
});

app.post("/",function(req,res){
    var n1 = Number(req.boby.num1);
    var n2 = Number(req.boby.num2);
    result = n1+n2;
    res.send("The result is"+result);
});
app.listen(3000,function(){
    console.log("server starts")
});