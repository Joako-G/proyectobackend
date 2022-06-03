//CONTROLADOR PARA EL MANEJO DEL CRUD

const transaccionCtrl = require('./../controllers/transaccion.controller');

//MANEJADOR DE RUTAS
const express = require('express');
const router = express.Router();

//RUTAS PARA LA GESTION DE LIBRO
router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/:emailCliente', transaccionCtrl.getTransaccion);
router.get('/filtro/:monedaOrigen&:monedaDestino', transaccionCtrl.getTransaccionXod);

//EXPORTAMOS EL MODULO DE RUTAS
module.exports = router;