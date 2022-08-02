require("dotenv").config()

let express = require('express');
let app = express();
//these first two lines create an express app object.
//several other ways to create an express app object tho.
//e.g: app.listen(port)

absolutePath = __dirname + "/views/index.html",

//call app.use after rest of file otherwise it will cause a HTTP 404.
app.use("/public", express.static(__dirname + "/public"));

app.get("/now", (req, res, next) =>{
    req.time = new Date().toString();
    next();

}, function(req, res){
    res.send({time: req.time});
})


 module.exports = app;
