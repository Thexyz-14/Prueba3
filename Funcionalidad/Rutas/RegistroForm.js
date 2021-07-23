const express = require ('express');
const router = express.Router();
const controlador = require('../Servicios/RegistroForm/Controlador');

router.post('/crear-registro',controlador.crearRegistroForm); 

module.exports = router; 