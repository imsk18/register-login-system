const express = require("express")

const authController = require('../controller/auth.controller')

const AuthRouter = express.Router()

AuthRouter.post("/register",authController.registerController)
AuthRouter.post("/login",authController.loginController)


module.exports = AuthRouter

