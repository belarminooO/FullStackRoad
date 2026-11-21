"use strict";
// uma classe armazena caracteristicas e acies que um objecto vai possuir.
// ou seja uma classe e um conjunto de objectos e metodos
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    // atributos da classe
    nome;
    categoria;
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
}
const sucos = new Loja("sucosJoao", "bebidas");
const redBurguer = new Loja("redBurguer", "takeAway");
console.log(sucos.nome);
console.log(redBurguer.nome);
//# sourceMappingURL=classes.js.map