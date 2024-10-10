const Paciente = require('../modelos/pacienteModelo');

// Obtener todos los pacientes
const obtenerPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    } catch (error) {
        res.status(500).send('Error al obtener los pacientes');
    }
};

// Obtener un paciente por ID
const obtenerPacientePorID = async (req, res) => {
    const { id } = req.params;
    try {
        const paciente = await Paciente.findByPk(id);
        if (!paciente) {
            return res.status(404).send('Paciente no encontrado');
        }
        res.json(paciente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Crear un nuevo paciente
const crearPaciente = async (req, res) => {
    const { nombres, apellido, edad, talla, peso, fechaNacimiento, DNI, estado } = req.body;
    try {
        // Verificar si ya existe un paciente con el mismo DNI
        const pacienteExistente = await Paciente.findOne({ where: { DNI } });
        if (pacienteExistente) {
            return res.status(400).json({ error: 'El DNI ya está en uso' });
        }
        
        // Crear un nuevo paciente si no existe duplicado
        const nuevoPaciente = await Paciente.create({
            nombres,
            apellido,
            edad,
            talla,
            peso,
            fechaNacimiento,
            DNI,
            estado
        });
        res.status(201).json(nuevoPaciente);
    } catch (error) {
        console.error('Error al crear paciente:', error);
        res.status(500).json({ error: 'Error al crear el paciente' });
    }
};


// Actualizar un paciente
const actualizarPaciente = async (req, res) => {
    const { id_paciente } = req.params;
    const { nombres, apellido, edad, talla, peso, fechaNacimiento, DNI, estado } = req.body;

    try {
        // Buscar el paciente por su ID
        const paciente = await Paciente.findByPk(id_paciente);
        if (!paciente) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }

        // Actualizar los campos del paciente
        await paciente.update({
            nombres,
            apellido,
            edad,
            talla,
            peso,
            fechaNacimiento,
            DNI,
            estado
        });

        res.status(200).json({ message: 'Paciente actualizado correctamente', paciente });
    } catch (error) {
        console.error('Error al actualizar paciente:', error);
        res.status(500).json({ error: 'Error al actualizar el paciente' });
    }
};

// Eliminar un paciente
const eliminarPaciente = async (req, res) => {
    const { id } = req.params;
    try {
        const paciente = await Paciente.findByPk(id);
        if (!paciente) {
            return res.status(404).send('Paciente no encontrado');
        }
        await paciente.destroy();
        res.send('Paciente eliminado exitosamente');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    obtenerPacientes,
    obtenerPacientePorID,
    crearPaciente,
    actualizarPaciente,
    eliminarPaciente
};
