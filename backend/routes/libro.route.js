//CONTROLADOR PARA EL MANEJO DEL CRUD

const libroCtrl = require('./../controllers/libro.controller');

//MANEJADOR DE RUTAS
const express = require('express');
const router = express.Router();

//RUTAS PARA LA GESTION DE LIBRO
router.get('/', libroCtrl.getLibros);
router.post('/', libroCtrl.createLibro);
router.get('/:destacado', libroCtrl.getLibro);
//router.put('/:id', libroCtrl.editLibro);
//router.delete('/:id', libroCtrl.deleteLibro);

//EXPORTAMOS EL MODULO DE RUTAS
module.exports = router;