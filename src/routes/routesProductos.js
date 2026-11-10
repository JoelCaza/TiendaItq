//Llamar al Router de express (con llaves: solo traemos Router)
const { Router } = require('express');

//Llamamos al controlador de productos
const control = require('../Controllers/ControllerProducto.js');

const routesProductos = Router();

//Rutas de productos
routesProductos.get('/', control.listarProductos);
routesProductos.get('/:id', control.obtenerProductoPorId);
routesProductos.post('/', control.crearProducto);
routesProductos.put('/:id', control.actualizarProducto);
routesProductos.delete('/:id', control.eliminarProducto);

module.exports = routesProductos;
