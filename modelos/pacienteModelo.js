const { DataTypes } = require('sequelize');
const sequelize = require('../config/baseDatos');

const Paciente = sequelize.define('Paciente', {
    id_paciente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    talla: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    peso: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    DNI: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'pacientes',
    timestamps: false
});

module.exports = Paciente;
