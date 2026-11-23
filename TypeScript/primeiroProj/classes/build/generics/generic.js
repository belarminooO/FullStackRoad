"use strict";
/*
  Generics
  Permite criar estruturas que serao adaptaveis a varios tipos de dados.
  (ajudando a reaproveitar melhor o nosso codigo e deixa-lo mais flexivel.)

  podemos usar em:
  funcoes | interfaces / type | classes
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
 Alguns padroes:
 S => state;
 T => Type;
 K => Key;
 V => Value;
 E => Element;
*/
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados("15");
console.log(repo1.getDados());
console.log("============================");
const repo2 = repositorio();
repo2.setDados("21");
console.log(repo2.getDados());
//# sourceMappingURL=generic.js.map