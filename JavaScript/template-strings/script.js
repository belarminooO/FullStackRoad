//template strings

let nome = 'Belarmino';
let apelido = 'Sacate';
let idade = 21;

// let mensagem = "Meu nome e " + nome + " " + apelido + " e eu tenho " + idade + " anos de idade.";
// console.log(mensagem);

// usando template string - util para juntar varias variaveis em uma so mensagem.
let mensagem =`Meu nome e ${nome} ${apelido} e eu tenho ${idade} anos de idade`;
console.log(mensagem);
