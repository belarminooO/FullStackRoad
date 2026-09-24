// includes, startWith, endsWith.
// NB: includes E case sensitive.

let nomes = ['Belarmino', 'Rafael', 'Sacate'];

// includes verrifica se a string passada existe no array. (retorna true or false)
console.log(nomes.includes('Belarmino'))

if(nomes.includes('Rafael')){
  console.log('ESTA NA LISTA')
} else{
  console.log('NAO ESTA NA LISTA')
}

console.log('========');

// starsWith - verrifica se a string X comeca com os carracteres passados. (retorna true or false)
let nome = 'Belarmino';
console.log(nome.startsWith('Bel'));

console.log('========');

// endsWith - verrifica se a string X termina com os carracteres passsados. (retorna true or false)

console.log(nome.endsWith('o'));
