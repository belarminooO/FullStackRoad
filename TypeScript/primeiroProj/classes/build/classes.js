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
    //dentro da classes um metodo nao cria-se usando function
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO!");
        }
        else {
            console.log("LOJA FECHADA COM SUCESSO!");
        }
    }
}
const redBurguer = new Loja("redBurguer", "takeAway");
// console.log(redBurguer.nome);
redBurguer.criarLoja();
const retornoLoja = redBurguer.emitirPedido(5, "refresco", "coca cola");
console.log(retornoLoja);
redBurguer.mudarStatus("ABERTO");
//# sourceMappingURL=classes.js.map