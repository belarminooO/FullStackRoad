"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jogo {
    servidor;
    id = "123";
    constructor(servidor) {
        this.servidor = servidor;
    }
    //como os atributos sao privados precisamos de getters e setters, para acessar e para modificar
    get getServidorIP() {
        console.log("== METODO GET ==");
        return this.servidor;
    }
    set setServidorIP(novoIp) {
        if (this.servidor === novoIp) {
            throw new Error("O novo ip deve ser difirente do ip antigo");
        }
        this.servidor = novoIp;
    }
}
const GTA6 = new Jogo("123.345.5.10");
try {
    GTA6.setServidorIP = "124.234.1.2";
}
catch (error) {
    console.log("ERROR: ", error.message);
}
console.log(GTA6.getServidorIP); // podemos charmar sem os parenteses.
//# sourceMappingURL=get_set.js.map