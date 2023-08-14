

const express = require("express");
const router = express.Router();

const createProductController = require('../../controllers/productController/createProductController')
const getAllProductContoller = require('../../controllers/productController/getAllProductController')
const getOneProductController = require('../../controllers/productController/getOneProductController')
const getUserProductController = require('../../controllers/productController/getUserProductController')
const deleteProductController = require('../../controllers/productController/deleteProductController')
// const authenticationMidleware = require('../../middlewares/authentication/authentication')

router.post('/products', createProductController)
router.get('/products', getAllProductContoller)
router.get('/products/:id', getOneProductController)
router.get('/:userID/products', getUserProductController)
router.delete('/products/:id', deleteProductController)

module.exports = router;

