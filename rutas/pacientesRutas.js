
const express = require('express');
const router = express.Router();
const {
    obtenerPacientes,
    obtenerPacientePorID,
    crearPaciente,
    actualizarPaciente,
    eliminarPaciente
} = require('../controladores/pacientesControlador');

// Rutas de pacientes
router.get('/', obtenerPacientes);
router.get('/:id', obtenerPacientePorID);
router.post('/', crearPaciente);
router.put('/:id', actualizarPaciente);
router.delete('/:id', eliminarPaciente);



module.exports = router;

