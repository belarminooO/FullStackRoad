// >> setInterval - executa de tempo em tempo.
// function acao(){
//   document.write('Executando... <br/>')
// }
// setInterval(acao, 1000); //Chama a funcao acao de 1 em 1 segundo...

// > podemos fazer o mesmo acima mas usando funcao anonima (nao precisa ser criada a parte fucntion...) ao inves de ter
// que criar uma funcao separada.

// setInterval(() => {
//   document.write('Executando !!! <br/>')
// }, 1000)

// > podemos tambem parar a funcao atrelando-a a uma variavel..
// para parar podemos executar clearInterval(timer) na consola por exemplo.

// var timer = setInterval(() => {
//   document.write('Executando !!! <br/>')
// }, 1000)

// >> setTimeOut - executa apenas uma vez o que for passada a ela, depois de x tempo.

// function acao(){
//   document.write('Executando!!! <br/>');
// }
// setTimeout(acao, 3000);

// > tambem podemos usar funcao anonima...
setTimeout(() => {
  document.write('Executando!!! <br/>');
}, 3000);
