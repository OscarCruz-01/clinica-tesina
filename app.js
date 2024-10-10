const express = require('express');
const bodyParser = require('body-parser');
const pacientesRutas = require('./rutas/pacientes');  // Rutas de pacientes

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());  // Para recibir datos en formato JSON

// Rutas
app.use('/api', pacientesRutas);  // Usa las rutas para /api

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
