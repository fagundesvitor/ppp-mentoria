const Admin = require('../model/Admin');
const db = require('../service/db');

exports.registerAdmin = (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Dados obrigatórios ausentes.' });
  }
  if (db.admins.find(a => a.email === email)) {
    return res.status(409).json({ message: 'Admin já cadastrado.' });
  }
  const admin = new Admin(Date.now().toString(), nome, email, senha);
  db.admins.push(admin);
  res.status(201).json(admin);
};
