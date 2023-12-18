var express = require('express');
var router = express.Router();

const usuariosController = require ("../controllers/usersControllers")


/* GET users listing. */
router.post ("/", usuariosController.create)
router.post ("/auth", usuariosController.auth)

module.exports = router;
