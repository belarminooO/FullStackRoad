"use strict";
// vamos supor que temos um jogo e este jogo pode ter una DLC
Object.defineProperty(exports, "__esModule", { value: true });
const left4dead = {
    id: "123",
    nome: "left 4 dead 2",
    descricao: "jogo de tiro",
    plataforma: ["ps5", "pc"]
};
const left4DeadDLC = {
    id: "90",
    nome: "left 4 dead - novos mapas",
    descricao: "4 novos mapas adicionados",
    plataforma: ["ps5", "pc"],
    novoConteudo: ["modo coop", "mais 5 horas de jogo", "medalhas"],
    jogoOriginal: left4dead // podemos passar esta varivel pois respeita a tipagem do JogoProps
};
console.log(left4DeadDLC);
//# sourceMappingURL=extends.js.map