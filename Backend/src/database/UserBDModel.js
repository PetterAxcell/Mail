const { createConnection } = require('mysql');

const pool = createConnection({
    host:'localhost',
    user:'root',
    password:'Ariannaj15',
    database:'minimail',
    connectionlimit:10
})

const addUserModel = (body) => {
    values = [body.name, body.surname, body.mail, body.pass]
    var sql = "INSERT INTO users (Name, Lastname, Mail, Password) VALUES (?)";
    pool.query(sql, [values], (err, res)=>{
        if(err){return console.log(err);}})
    return 'DB';
}

module.exports = {
    addUserModel
}