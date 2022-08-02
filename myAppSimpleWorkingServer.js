let express = require('express');
let app = express();
//these first two lines create an express app object.
//several other ways to create an express app object tho.
//e.g: app.listen(port)



app.get("/", function(req, res){
    res.send("Hello Express");
});

//In ES6
app.get("/", (req, res) =>{
    res.send("Hello Express")
});































 module.exports = app;
