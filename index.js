//Crear un servidor básico de Express
const express = require('express');

const app = express();
const routerApi = require('./routes')
const PORT = process.env.PORT || 3000;

//Permitir tráfico en formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//Definir las rutas de la aplicación
routerApi(app);

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});