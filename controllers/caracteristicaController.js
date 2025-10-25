const Caracteristica = require('../model/Caracteristica');
const db = require('../service/db');

exports.getCaracteristicas = (req, res) => {
  res.json(db.caracteristicas);
};

exports.registerCaracteristica = (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ message: 'Nome obrigatório.' });
  if (db.caracteristicas.find(c => c.nome === nome)) return res.status(409).json({ message: 'Característica já cadastrada.' });
  const caracteristica = new Caracteristica(nome);
  db.caracteristicas.push(caracteristica);
  res.status(201).json(caracteristica);
};
