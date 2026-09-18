var peso;
var altura;
var imc;
var resultado;

function calcular(event){
  event.preventDefault(); //serve para que o formulario nao de refresh dos campos apos a submissao.

  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;

  imc = peso / (altura * altura);
  resultado = document.getElementById('resultado'); // pegando antes o elemento para nao ter que repitir nas condicoes...

  if(imc < 17){
    //imc.toFixed(2) : o .toFixed serve para limitar as casas decimais, no caso 2 casas no maximo.
    resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado voce esta muito abaixo do peso!'
  }else if(imc > 17 && imc <= 18.49){
    resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2) + '<br/> Voce esta abaixo do peso!'
  }else if(imc >= 18.5 && imc < 24.99){
    resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2) + '<br/> Voce esta no peso ideal!'
  }else if(imc > 25 && imc <= 29.99){
    resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2) + '<br/> Voce esta acima do peso!'
  }else if(imc >= 30){
    resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado Obesidade!'
  }

  //Reset nos campos apos o calculo.
  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';
}
