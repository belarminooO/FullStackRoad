//FUNCAO ANONIMA

/*
* () => {}
* 1 - Parenteses - E por onde a funcao recebe argumentos (assim como outras funcoes).
* 2 - 'seta' => responsavel pelo nome 'arrow'
* 3 - Chavetas: Bloco de codigo que representa o corpo da funcao.
*/

// funcao normal
function somar(a, b){
  let total = a + b;
  return console.log(total);
}

somar(10,30);

// funcao anonima em uma variavel
let subtrair = (valor1, valor2) =>{
  let total = valor1 - valor2;
  console.log(total);
}

subtrair(60, 30);

// funcao anonima com map

let numeros = [1, 2, 19];

numeros.map((item)=>{
  //aqui vai toda a logica do map.
  console.log(item);
})
