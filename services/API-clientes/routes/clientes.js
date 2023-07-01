const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');


router.get('/', clienteController.obtenerClientes);
router.post('/', clienteController.crearCliente);
router.delete('/:id', clienteController.eliminarCliente);

module.exports = router;