"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}
function logUsuario(uuid) {
    console.log(`Conta referente ao UUID${uuid} `);
}
acessar(123, "Belarmino");
acessar("55", "Sacate");
logUsuario("123");
function comprarItem(moeda) {
    console.log(`Comprando com a moeda: ${moeda} `);
}
comprarItem("USD");
//# sourceMappingURL=type_alias.js.map