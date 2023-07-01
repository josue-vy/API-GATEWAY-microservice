const express = require('express');
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

const app = express();
const port = 3000;

app.use('/api/clientes', clientesRouter);
app.use('/api/productos', productosRouter);

app.listen(port, () => {
  console.log(`API Gateway running on http://localhost:${port}`);
});
