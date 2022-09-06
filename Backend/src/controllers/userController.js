const userService = require("../services/userService");

const pruebaController = (req, res) => {
    const prueba = userService.pruebaService();
    res.send(prueba);
};
const addUserController = (req, res) => {
    const {body} = req;
    const addedUser = userService.addUser(body);
    res.status(201).send(body);
};

module.exports = {
    pruebaController,
    addUserController
}