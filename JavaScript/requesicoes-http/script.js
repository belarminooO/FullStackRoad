// URL: https://sujeitoprogramador.com/rn-api/?api=posts


let listElement = document.querySelector('#app'); // pegando a lista de elementos
let posts = []; // array para conter os posts provenientes da api

function nutriApp(){
  fetch('https://sujeitoprogramador.com/rn-api/?api=posts') // promise : pode dar sucesso ou falha ao fazer fetch.
  .then((r) => r.json()) // then() : em caso de sucesso converte-se a resposta para json, NB: json() tambem pode dar sucesso ou falha por isso da then na linha de baixo.
  .then((json) => { // caso a conversao da reposta para json de certo...
    posts = json;

    posts.map((item) =>{
      //criando os elementos HTML
      let liElement = document.createElement('li');
      let titleElement = document.createElement('strong');
      let imgElement = document.createElement('img');
      let descriptionElement = document.createElement('a');

      // titulo
      let titleText = document.createTextNode(item.titulo);
      titleElement.appendChild(titleText);
      liElement.appendChild(titleElement);

      //img
      imgElement.src = item.capa;
      liElement.appendChild(imgElement);

      //descricao
      let descriptionText = document.createTextNode(item.subtitulo);
      descriptionElement.appendChild(descriptionText);
      liElement.appendChild(descriptionElement);

      //colocando a li na lista
      listElement.appendChild(liElement);
    })
  })
  .catch(() => {
    console.log('DEU ALGUM ERRO');
  })
}

nutriApp();
