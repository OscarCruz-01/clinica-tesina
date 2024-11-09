// modelos/tipoAtencion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/baseDatos'); // Asegúrate de que esta ruta coincida con la configuración de la base de datos

const TipoAtencion = sequelize.define('TipoAtencion', {
    id_tipoatencion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_atencion: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
}, {
    tableName: 'TipoAtencion',
    timestamps: false, // Opcional: elimina las columnas de timestamps (createdAt, updatedAt)
});

module.exports = TipoAtencion;
