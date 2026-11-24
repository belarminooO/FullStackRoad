"use strict";
/*
 DECORATORS
  Class
  Propriedades
  Metodos
  Parametros ( BEM POUCO USADO )
  GETTERS / SETTERS ( BEM POUCO USADO )
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// target = recebe o contrutor da nossa classe.
// function logInfo(target: any){
//   console.log("Sistema esta online!");
// }
// Padrao factory -> funcao que vai retornar a criacao do decorator
function logInfo(mensagem) {
    return (target) => {
        console.log(`${mensagem}, ${target}`);
    };
}
let Sistema = class Sistema {
};
Sistema = __decorate([
    logInfo("Servidor esta rodando!")
], Sistema);
// ==========================PRATICANDO===============================
function setIpServidor(novoIp) {
    return (target) => {
        return class extends target {
            ip = novoIp;
        };
    };
}
let Servidor = class Servidor {
};
Servidor = __decorate([
    setIpServidor("192.123.50.12")
], Servidor);
const servidor1 = new Servidor();
console.log(servidor1);
//# sourceMappingURL=decorator.js.map