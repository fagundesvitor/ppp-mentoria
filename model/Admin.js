class Admin {
  constructor(id, nome, email, senha) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.role = 'admin';
  }
}
module.exports = Admin;
