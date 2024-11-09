const { DataTypes } = require('sequelize');
const sequelize = require('../config/baseDatos');

const Diagnostico = sequelize.define('Diagnostico', {
    id_diagnostico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreDiagnostico: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Diagnostico',
    timestamps: false
});

module.exports = Diagnostico;
