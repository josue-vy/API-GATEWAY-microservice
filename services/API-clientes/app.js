const express = require('express');
const bodyParser = require('body-parser');
const clientesRouter = require('./routes/clientes');

const app = express();

// Configuración de middleware
app.use(bodyParser.json());

// Rutas
app.use('/clientes', clientesRouter);

// Puerto de escucha
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});