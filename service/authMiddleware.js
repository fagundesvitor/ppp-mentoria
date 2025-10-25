const jwt = require('jsonwebtoken');
const SECRET_KEY = 'ppp-mentoria-secret';

function authenticate(roleRequired) {
  return (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token não fornecido.' });
    }
    const token = authHeader.split(' ')[1];
    try {
      const payload = jwt.verify(token, SECRET_KEY);
      if (roleRequired && payload.role !== roleRequired) {
        return res.status(403).json({ message: 'Acesso negado para este papel.' });
      }
      req.user = payload;
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Token inválido.' });
    }
  };
}

module.exports = { authenticate, SECRET_KEY };
