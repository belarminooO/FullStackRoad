"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Decorator em metodos > So E chamado quando o nosso metodo E chamado, diferente do decorator em classes.
const verificaPessoa_1 = require("./decorators/verificaPessoa");
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema`);
    }
}
__decorate([
    (0, verificaPessoa_1.verificaPessoa)(26)
], Pessoa.prototype, "cadastrarPessoa", null);
const pessoa1 = new Pessoa("Belarmino Sacate");
pessoa1.cadastrarPessoa();
//# sourceMappingURL=metodo.js.map