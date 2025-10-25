class Jogador {
  constructor({
    id,
    nomeCompleto,
    apelido,
    dataNascimento,
    inicioContrato,
    fimContrato,
    multaRescisoria,
    clubeAtual,
    caracteristicas = [],
    posicoes = []
  }) {
    this.id = id;
    this.nomeCompleto = nomeCompleto;
    this.apelido = apelido;
    this.dataNascimento = dataNascimento;
    this.inicioContrato = inicioContrato;
    this.fimContrato = fimContrato;
    this.multaRescisoria = multaRescisoria;
    this.clubeAtual = clubeAtual;
    this.caracteristicas = caracteristicas;
    this.posicoes = posicoes;
  }
}
module.exports = Jogador;
