// controladores/tipoAtencionControlador.js
const TipoAtencion = require('../modelos/tipoAtencionModelo');

// Obtener todos los tipos de atención
const obtenerTiposAtencion = async (req, res) => {
    try {
        const tiposAtencion = await TipoAtencion.findAll();
        res.json(tiposAtencion);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener tipos de atención' });
    }
};

// Crear un nuevo tipo de atención
const crearTipoAtencion = async (req, res) => {
    try {
        const { nombre_atencion } = req.body;
        const nuevoTipo = await TipoAtencion.create({ nombre_atencion });
        res.status(201).json(nuevoTipo);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear tipo de atención' });
    }
};

module.exports = {
    obtenerTiposAtencion,
    crearTipoAtencion
};
