//Llamar a dotenv para variables de entorno
require('dotenv').config();

//Llamar a la aplicacion de express
const app = require('./src/app.js');

//Encender el servidor en el puerto del .env (o 3000 si no existe)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});
