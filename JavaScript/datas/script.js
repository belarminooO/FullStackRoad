var data = new Date(); // retorna a data atual

console.log(data); //ex: 2026-09-17T14:07:01.197Z

//pegando so a hora:
console.log(data.getHours());

//pegando minutos:
console.log(data.getMinutes());

//pegando segundos:
console.log(data.getSeconds());

//pegando milisegundos:
console.log(data.getMilliseconds());

// Criando uma data especifica:
var novaData = new Date('March 10, 2018');
console.log(novaData);

console.log(Date.parse(novaData)); // converte a data em milisegundos march 10, 2018 fica: 1520640000000 ms

console.log(new Date(1520640000000)) //podemos converter novamente de ms para data normal.

console.log(novaData.getDate()); // para obter o dia

console.log(novaData.getMonth() + 1);// para obter o mes, NB: + 1 pq o get month retorna comecando de 0.(janeiro)

console.log(novaData.getDay()); // para obter o dia da semana (0-6), 0: domingo, 6: sabado.

console.log(novaData.getFullYear()); // para retornar o ano.

// Como formatar a data para um determinado formato:
console.log(novaData.getDate() + '/' + (novaData.getMonth() + 1) + '/' + novaData.getFullYear());

// Como alterar a data atual para uma data futura:
novaData.setDate(novaData.getDate() + 5);
console.log(novaData);

// Como aumentar horas:
novaData.setHours(novaData.getHours() + 10);
console.log(novaData);

// Como mostrar dias da semana em strings, usando uma lista:
var dias = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Quinta', 'Sexta', 'Sabado'];
console.log('dia da semana ' + dias[novaData.getDay()]);
