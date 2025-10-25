const express = require('express');
const router = express.Router();
const executivoController = require('../controllers/executivoController');

router.post('/', executivoController.registerExecutivo);

module.exports = router;
