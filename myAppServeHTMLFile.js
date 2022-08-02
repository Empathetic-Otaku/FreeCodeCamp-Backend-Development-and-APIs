let express = require('express');
let app = express();
//these first two lines create an express app object.
//several other ways to create an express app object tho.
//e.g: app.listen(port)


absolutePath = __dirname + "/views/index.html",

app.get("/", (req, res) =>{
    res.sendFile(absolutePath)
});















 module.exports = app;
