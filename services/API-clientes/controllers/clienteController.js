const Cliente = require('../models/cliente');


exports.obtenerClientes = (req, res) => {
  Cliente.find()
    .then(clientes => res.json(clientes))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.crearCliente = (req, res) => {
  const nuevoCliente = new Cliente(req.body);
  nuevoCliente.save()
    .then(cliente => res.status(201).json(cliente))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.eliminarCliente = (req, res) => {
  Cliente.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(500).json({ error: err.message }));
};