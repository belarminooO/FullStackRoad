// FIND = devolve o primeiro item que ele for a encontrar tendo em conta a busca. NB: caso a busca seja usado com o find
// e uma condicao ele econtra todas as ocorrencias.
let listagem = [5, 3, 'Jose', 2, 'Matheus', 'Jose'];

let busca = listagem.find((item) => {
  return item === 'Jose';
})

console.log(busca); // caso encontre retorna o item, caso contrario retorna undifined
console.log('======');

// FILTER - Filtra tudo que cumpre a condicao passada.

let palavras = ['Matheus', 'Ana', 'Jose', 'Belarmino Sacate', 'Rafael Salvador', 'Jose'];

let resultado = palavras.filter((item) => {
  return item === 'Jose';
})

console.log(resultado);
