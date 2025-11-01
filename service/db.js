const Admin = require('../model/Admin');
const Executivo = require('../model/Executivo');
const Jogador = require('../model/Jogador');
const Caracteristica = require('../model/Caracteristica');
const Posicao = require('../model/Posicao');

const db = {
  admins: [
    new Admin(1, 'Julio de Lima', 'julio@email.com', '123')
  ],
  executivos: [
    new Executivo(1, 'Vitor Fagundes', 'vitor@email.com', '123', 'Clube A')
  ],
  jogadores: [
    new Jogador({
      id: 1,
      nomeCompleto: "João da Silva",
      apelido: "Da Silva",
      dataNascimento: "1989-10-26",
      inicioContrato: "2025-01-01",
      fimContrato: "2025-12-31",
      multaRescisoria: 50000,
      clubeAtual: "Clube B",
      caracteristicas: ["rápido", "bom de bola aérea"],
      posicoes: ["volante"]
    }),
    new Jogador({
      id: 2,
      nomeCompleto: "Bianca Costa",
      apelido: "Bia",
      dataNascimento: "1995-03-12",
      inicioContrato: "2024-01-01",
      fimContrato: "2026-12-31",
      multaRescisoria: 70000,
      clubeAtual: "Clube C",
      caracteristicas: ["defensivo", "pesado"],
      posicoes: ["zagueiro"]
    })
  ],
  caracteristicas: [
    // Velocidade
    new Caracteristica('Velocidade - Lento'),
    new Caracteristica('Velocidade - Médio'),
    new Caracteristica('Velocidade - Rápido'),

    // Porte
    new Caracteristica('Porte - Pequeno'),
    new Caracteristica('Porte - Médio'),
    new Caracteristica('Porte - Grande'),

    // Temperamento
    new Caracteristica('Temperamento - Calmo'),
    new Caracteristica('Temperamento - Agitado'),
    new Caracteristica('Temperamento - Brincalhão'),

    // Nível de Energia
    new Caracteristica('Nível de Energia - Baixo'),
    new Caracteristica('Nível de Energia - Médio'),
    new Caracteristica('Nível de Energia - Alto'),

    // Necessidade de Cuidados
    new Caracteristica('Necessidade de Cuidados - Baixo'),
    new Caracteristica('Necessidade de Cuidados - Médio'),
    new Caracteristica('Necessidade de Cuidados - Alto'),

    // Habilidade Técnica
    new Caracteristica('Habilidade Técnica - Baixa'),
    new Caracteristica('Habilidade Técnica - Média'),
    new Caracteristica('Habilidade Técnica - Alta'),

    // Finalização
    new Caracteristica('Finalização - Fraca'),
    new Caracteristica('Finalização - Regular'),
    new Caracteristica('Finalização - Forte'),

    // Marcação
    new Caracteristica('Marcação - Fraca'),
    new Caracteristica('Marcação - Regular'),
    new Caracteristica('Marcação - Forte'),

    // Jogo Aéreo
    new Caracteristica('Jogo Aéreo - Fraco'),
    new Caracteristica('Jogo Aéreo - Regular'),
    new Caracteristica('Jogo Aéreo - Forte'),

    // Resistência Física
    new Caracteristica('Resistência Física - Baixa'),
    new Caracteristica('Resistência Física - Média'),
    new Caracteristica('Resistência Física - Alta'),

    // Liderança
    new Caracteristica('Liderança - Baixa'),
    new Caracteristica('Liderança - Média'),
    new Caracteristica('Liderança - Alta'),

    // Disciplina
    new Caracteristica('Disciplina - Baixa'),
    new Caracteristica('Disciplina - Média'),
    new Caracteristica('Disciplina - Alta'),

    // Visão de Jogo
    new Caracteristica('Visão de Jogo - Limitada'),
    new Caracteristica('Visão de Jogo - Boa'),
    new Caracteristica('Visão de Jogo - Excelente'),
  ],
  posicoes: [
    new Posicao("Goleiro"),
    new Posicao("Zagueiro"),
    new Posicao("Primeiro volante"),
    new Posicao("Segundo volante"),
    new Posicao("Lateral esquerdo"),
    new Posicao("Lateral direito"),
    new Posicao("Meia central"),
    new Posicao("Meia armador"),
    new Posicao("Ponta esquerdo"),
    new Posicao("Ponta direito"),
    new Posicao("Centroavante"),
    new Posicao("Segundo atacante"),
  ]
};

module.exports = db;