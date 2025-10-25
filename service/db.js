const Admin = require('../model/Admin');
const Executivo = require('../model/Executivo');
const Jogador = require('../model/Jogador');
const Caracteristica = require('../model/Caracteristica');
const Posicao = require('../model/Posicao');

const db = {
  admins: [],
  executivos: [],
  jogadores: [],
  caracteristicas: [
    new Caracteristica('ofensivo'),
    new Caracteristica('defensivo'),
    new Caracteristica('rápido'),
    new Caracteristica('lento'),
    new Caracteristica('pesado'),
    new Caracteristica('bom de bola aérea'),
    new Caracteristica('boa visão de jogo')
  ],
  posicoes: []
};

module.exports = db;
