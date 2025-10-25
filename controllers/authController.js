const db = require('../service/db');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../service/authMiddleware');

exports.login = (req, res) => {
  const { email, senha } = req.body;
  const user = db.admins.find(a => a.email === email && a.senha === senha) ||
               db.executivos.find(e => e.email === email && e.senha === senha);
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
};
