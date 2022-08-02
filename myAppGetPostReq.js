require("dotenv").config()
var bodyParser = require("body-parser")

let express = require('express');
let app = express();
//these first two lines create an express app object.
//several other ways to create an express app object tho.
//e.g: app.listen(port)

absolutePath = __dirname + "/views/index.html",


//call app.use after rest of file otherwise it will cause a HTTP 404.
app.use("/public", express.static(__dirname + "/public"));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

 module.exports = app;
