const userService = require("../services/userService");

const pruebaController = (req, res) => {
    console.log(req.params.id);
};
const addUserController = (req, res) => {
    const {body} = req;
    const addedUser = userService.addUser(body);
    res.status(201).send(body);
};

async function validateUser(req, res){
    const {body} = req;
    const userValidated = await userService.userValidated(body);
    res.status(200).send(userValidated.ID.toString());
};

async function sendEmail(req, res){
    const {body} = req;
    if (await userService.getUserById(body)!== undefined &&
        await userService.getUserByEmail(body.to) !== undefined) 
    {
        const {Mail} = await userService.getUserById(body);
        const {ID} = await userService.getUserByEmail(body.to)
        body['from'] = Mail;
        body['to_id'] = parseInt(ID);
        await userService.addEmail(body);
        res.status(201).send(body);
    }
}

async function deleteEmail(req, res){
    const{body} = req;
    await userService.deleteEmail(body)
    res.status(200).send(body);
}

async function searchMailsController(req, res){
    const {url} = req;
    body = url.split("/")[2];
    const userValidated = await userService.searchMailsService(body);
    res.status(200).send(userValidated);
};

module.exports = {
    pruebaController,
    addUserController,
    validateUser,
    searchMailsController,
    sendEmail,
    deleteEmail
}