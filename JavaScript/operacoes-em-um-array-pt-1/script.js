//operacoes em arrays.

// MAP = percorrer todo um array
// podemos colocar uma funcao anonima com o map podendo passar como argumentos o item e index.
let lista = ['Belarmino', 'Rafael', 'Sacate'];

lista.map((item, index) =>{
  console.log(`Passando: ${item} - esta na posicao ${index}`);
});

// REDUCE = Busca reduzir um array

let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
  console.log(`${acumulador} - total ate o momento`);
  console.log(`${numero} - valor atual`);
  console.log(`${indice} - indice atual`);
  console.log(`${original} - array original`);
  console.log('============');

  return acumulador += numero;
})

console.log('Total do reduce ' + total)
