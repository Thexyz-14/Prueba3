const express = require ('express');
const router = express.Router();
const controlador = require('../Servicios/Usuario/Controlador');

router.post('/crear-Usuario',controlador.crearUsuario); 

module.exports = router; 