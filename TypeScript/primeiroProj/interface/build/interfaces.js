"use strict";
// let loja: object;
Object.defineProperty(exports, "__esModule", { value: true });
const BurguerKing = {
    nome: "Burguer King",
    endereco: "Rua 1",
    status: true,
};
//console.log(BurguerKing);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereco da loja: ${endereco}`);
    console.log(`Status da loja: ${endereco}`);
    console.log("=============");
}
novaLoja({ nome: "Mc Donalds", endereco: "Rua 2", status: true });
novaLoja({ nome: "Burguer K", endereco: "Rua 3", status: true });
//# sourceMappingURL=interfaces.js.map