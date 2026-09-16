var area = document.getElementById("area"); //docuemnt.geElementById - acessando o elemento h2 da pagina atraves do seu id.

function entrar() {
  var nome = prompt("Digite seu nome");

  if (nome === "" || nome === null) {
    alert("Ops algo deu errado");
    area.innerHTML = "Clique no botao para acessar";
  } else {
    area.innerHTML = "Bem vindo " + nome + " "; //innerHTML - altera o conteudo html de um elemento no caso da tag h2.

    let botaoSair = document.createElement("button"); //document.createElement - serve para criar um elemento HTML.
    botaoSair.innerText = "Sair da conta"; //.innerText - muda o texto do botao.
    botaoSair.onclick = sair; // .onclick - chama a funcao sair ao botaosair.

    area.appendChild(botaoSair); //colocando o botao dentro da Tag H2 no HTML.
  }
}

function sair() {
  alert("Ate mais");
  area.innerHTML = "Voce saiu";
}
