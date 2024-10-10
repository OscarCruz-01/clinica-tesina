const { Sequelize } = require('sequelize');

// Configuración de conexión a SQL Server
const sequelize = new Sequelize('clinica_tesina', 'userClinica', 'clinica2024', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: false,  // Para servidores locales
            enableArithAbort: true
        }
    }
});

// Probar la conexión
sequelize.authenticate()
    .then(() => {
        console.log('Conectado a SQL Server');
    })
    .catch(err => {
        console.error('Error de conexión a SQL Server', err);
    });

module.exports = sequelize;

