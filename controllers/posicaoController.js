const Posicao = require('../model/Posicao');
const db = require('../service/db');

exports.getPosicoes = (req, res) => {
  res.json(db.posicoes);
};

exports.registerPosicao = (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ message: 'Nome obrigatório.' });
  if (db.posicoes.find(p => p.nome === nome)) return res.status(409).json({ message: 'Posição já cadastrada.' });
  const posicao = new Posicao(nome);
  db.posicoes.push(posicao);
  res.status(201).json(posicao);
};
