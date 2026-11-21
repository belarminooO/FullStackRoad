
// Heranca > quando nos temos uma classe que herada de outra classe.
// ClassePai tem os seus atributos e a classe filha vai herdar todos os atributos do pai para alem dos seus proprios atributos.

class Usuario{
  nome: string;
  email: string;

  constructor(nome: string, email: string){
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario{
  cargo: string;
  nivel: number;

  //declaramnos no construtor nome e admin
  constructor(nome:string, email: string, cargo: string, nivel: number){
    super(nome, email); // chamando o construtor da classe pai.

    this.cargo = cargo;
    this.nivel = nivel;
  }
}

const usuario1 = new Admin("Belarmino", "teste@teste.com", "Dev", 1)
console.log(usuario1);
