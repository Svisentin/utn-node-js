var express = require('express');
var router = express.Router();
const verifyToken = require("../utils/verify"); 

const productosController = require("../controllers/productosControllers");

router.get('/', productosController.getAll );

router.get('/:pepe', productosController.getById);

router.post('/', verifyToken, productosController.create);

router.put('/:id', verifyToken, productosController.update);

router.delete('/:id', verifyToken, productosController.deleteProduct); 

module.exports = router;
