var express = require('express');
var router = express.Router();
// const verifyToken = require("../utils/verify"); 

const categoriesController = require("../controllers/categoriesControllers");

router.get('/', categoriesController.getAll);

router.post('/', /* verifyToken, */ categoriesController.create);

module.exports = router;
 