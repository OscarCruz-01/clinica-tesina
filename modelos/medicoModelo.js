const { DataTypes } = require('sequelize');
const sequelize = require('../config/baseDatos');

const Medico = sequelize.define('Medico', {
    id_medico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 25
        }
    },
    especialidad: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    numeroConsultorio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    horario: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    telefono: {
        type: DataTypes.CHAR(9),
        allowNull: false
    },
    estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 99
    }
}, {
    tableName: 'medicos',
    timestamps: false
});

module.exports = Medico;
