const express = require('express');
const router = express.Router();
const jogadorController = require('../controllers/jogadorController');
const { authenticate } = require('../service/authMiddleware');

router.post('/', authenticate('admin'), jogadorController.registerJogador);
router.get('/', authenticate('executivo'), jogadorController.getJogadores);

module.exports = router;
