let express = require('express');
let app = express();
//these first two lines create an express app object.
//several other ways to create an express app object tho.
//e.g: app.listen(port)

absolutePath = __dirname + "/views/index.html",

//call app.use after rest of file otherwise it will cause a HTTP 404.
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) =>{
    res.json({"message" : "Hello json"})
    //sending json to specific route
    res.send("localhost:3000/json")
});


 module.exports = app;
