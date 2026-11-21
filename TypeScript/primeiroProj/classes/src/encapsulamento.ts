/*
  4 modificadores: Public, Private, Protected, readonly(so em atributos).
*/

class Usuario{
  public nome: string;
  email: string; // o public ja esta por omissao, nao E necessario a escrita.

  constructor(nome: string, email: string){
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario{
  public cargo: string;
  public nivel: number;

  //declaramnos no construtor nome e admin
  constructor(nome:string, email: string, cargo: string, nivel: number){
    super(nome, email); // chamando o construtor da classe pai.

    this.cargo = cargo;
    this.nivel = nivel;
  }

  //este metodo tambem ja tem o modifiicador publico por omissao.
  mudarCargo(): void{
    console.log("ALTERANDO CARGO")
  }
}

const usuario1 = new Admin("Belarmino", "teste@teste.com", "Dev", 1)
console.log(usuario1);

usuario1.cargo = "Designer";

usuario1.mudarCargo();

console.log(usuario1)
