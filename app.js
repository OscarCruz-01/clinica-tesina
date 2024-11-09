const express = require('express');
const bodyParser = require('body-parser');
const pacientesRutas = require('./rutas/pacientesRutas');     // Rutas de pacientes
const medicoRutas = require('./rutas/medicoRutas');       // Rutas de médicos
const tipoAtencionRutas = require('./rutas/tipoAtencionRutas'); // Rutas de tipos de atención
const detalleAtencionRutas = require('./rutas/detalleAtencionRutas');
const diagnosticoRutas = require('./rutas/diagnosticoRutas');


const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Para recibir datos en formato JSON

// Rutas
//app.use('/api', pacientesRutas); 

app.use('/api/pacientes', pacientesRutas);// Usa las rutas de pacientes
app.use('/api/medicos', medicoRutas);       // Usa las rutas de médicos
app.use('/api', tipoAtencionRutas); // Usa las rutas de tipos de atención
app.use('/api/detalleAtencion', detalleAtencionRutas); // Asegúrate de que esto esté aquí
app.use('/api/diagnostico', diagnosticoRutas);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
