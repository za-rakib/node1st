var express = require('express')

var app = express()

 app.get('/',(req ,res)=>{
     res.send("Thanks for calling me")
 })
app.listen(3000,()=>console.log("Listing to port 3000"))