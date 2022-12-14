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

const getUserModel = (body) => {
    let p = new Promise((resolve, reject) => { 
        var sql = "SELECT * FROM users WHERE Mail = ? AND Password = ?";
        let ret = pool.query(sql, 
            [body.mail, body.pass], (err, res)=>{
            if(err){return console.log(err);}
            resolve(res);
        })
    })
    return p;
}

const searchMailsModel = (body) => {
    let p = new Promise((resolve, reject) => { 
        var sql = "SELECT * FROM emails Where ID_User = ?";
        let ret = pool.query(sql, 
            [body], (err, res)=>{
            resolve(res);
        })
    })
    return p;

}


module.exports = {
    addUserModel,
    getUserModel,
    searchMailsModel
}