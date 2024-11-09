const Medico = require('../modelos/medicoModelo');

// Crear un médico
exports.crearMedico = async (req, res) => {
    try {
        const nuevoMedico = await Medico.create(req.body);
        res.json(nuevoMedico);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el médico' });
    }
};

// Obtener todos los médicos
exports.obtenerMedicos = async (req, res) => {
    try {
        const medicos = await Medico.findAll();
        res.json(medicos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los médicos' });
    }
};

// Obtener un médico por ID
exports.obtenerMedicoPorId = async (req, res) => {
    try {
        const medico = await Medico.findByPk(req.params.id);
        if (medico) {
            res.json(medico);
        } else {
            res.status(404).json({ error: 'Médico no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el médico' });
    }
};

// Actualizar un médico
exports.actualizarMedico = async (req, res) => {
    try {
        const medico = await Medico.findByPk(req.params.id);
        if (medico) {
            await medico.update(req.body);
            res.json(medico);
        } else {
            res.status(404).json({ error: 'Médico no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el médico' });
    }
};

// Eliminar un médico
exports.eliminarMedico = async (req, res) => {
    try {
        const medico = await Medico.findByPk(req.params.id);
        if (medico) {
            await medico.destroy();
            res.json({ mensaje: 'Médico eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Médico no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el médico' });
    }
};
