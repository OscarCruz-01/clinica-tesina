// rutas/tipoAtencionRutas.js
const express = require('express');
const router = express.Router();
const { obtenerTiposAtencion, crearTipoAtencion } = require('../controladores/tipoAtencionControlador');

router.get('/tipoAtencion', obtenerTiposAtencion); // Ruta para obtener tipos de atención
router.post('/tipoAtencion', crearTipoAtencion);   // Ruta para crear un nuevo tipo de atención

module.exports = router;


