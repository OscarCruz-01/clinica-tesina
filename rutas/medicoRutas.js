const express = require('express');
const router = express.Router();
const medicoControlador = require('../controladores/medicosControlador');

// Rutas para médicos
router.post('/', medicoControlador.crearMedico);
router.get('/', medicoControlador.obtenerMedicos);
router.get('/:id', medicoControlador.obtenerMedicoPorId);
router.put('/:id', medicoControlador.actualizarMedico);
router.delete('/:id', medicoControlador.eliminarMedico);

module.exports = router;
