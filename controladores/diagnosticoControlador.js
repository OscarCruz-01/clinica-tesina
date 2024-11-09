const Diagnostico = require('../modelos/diagnosticoModelo');

const obtenerDiagnosticos = async (req, res) => {
    const diagnosticos = await Diagnostico.findAll();
    res.json(diagnosticos);
};

const obtenerDiagnosticoPorID = async (req, res) => {
    const diagnostico = await Diagnostico.findByPk(req.params.id);
    res.json(diagnostico);
};

const crearDiagnostico = async (req, res) => {
    const nuevoDiagnostico = await Diagnostico.create(req.body);
    res.json(nuevoDiagnostico);
};

const actualizarDiagnostico = async (req, res) => {
    await Diagnostico.update(req.body, { where: { id_diagnostico: req.params.id } });
    res.sendStatus(200);
};

const eliminarDiagnostico = async (req, res) => {
    await Diagnostico.destroy({ where: { id_diagnostico: req.params.id } });
    res.sendStatus(200);
};

module.exports = {
    obtenerDiagnosticos,
    obtenerDiagnosticoPorID,
    crearDiagnostico,
    actualizarDiagnostico,
    eliminarDiagnostico
};

