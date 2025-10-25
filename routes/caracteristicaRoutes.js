const express = require('express');
const router = express.Router();
const caracteristicaController = require('../controllers/caracteristicaController');
const { authenticate } = require('../service/authMiddleware');

router.get('/', caracteristicaController.getCaracteristicas);
router.post('/', authenticate('admin'), caracteristicaController.registerCaracteristica);

module.exports = router;
