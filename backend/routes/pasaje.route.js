//CONTROLADOR PARA EL MANEJO DEL CRUD

const pasajeCtrl = require('./../controllers/pasaje.controller');

//MANEJADOR DE RUTAS
const express = require('express');
const router = express.Router();

//RUTAS PARA LA GESTION DE LIBRO
router.post('/', pasajeCtrl.createPasaje);
router.get('/', pasajeCtrl.getPasajes);
router.delete('/:id', pasajeCtrl.deletePasaje);
router.put('/:id', pasajeCtrl.editPasaje);
router.get('/:categoriaPasajero', pasajeCtrl.getPasaje);

//EXPORTAMOS EL MODULO DE RUTAS
module.exports = router;