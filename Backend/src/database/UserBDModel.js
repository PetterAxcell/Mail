const { createConnection } = require('mysql2');

const pool = createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'minimail',
    port: 3342,
    connectionlimit:10
})

const addEmail = (body)=>{
    values = [body.subject, body.from, body.to, body.message, body.to_id]
    var sql = "INSERT INTO emails (Subject, From_user, To_user, Message, ID_User) VALUES (?)";
    pool.query(sql, [values], (err, res)=>{
        if(err){return console.log(err);}})
    return true;
}

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

const getUserByEmail = (mail) => {
    let p = new Promise((resolve, reject) => { 
        var sql = "SELECT * FROM users WHERE Mail = ?";
        let ret = pool.query(sql, 
            [mail], (err, res)=>{
            if(err){return console.log(err);}
            resolve(res);
        })
    })
    return p;
}

const getUserById = (id) => {
    let p = new Promise((resolve, reject) => { 
        var sql = "SELECT * FROM users WHERE Id = ?";
        let ret = pool.query(sql, 
            [id], (err, res)=>{
            if(err){return console.log(err);}
            resolve(res);
        })
    })
    return p;
}

const searchMailsModel = (id) => {
    let p = new Promise((resolve, reject) => { 
        var sql = "SELECT * FROM emails Where ID_User = ?";
        let ret = pool.query(sql, 
            [id], (err, res)=>{
            resolve(res);
        })
    })
    return p;

}


module.exports = {
    addUserModel,
    getUserModel,
    searchMailsModel, 
    addEmail,
    getUserById,
    getUserByEmail
}