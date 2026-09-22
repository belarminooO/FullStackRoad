//rest operator, quando nao se sabe a quantidade de parametros numa funcao.
// no caso nomes podem ser muitos ou poucos nao se sabe.
//logo o rest operador faz a recpcao de tudo e mete dentro de um array.
function convidados(...nomes) {
  console.log('SEJA BEM VINDO TODOS OS CONVIDADOS');
  console.log(nomes);
}

convidados('Belarmino', 'Rafael', 'Sacate');

// exemplo2:
function sorteador(...numeros){ // pega em todo os numeros que forem inseridos e mete numa lista.
 console.log(numeros);

 const numerGerado = Math.floor(Math.random() * numeros.length); // gera um numero aleatorio de 0 ate o tamanho da lista.
 console.log('O numeoro gerado foi: ' + numeros[numerGerado]); // retorna o elemento na posicao do numero aleatorio gerado.
}

sorteador(1, 4, 6, 20, 60, 90);
