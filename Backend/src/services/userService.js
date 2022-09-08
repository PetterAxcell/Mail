const UserBD = require("../database/UserBDModel");

const pruebaService = ()=>{
    return "misko";
};
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

async function searchMailsService  (body) {
    try{
        const a = await UserBD.searchMailsModel(body)
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

module.exports = {
    pruebaService,
    addUser,
    userValidated,
    searchMailsService
};