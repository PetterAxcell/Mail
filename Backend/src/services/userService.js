const UserBD = require("../database/UserBDModel");

const pruebaService = ()=>{
    return "misko";
};
const addEmail = (body) => {
    return UserBD.addEmail(body)
}

async function getUserByEmail(email){
    try{
        const a = await UserBD.getUserByEmail(email)
        return a[0];
    }
    catch (err) {
        console.log(err);
    }
}
async function getUserById (body){
    const {id} = body;
    try{
        const a = await UserBD.getUserById(id)
        if(a.length == 0){
            return a[0];
        }
        else{
            return a[0];
        }
    }
    catch (err) {
        console.log(err);
    }
}
async function deleteEmail(body){
    body.id_emails.map(function(el){
        UserBD.deleteEmailById(el);
    })
    return true
}

const addUser = (body)=>{
    const allUsersBD = UserBD.addUserModel(body);
    return allUsersBD;
};
async function userValidated  (body) {
    try{
        const a = await UserBD.getUserModel(body)
        if(a.length == 0){
            return a[0];
        }
        else{
            return a[0];
        }
    }
    catch (err) {
        console.log(err);
    }
};

async function searchMailsService(body) {
    try{
        const a = await UserBD.searchMailsModel(body)
        if(a.length == 0) return a[0];
        return a;
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = {
    pruebaService,
    addUser,
    userValidated,
    searchMailsService,
    addEmail,
    getUserById,
    getUserByEmail,
    deleteEmail
};