require("dotenv").config()

let express = require('express');
let app = express();
//these first two lines create an express app object.
//several other ways to create an express app object tho.
//e.g: app.listen(port)

absolutePath = __dirname + "/views/index.html",

//call app.use after rest of file otherwise it will cause a HTTP 404.
app.use("/public", express.static(__dirname + "/public"));


app.use(function(req, res, next){
    console.log(req.method +" "+ req.path +" - " + req.ip);
    next();
})

 module.exports = app;
