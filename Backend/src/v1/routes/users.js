const express = require('express');
const router = express.Router();
const userController = require("../../controllers/userController");


router
    .get("/",  userController.pruebaController)
    .post("/signup", userController.addUserController)
    .post("/signin", userController.validateUser)
    .get("/main/:id", userController.searchMailsController);

module.exports = router;