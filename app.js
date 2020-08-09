var express = require('express')
var app = express()
var conn = require("./config/db")




app.listen(3500, () => {
    console.log("server started on port 3500")
})
