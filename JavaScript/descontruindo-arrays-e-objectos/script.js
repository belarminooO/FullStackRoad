

let pessoa = {
  nome: 'Belarmino',
  apelido: 'Sacate',
  empresa: 'Amazon',
  cargo: 'Programador FullStack',
};

// console.log(pessoa.nome);
// console.log(pessoa.apelido);

let nome = 'Teste';

//deconstruindo
const {nome: nomePessoa, cargo, empresa, apelido} = pessoa; // {nome da propriedade} = objecto
//NB: A variavel nome ja existia em codigo e dentro do objecto pessoa,
//podemos renomear a varriavel da descontrucao para nao dar erro pois existem 2 com o mesmo nome.
// nome: nomePessoa.

console.log(nomePessoa);
console.log(apelido);

console.log(empresa);
console.log(cargo);


//descontruindo arrrays.
let nomes = ['Belarmino', 'Rafael', 'Sacate'];

console.log(nomes);
console.log(nomes[0]);

//descontruindo...
let {0:belarmino, 2:Sacate} = nomes; // {posicao: nome da propriedade}

console.log(belarmino);
console.log(Sacate);

// segunda maneira de descontruir um array:
let [primeiroNome, segundoNome] = nomes; // pega as posicoes dos arrays comecando pelo inicio do mesmo [nome, nome, nome, etc]..

console.log(primeiroNome);
console.log(segundoNome);
