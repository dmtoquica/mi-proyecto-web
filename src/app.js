// src/app.js
const express = require('express');
const app = express();
const taskRoutes = require('./routes/task.routes');

// Middlewares
app.use(express.json()); // Para que Express entienda JSON

// Rutas
app.use('/api/tasks', taskRoutes);

// Endpoint de prueba
app.get('/', (req, res) => {
    res.send('API de Tareas está funcionando!');
});

module.exports = app; // Exportamos la app para las pruebas