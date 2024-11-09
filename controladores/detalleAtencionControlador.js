
const DetalleAtencion = require('../modelos/detalleAtencionModelo');

const obtenerDetalleAtenciones = async (req, res) => {
    const detalleAtenciones = await DetalleAtencion.findAll();
    res.json(detalleAtenciones);
};

const obtenerDetalleAtencionPorID = async (req, res) => {
    const detalleAtencion = await DetalleAtencion.findByPk(req.params.id);
    res.json(detalleAtencion);
};

const crearDetalleAtencion = async (req, res) => {
    const nuevoDetalleAtencion = await DetalleAtencion.create(req.body);
    res.json(nuevoDetalleAtencion);
};

const actualizarDetalleAtencion = async (req, res) => {
    await DetalleAtencion.update(req.body, { where: { id_detalleAtencion: req.params.id } });
    res.sendStatus(200);
};

const eliminarDetalleAtencion = async (req, res) => {
    await DetalleAtencion.destroy({ where: { id_detalleAtencion: req.params.id } });
    res.sendStatus(200);
};

module.exports = {
    obtenerDetalleAtenciones,
    obtenerDetalleAtencionPorID,
    crearDetalleAtencion,
    actualizarDetalleAtencion,
    eliminarDetalleAtencion
};

