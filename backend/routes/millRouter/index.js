

const express = require("express");
const router = express.Router();

const createMillController = require('../../controllers/millController/createMillController')
const getAllMillContoller = require('../../controllers/millController/getAllMillController')
const getOneUserMillController = require('../../controllers/millController/getOneUserMillController')
const deleteMillController = require('../../controllers/millController/deleteMillController')
// const authenticationMidleware = require('../../middlewares/authentication/authentication')


router.post('/mills', createMillController)
router.get('/mills', getAllMillContoller)
router.get('/:authorID/mills', getOneUserMillController)
router.delete('/mills/:id', deleteMillController)

module.exports = router;
