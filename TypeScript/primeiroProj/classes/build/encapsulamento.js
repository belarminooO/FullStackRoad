"use strict";
/*
  4 modificadores: Public, Private, Protected, readonly(so em atributos).
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    email; // o public ja esta por omissao, nao E necessario a escrita.
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    //declaramnos no construtor nome e admin
    constructor(nome, email, cargo, nivel) {
        super(nome, email); // chamando o construtor da classe pai.
        this.cargo = cargo;
        this.nivel = nivel;
    }
    //este metodo tambem ja tem o modifiicador publico por omissao.
    mudarCargo() {
        console.log("ALTERANDO CARGO");
    }
}
const usuario1 = new Admin("Belarmino", "teste@teste.com", "Dev", 1);
console.log(usuario1);
usuario1.cargo = "Designer";
usuario1.mudarCargo();
console.log(usuario1);
//# sourceMappingURL=encapsulamento.js.map