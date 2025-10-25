const express = require('express');
const router = express.Router();
const posicaoController = require('../controllers/posicaoController');
const { authenticate } = require('../service/authMiddleware');

router.get('/', posicaoController.getPosicoes);
router.post('/', authenticate('admin'), posicaoController.registerPosicao);

module.exports = router;
