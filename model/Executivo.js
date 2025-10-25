class Executivo {
  constructor(id, nome, email, senha, clube) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.clube = clube;
    this.role = 'executivo';
  }
}
module.exports = Executivo;
