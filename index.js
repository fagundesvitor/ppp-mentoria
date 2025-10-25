const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./recursos/swagger.json');
const { authenticate } = require('./service/authMiddleware');
const db = require('./service/db');
const Admin = require('./model/Admin');
const Executivo = require('./model/Executivo');
const Jogador = require('./model/Jogador');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./service/authMiddleware');

const app = express();
app.use(express.json());

// Endpoint para renderizar o Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Registro de admin
app.post('/admin', (req, res) => {
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
});

// Registro de executivo
app.post('/executivo', (req, res) => {
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
});

// Login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const user = db.admins.find(a => a.email === email && a.senha === senha) ||
               db.executivos.find(e => e.email === email && e.senha === senha);
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Cadastro de jogador (admin)
app.post('/jogadores', authenticate('admin'), (req, res) => {
  const jogador = new Jogador({ ...req.body, id: Date.now().toString() });
  db.jogadores.push(jogador);
  res.status(201).json(jogador);
});

// Consulta de jogadores (executivo)
app.get('/jogadores', authenticate('executivo'), (req, res) => {
  let jogadores = db.jogadores;
  const { nomeCompleto, apelido, clubeAtual } = req.query;
  if (nomeCompleto) jogadores = jogadores.filter(j => j.nomeCompleto.includes(nomeCompleto));
  if (apelido) jogadores = jogadores.filter(j => j.apelido.includes(apelido));
  if (clubeAtual) jogadores = jogadores.filter(j => j.clubeAtual.includes(clubeAtual));
  res.json(jogadores);
});

// Características e posições
app.get('/caracteristicas', (req, res) => {
  res.json(db.caracteristicas);
});

// Cadastro de característica (admin)
app.post('/caracteristicas', authenticate('admin'), (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ message: 'Nome obrigatório.' });
  if (db.caracteristicas.find(c => c.nome === nome)) return res.status(409).json({ message: 'Característica já cadastrada.' });
  const Caracteristica = require('./model/Caracteristica');
  const caracteristica = new Caracteristica(nome);
  db.caracteristicas.push(caracteristica);
  res.status(201).json(caracteristica);
});
app.get('/posicoes', (req, res) => {
  res.json(db.posicoes);
});
app.post('/posicoes', authenticate('admin'), (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ message: 'Nome obrigatório.' });
  if (db.posicoes.find(p => p.nome === nome)) return res.status(409).json({ message: 'Posição já cadastrada.' });
  const posicao = new Posicao(nome);
  db.posicoes.push(posicao);
  res.status(201).json(posicao);
});

// Inicialização
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
