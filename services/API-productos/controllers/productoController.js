const Producto = require('../models/producto');

// Obtener todos los productos
exports.obtenerProductos = (req, res) => {
  Producto.obtenerTodos((err, result) => {
    if (err) {
      console.error('Error al obtener los productos:', err);
      res.status(500).json({ error: 'Error al obtener los productos' });
      return;
    }

    res.json(result);
  });
};

// Crear un nuevo producto
exports.crearProducto = (req, res) => {
  const { nombre, precio } = req.body;

  const nuevoProducto = {
    nombre,
    precio
  };

  Producto.crear(nuevoProducto, (err, result) => {
    if (err) {
      console.error('Error al crear el producto:', err);
      res.status(500).json({ error: 'Error al crear el producto' });
      return;
    }

    res.json({ mensaje: 'Producto creado exitosamente' });
  });
};
