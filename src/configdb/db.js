
//1. Importar la librería pg
const {Pool} = require('pg');
//Traer las variables de entorno
const dotenv = require('dotenv');
dotenv.config();

//2. Crear un pool de conexiones a la base de datos
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// 3. Exportar el pool para poder usarlo en otros archivos
module.exports = pool;