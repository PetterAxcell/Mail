const express = require('express');
const router = express.Router();
const userController = require("../../controllers/userController");


router
    .get("/",  userController.pruebaController)
    .post("/signup", userController.addUserController);

module.exports = router;