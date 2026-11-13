
// Carga Express y las rutas de cada recurso.
const express = require('express');
const routesProductos = require('./routes/routesProductos.js');
const routesCategoria = require('./routes/routesCategoria.js')

// Crea la aplicación y permite recibir cuerpos de solicitud en formato JSON.
const app = express();
app.use(express.json());

// Agrupa los endpoints de productos bajo el prefijo /productos.
app.use('/productos', routesProductos);

// Agrupa los endpoints de categorías bajo el prefijo /categorias.
app.use('/categorias',routesCategoria);

// Responde con 404 cuando ninguna ruta anterior coincide con la solicitud.
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Middleware de errores de Express: registra el detalle y devuelve un error genérico.
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

// Exporta la aplicación para que main.js pueda iniciar el servidor.
module.exports = app;
