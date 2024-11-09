const express = require('express');
const router = express.Router();
const detalleAtencionControlador = require('../controladores/detalleAtencionControlador');

router.get('/', detalleAtencionControlador.obtenerDetalleAtenciones);
router.get('/:id', detalleAtencionControlador.obtenerDetalleAtencionPorID);
router.post('/', detalleAtencionControlador.crearDetalleAtencion);
router.put('/:id', detalleAtencionControlador.actualizarDetalleAtencion);
router.delete('/:id', detalleAtencionControlador.eliminarDetalleAtencion);

module.exports = router;

