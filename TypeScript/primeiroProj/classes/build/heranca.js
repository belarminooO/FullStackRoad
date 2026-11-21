"use strict";
// Heranca > quando nos temos uma classe que herada de outra classe.
// ClassePai tem os seus atributos e a classe filha vai herdar todos os atributos do pai para alem dos seus proprios atributos.
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    email;
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
}
const usuario1 = new Admin("Belarmino", "teste@teste.com", "Dev", 1);
console.log(usuario1);
//# sourceMappingURL=heranca.js.map