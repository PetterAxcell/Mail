const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const { createConnection } = require('mysql');
const app = express()


//--------- Database -------
const pool = createConnection({
    host:'localhost',
    user:'root',
    password:'Ariannaj15',
    database:'mail',
    connectionlimit:10
})

var values = ['aitor','tilla', 'example1@gmial.com', '4312']



pool.query('select * from users', (err, res, fields)=>{
    if(err){

        return console.log(err);
    }})


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
    values = [req.body.name, req.body.surname, req.body.mail, req.body.pass]
    console.log(values)
    var sql = "INSERT INTO users (Name, LastName, Mail, Password) VALUES (?)";
    pool.query(sql, [values], (err, res)=>{
        if(err){return console.log(err);}})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});