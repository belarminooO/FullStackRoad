

// Tupla nao existem em Js mas existe em TS

//Um tuplo basicamente E um array que segue um "contrato" definido, no caso estamos a definir que a
// variavel aluno E um array composto por uma string e um numero.

let aluno: [string, number];

aluno = ['Belarmino Sacate', 123]

aluno.push('Rafael', 2134)

//console.log(aluno);

let statusPedido: [string, string, string];

statusPedido = ['Em producao', 'Saiu para entrega', 'Pedido Entregue'];

console.log(statusPedido);
