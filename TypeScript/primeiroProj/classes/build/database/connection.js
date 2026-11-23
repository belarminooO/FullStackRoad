"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = connection;
exports.statusConnection = statusConnection;
function connection(info) {
    console.log("CONEXAO REALIZADA COM SUCESSO: ", info.ip);
    return true;
}
function statusConnection() {
    console.log("SERVIDOR FUNCIONANDO 100%");
}
//# sourceMappingURL=connection.js.map