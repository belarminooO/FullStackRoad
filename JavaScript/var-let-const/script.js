// Diferencas entre var, let e const.

// >>> var
// > ex: 1
// var nome = 'sujeito';;

// if(nome === 'sujeito'){
//   var curso = 'Programador Front-end';
//   console.log(curso);
// }

// console.log(curso);
// curso = 'php';
// console.log(curso);

//NB: a variavel curso foi criada dentro do escopo do if, mas ao cria-la usando
// var isso nos permite aceder a ela mesmo fora do escopo.

// >>> let
// > ex: 1
// var nome = 'sujeito';

// if(nome === 'sujeito'){
//   let cargo = 'CEO sujeito programador';
//   console.log(cargo);
// }

// NB: aqui ja nao conseguimos ter nenhum acesso a variavel cargo estando fora do escopo
// pois foi criada usando let.
// console.log(cargo); //cargo is not defined

// > ex: 2
// let bonus = true;

// console.log(bonus);

// if(bonus){
//   let salario = 4000 + 600;
//   console.log(salario);
// }

//NB: acontece o mesmo descrito no exemplo1. Note que com var seria possivel aceder a variavel
// salario mesmo estando fora do escopo.
// console.log(salario); //salario is not defined,


// >>> const - tem a mesma caracterista de acesso bloqueado como let,
// nao da para alterar o valor da varriavel mesmo estando no escopo em que foi criada.

// > ex: 1
// const cargo = 'programador front-end';
// console.log(cargo);

// cargo = 'programador mobile'; // Assignment to constant variable. - nao da para alterar o valor de uma variavel const.

// > ex: 2
// nao da para criar uma variavel usando const sem atrelar um valor a mesma:

// const nome;
// nome = 'belarmino'; //Missing initializer in const declaration.

// note que com 'let' e 'var' isso e possivel
