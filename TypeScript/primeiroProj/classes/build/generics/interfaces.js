"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type novoProduto<V> = {
//   nome: string;
//   preco: V;
// }
const arroz = {
    nome: "Arroz Branco",
    preco: 1500,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString("pt-PT", {
            style: "currency",
            currency: "EUR"
        });
        return valorFormatado;
    }
};
console.log(arroz);
console.log(arroz.formatar(1500));
//# sourceMappingURL=interfaces.js.map