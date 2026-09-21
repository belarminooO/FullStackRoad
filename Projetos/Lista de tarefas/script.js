let listElement = document.querySelector('#app ul'); // pegando a lista presente dentro da div class=app, '#' para id, '.' para classes.
let inputElement = document.querySelector('#app input'); // pegando o input...
let buttonElement = document.querySelector('#app button'); // pegando o botao...

let tarefas = JSON.parse(localStorage.getItem('@listaTarefas')) || []; // caso existir informacao no LS faz o parse, caso contrario fica vazio.

function renderTarefas(){
  listElement.innerHTML = '';

  // percorendo os lementos com o map, usando funcao anonima para trabalhar
  // sobre cada elemento, passando para a mesma cada elemento (todo).
  tarefas.map((todo) => {
    let liElement = document.createElement('li'); //criando um li
    let tarefaText = document.createTextNode(todo); // criando o texto.

    let linkElement = document.createElement('a'); // criando o link para deletar uma tarefa
    linkElement.setAttribute('href', '#'); // passando atributo do link.

    let linkText = document.createTextNode('Excluir'); // criando um texto para o link.
    linkElement.appendChild(linkText); // passando o texto ao linkElement.

    let posicao = tarefas.indexOf(todo); //pegando a posicao do item atual na lista.
    linkElement.setAttribute('onclick', `deletarTarfa(${posicao})`); // colocando a funcao deletarTarefa juntamente com a posicao a cada elemento da lista como atributo

    liElement.appendChild(tarefaText); //colocando o texto na li
    liElement.append(linkElement); // adicionando o linkElement que permite a exclusao da tarefa
    listElement.appendChild(liElement); // colocando oento li na lista de tarefas 'ul'
  })
}

renderTarefas(); // renderizacao inicial de tarefas caso existirem.

//funcao para a adicao de uma tarefa a lista
function adicionarTarefas(){
  if(inputElement.value === ''){
    alert('digite alguma tarefa');
    return false;
  }else{
    let novaTarefa = inputElement.value; // pegando a tarefa digita
    tarefas.push(novaTarefa); // adicionando a lista de tareas
    inputElement.value = ''; // resetando o input.

    renderTarefas(); // chamando a funcao para a renderizacao de tarefas registadas.
    salvarDados(); // atializando a lista do LS com o novo item
  }
}

//funcao para deletar uma tarefa
function deletarTarfa(posicao) {
  alert('POSICAO DO ITEM ' + posicao);
  tarefas.splice(posicao,1); // deletando a posicao da lista. (posicao, profundidade)
  renderTarefas(); // renderizando as tarefas apos a exclusao de x tarefa
  salvarDados(); // atualizando a lista do LS apos deletar uma tarefa.
}

// funcao para guradar a lista de elementos no LS
function salvarDados(){
  localStorage.setItem('@listaTarefas', JSON.stringify(tarefas)); // E necessario passar para string primeiramente, e depois inserir no LS
}
