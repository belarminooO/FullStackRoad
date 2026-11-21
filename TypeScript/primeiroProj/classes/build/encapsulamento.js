"use strict";
// Existem quatro modificadores de acesso que podemos atribuir aos atributos como:
// public, protected, private, readonly (apenas nos atributos)
Object.defineProperty(exports, "__esModule", { value: true });
/*
  >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da
  classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

  >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados,
  Ou seja ele nao pode ser acessado ou modificado fora da classe em que foi criado.

  >> E o famoso readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
  nao podemos alterar ele.
*/
class Usuario {
    id; // podemos chamar na classe usuario ou em classes que extendao a classe usuario.
    nome;
    email; // o public ja esta por omissao, nao E necessario a escrita.
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    //declaramnos no construtor nome e admin
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email); // chamando o construtor da classe pai.
        this.cargo = cargo;
        this.nivel = nivel;
    }
    // o protected tambem aplica-se a metodos
    mudarCargo(cargo) {
        console.log("ALTERANDO CARGO PARA: ", cargo);
        console.log("ID do usuario: ", this.id); // acessando ID internamente.
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const usuario1 = new Admin(123, "Belarmino", "teste@teste.com", "Dev", 1);
// id nao pode ser acessado fora das classes usuario e id, E um atributo interno a elas.
//usuario1.id;
usuario1.acessarAdmin();
console.log(usuario1);
//# sourceMappingURL=encapsulamento.js.map