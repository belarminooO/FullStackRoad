"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const novoUsuario = {
    nome: "Belarmino Sacate",
    email: "teste@teste.com",
    status: true,
};
console.log(novoUsuario);
// function novoUser({nome, email, status}: cadastroProps): void{
//   console.log('Nome: ', nome);
// }
// outra forma de descontrucao
function novoUser(propriedades) {
    console.log('Nome: ', propriedades.nome);
}
novoUser({ email: "teste@teste.com", status: true });
//# sourceMappingURL=opcional.js.map