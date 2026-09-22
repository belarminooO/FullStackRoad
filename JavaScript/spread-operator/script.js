// Spread operator.
let primeiros = [1, 2, 3];

//no caso o '...' serve como se estivessemos a dizer coloque tudo que tenho no array primeiros, e junte com 4, 5 etc.
let numeros = [...primeiros,4, 5, 10];

console.log(numeros);

//com objectos:
let pessoa = {
  nome: 'Belarmino',
  apelido: 'Sacate'
};

let novaPessoa = {
  ...pessoa, // estamos a toda informacao de pessoa, para novaPessoa
  status: 'ATIVO',
  cidade: 'Odivelas',
};

console.log(novaPessoa);  

// mais um exemplo
function novoUsuario(info){
  let dados = {
    ...info,
    status: 'ATIVO',
    inicio: '20/03/2026',
    codigo: '123145das'
  }
  console.log(dados);
}

novoUsuario({nome: 'Jose', apelido: 'Silva', cargo:'DEV'});
