"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cadastro(email, senha, nome = 'Aluno', idade) {
    let data = { email, senha, nome };
    console.log(data);
}
cadastro('teste@teste.com', '123453', 'Belarmino', 21);
function cadastroLoja(nome, email, status = false) {
    console.log('Status atual da loja: ', status);
    return status;
}
cadastroLoja('Burguer K', 'Teste@Teste.com', true);
//# sourceMappingURL=valor_default.js.map