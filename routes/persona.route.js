//CONTROLADOR PARA EL MANEJO DEL CRUD

const personaCtrl = require('./../controllers/persona.controller');

//MANEJADOR DE RUTAS
const express = require('express');
const router = express.Router();

//RUTAS PARA LA GESTION DE LIBRO

router.post('/', personaCtrl.createPersona);
router.get('/', personaCtrl.getPersonas);
router.get('/:id', personaCtrl.getPersona);

//EXPORTAMOS EL MODULO DE RUTAS
module.exports = router;