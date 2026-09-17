//parte 1
var valor = 30;

// == compara so os valores e nao olha para o tipo.
// === compara o valor e o tipo
// outros tipos de comparacoes: <, >, <=, >=.

if(valor === 30){
  console.log('sim o valor E igual a 30');
}else{
  console.log('numero diferente de 30!');
}

// parte 2
// tambem podemos comparar strings e booleanos.

var nome = "Belarmino";
var userOnline = true;
var numero = 10;

//comparacao de strings
if(nome === 'Belarmino'){
  console.log('Bem vindo Belarmino');
}

//comparacao booleana
if(userOnline === true){
  console.log('usuario esta online!');
}else{
  console.log('usuario offline!');
}

// usando operador ternario para simplificar a escrita do 'if else'
numero === 10 ? console.log('o numero e igual a 10') : console.log('o numero nao e igual a 10')

// e o mesmo que:
if(numero === 10){
  console.log('o numero igual a 10');
}else{
  console.log('o numero nao e igual a 10');
}
