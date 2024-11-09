const express = require('express');
const router = express.Router();
const diagnosticoControlador = require('../controladores/diagnosticoControlador');

router.get('/', diagnosticoControlador.obtenerDiagnosticos);
router.get('/:id', diagnosticoControlador.obtenerDiagnosticoPorID);
router.post('/', diagnosticoControlador.crearDiagnostico);
router.put('/:id', diagnosticoControlador.actualizarDiagnostico);
router.delete('/:id', diagnosticoControlador.eliminarDiagnostico);

module.exports = router;

