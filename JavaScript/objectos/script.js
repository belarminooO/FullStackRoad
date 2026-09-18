// Entendo sobre objectos.

let pessoa = {
  nome: 'Belarmino',
  idade: '21',
  altura: '1.78',
  cargo: 'estudante',
}

console.log(pessoa);

// da para acessar a uma propriedade em especifico.
console.log(pessoa.nome);

let carro = {
  nome: 'Ferrari',
  cor: 'Vermelho',
  potencia: '800cv',
}

console.log(carro);
console.log(carro.potencia);
console.log(carro.nome);

// da tambem para armazenar objectos em listas.
let usuarios = [
  {nome: 'Belarmino', cargo: 'programador', status: 'ATIVO'},
  {nome: 'Maria', cargo: 'Backend', status: 'ATIVO'},
  {nome: 'Jose', cargo: 'RH', status: 'ATIVO'},
];

console.log(usuarios);
console.log(usuarios[1]);
console.log(usuarios[1].nome);
