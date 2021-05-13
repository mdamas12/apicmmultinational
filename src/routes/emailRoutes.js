const express = require("express");
const EmailRoutes = express.Router();
const EmailsController = require("../controllers/emailsController");


// Routes
EmailRoutes.post("/", EmailsController.send);
//UserRoutes.post("/login",UsersController.signIn);
//UserRoutes.post("/register",UsersController.signUp);
//UserRoutes.get("/validate",UsersController.validate);

module.exports = EmailRoutes;
