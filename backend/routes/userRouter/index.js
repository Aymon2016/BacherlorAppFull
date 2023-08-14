const express = require("express");
const LoginController = require("../../controllers/userController/loginController");
const RegisterContoller = require('../../controllers/userController/registerController')
const AuthenticateController = require('../../controllers/userController/AuthenticateController')
const userInfo = require('../../controllers/userController/userInfo')
const GetUserController = require('../../controllers/userController/GetUserController')
const router = express.Router();


router.get('/users', GetUserController)
router.post('/users/login', LoginController)
router.post('/users/register', RegisterContoller)
router.get('/users/authenticate', AuthenticateController)
router.get('/users/info/:userID', userInfo)


module.exports = router;