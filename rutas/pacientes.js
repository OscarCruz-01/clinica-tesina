
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
router.get('/pacientes', obtenerPacientes);
router.get('/pacientes/:id', obtenerPacientePorID);
router.post('/pacientes', crearPaciente);
router.put('/pacientes/:id', actualizarPaciente);
router.delete('/pacientes/:id', eliminarPaciente);



module.exports = router;

