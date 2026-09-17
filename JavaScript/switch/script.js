function pedir(){
  var valor = prompt('digite um valor de 1 a 4');

  switch (Number(valor)) { // prompt retorna sempre em string, por isso foi ncessario a conversao para numero, mas o switch funciona tambem para strings...
    case 1:
      alert('Voce escolheu 1 = suco');
      break;
    case 2:
      alert('voce escolheu 2 = agua gelada');
      break;
    case 3:
      alert('voce escolheu 3 = sorvete');
      break;
    case 4:
      alert('voce escolheu 4 = voce chamou o garcom');
      break;
    default:
      alert('escolha uma opcao de 1 a 4');
      break;
  }
}
