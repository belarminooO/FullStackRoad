"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostraPromocao(preco) {
    console.log(`Promoção do curso por apenas R$ ${preco}`);
}
const novoCurso = {
    id: "1",
    nome: "Curso de TypeScript",
    preco: 100,
    //promocao: mostraPromocao,
    //podemos passar uma funcao anonima diretamente nao dependendo de uma funcao externa.
    promocao: (preco) => {
        console.log(`Promoção do curso por apenas R$ ${preco}`);
    }
};
console.log(novoCurso);
console.log(novoCurso.promocao(340));
//Exemplo 2
console.log("=====================");
let somaNumeros = (valor1, valor2) => {
    console.log("RESULTADO: ", valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(15, 10);
console.log(resultado);
//# sourceMappingURL=funcoes.js.map