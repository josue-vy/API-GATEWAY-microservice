const express = require('express');
const axios = require('axios');

const router = express.Router();
const clientesApi = 'http://localhost:3001/clientes';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(clientesApi);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: error.message });
  }
});

module.exports = router;