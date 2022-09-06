const UserBD = require("../database/UserBDModel");

const pruebaService = ()=>{
    return "misko";
};
const addUser = (body)=>{
    const allUsersBD = UserBD.addUserModel(body);
    return allUsersBD;
};

module.exports = {
    pruebaService,
    addUser
};