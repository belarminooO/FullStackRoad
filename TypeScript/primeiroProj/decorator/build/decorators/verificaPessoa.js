"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaPessoa = verificaPessoa;
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        // console.log("Target: ", target);
        // console.log("Key: ", key);
        // console.log("Desciptor: ", descriptor);
        const metodoOriginal = descriptor.value; //salvando o metodo original
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Estamos a cadastrar como pessoa menor de idade");
            }
            else {
                console.log("Adulto cadastrado no sistema");
                return metodoOriginal.apply(this); // continuando a execucao da funcao apos a validacao...
            }
        };
    };
}
//# sourceMappingURL=verificaPessoa.js.map