const routerApi = require('./routes')
const express = require('express')
const my_app = express();
const mongoose = require('mongoose')
const port = 3000;

require('dotenv').config()
routerApi(my_app);

/* Ocupamos el puerto por el cual corre el proyecto */
my_app.listen(port, () => {
    console.log("Listening active the ", port);
});

/* Endpoint: http://localhost:3000 */
my_app.get('/', (req, res) => {
    res.send('Prueba de la api restful de Marvel');
})

/* conectamos con base de datos */
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('success connection with mongo'))
    .catch((error) => console.log('sucess connection with mongo'))