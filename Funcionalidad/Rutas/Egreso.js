const express = require ('express');
const router = express.Router();
const controlador = require('../Servicios/Egreso/Controlador');

router.post('/crear-egreso',controlador.crearEgreso); 

module.exports = router; 