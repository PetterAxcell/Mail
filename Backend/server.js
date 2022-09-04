const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get( '/', (req, response)=>{
    response.writeHead(200, { 'Content-Type': 'text/html charset=utf-8' });
    response.write("misko");
    response.end();
})

app.post('/signup', (req, res)=>{
    console.log(req.body)
    res.send("r")
})
console.log("Im hearing...")

app.listen(3000)