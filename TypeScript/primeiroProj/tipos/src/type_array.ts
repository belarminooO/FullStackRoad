
// Type Array.


//let filmes: string[]; // array de strings
// outra forma de tipar:
// let filmes: Array<string>;

//multiplos tipos em um array:
let filmes: (string | number)[];
//let filmes: Array<string | number>;


filmes = ['filme1', 'filme2', 'filme3'];

filmes.push(5);

console.log('Meus filmes ', filmes);




let numeros: number[]; // array de numeros
//outra forma de tipar:
// let numeros: Array<string>;

numeros = [1, 5, 21, 50];

console.log(numeros);

numeros.push(2500);

console.log('Meus numeros ', numeros)
