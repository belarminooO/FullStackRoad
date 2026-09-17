var arr = ['banana', 'peixe', 'ananas', 150];
console.log(arr);

console.log(arr[0]); // print do primeiro elemento da lista

arr[0] = 'laranja'; // alterando o conteudo da posicao 0 da lista
console.log(arr);

console.log(arr.indexOf('peixe')); // retorna a posicao de um elemento presente na lista, caso contrario -1

console.log(arr.join(',')); // junta os elementos separando-os por o que estiver entre ''

arr.push('porco'); // adidiona um elemento ao final da lista
console.log(arr);

arr.shift(); // remove o primeiro elemento
console.log(arr);

arr.pop(); //remove o ultimo elemento
console.log(arr);
