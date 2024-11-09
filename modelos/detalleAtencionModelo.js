const { DataTypes } = require('sequelize');
const sequelize = require('../config/baseDatos');

const Paciente = require('./pacienteModelo');
const Medico = require('./medicoModelo');
const TipoAtencion = require('./tipoAtencionModelo');
const Diagnostico = require('./diagnosticoModelo');

const DetalleAtencion = sequelize.define('DetalleAtencion', {
    id_detalleAtencion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        references: { model: Paciente, key: 'id_paciente' }
    },
    id_medico: {
        type: DataTypes.INTEGER,
        references: { model: Medico, key: 'id_medico' }
    },
    id_tipoAtencion: {
        type: DataTypes.INTEGER,
        references: { model: TipoAtencion, key: 'id_tipoatencion' }
    },
    id_diagnostico: {
        type: DataTypes.INTEGER,
        references: { model: Diagnostico, key: 'id_diagnostico' }
    },
    duracion: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false
    },
    receta: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    visitaFutura: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    fechaVisitaFutura: {
        type: DataTypes.DATE,
        allowNull: true
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'DetalleAtencion',
    timestamps: false
});

module.exports = DetalleAtencion;
