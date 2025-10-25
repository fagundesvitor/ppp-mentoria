const Jogador = require('../model/Jogador');
const db = require('../service/db');

exports.registerJogador = (req, res) => {
  const jogador = new Jogador({ ...req.body, id: Date.now().toString() });
  db.jogadores.push(jogador);
  res.status(201).json(jogador);
};

exports.getJogadores = (req, res) => {
  let jogadores = db.jogadores;
  const { nomeCompleto, apelido, clubeAtual } = req.query;
  if (nomeCompleto) jogadores = jogadores.filter(j => j.nomeCompleto.includes(nomeCompleto));
  if (apelido) jogadores = jogadores.filter(j => j.apelido.includes(apelido));
  if (clubeAtual) jogadores = jogadores.filter(j => j.clubeAtual.includes(clubeAtual));
  res.json(jogadores);
};
