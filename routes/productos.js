const express = require('express');
const axios = require('axios');

const router = express.Router();
const productosApi = 'http://localhost:3002/productos';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(productosApi);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: error.message });
  }
});

module.exports = router;