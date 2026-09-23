let listaProdutos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
console.log('Produtos: ' + listaProdutos);

function excluirItem(lista, item){
  if(typeof item === 'string'){
    lista.splice(lista.indexOf(item),1);
    return item;
  }else if(typeof item === 'number'){
    let itemExcluido = lista[item];
    lista.splice(item, 1);
    return itemExcluido;
  }
}

console.log(excluirItem(listaProdutos,'Mouse'));
console.log('ListaProdutos: ' + listaProdutos);

function procurarItem(lista, item){
  let buscaItem =  lista.find((item) => {
    return item === item;
  });
 buscaItem !== undefined ? console.log(`${item} encontrado`) : alert(`${item} nao faz parte do array ${lista}`);
}

procurarItem(listaProdutos,'Computador');
console.log(listaProdutos);
console.log(excluirItem(listaProdutos, 1));
console.log(listaProdutos)


let numeros = [1, 3, 5, 7, 0, 9];

function ordenarLista(lista){
  return lista.sort();
}

let listaOrdenada = ordenarLista(numeros);

console.log('Lista original: ' + numeros);
console.log('Lista Ordenada: ' + listaOrdenada);
console.log('Removendo o 1 elemento: ' + excluirItem(listaOrdenada, 0));
console.log('Lista apos a remocao: ' + listaOrdenada);

function inverterLista(lista){
  return lista.reverse();
}

console.log('revertendo a lista: ' + inverterLista(listaOrdenada));

const data = new Date();
const dataFormatada = data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear();

console.log('Data sem formatacao: ' + data);
console.log('Data formatada: ' + dataFormatada);

const dataSeparada = dataFormatada.split('/');
console.log(dataSeparada);

const [dia, mes, ano] = dataSeparada;

console.log(`Dia: ${dia} Mes: ${mes} Ano: ${ano}`);
