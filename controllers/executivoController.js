const Executivo = require('../model/Executivo');
const db = require('../service/db');

exports.registerExecutivo = (req, res) => {
  const { nome, email, senha, clube } = req.body;
  if (!nome || !email || !senha || !clube) {
    return res.status(400).json({ message: 'Dados obrigatórios ausentes.' });
  }
  if (db.executivos.find(e => e.email === email)) {
    return res.status(409).json({ message: 'Executivo já cadastrado.' });
  }
  const executivo = new Executivo(Date.now().toString(), nome, email, senha, clube);
  db.executivos.push(executivo);
  res.status(201).json(executivo);
};
