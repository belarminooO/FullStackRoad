"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Voce fez ${quantidadeVendas} vendas hoje!`);
}
totalVendas(10, 20, 30);
function mostraNomes(...nomes) {
    console.log(nomes.length);
    nomes.map(nome => console.log(nome));
}
mostraNomes('Belarmino', 'Rafael', 'Sacate');
//# sourceMappingURL=rest.js.map