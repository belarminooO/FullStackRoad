let listElement = document.querySelector('#app ul'); // pegando a lista presente dentro da div class=app, '#' para id, '.' para classes.
let inputElement = document.querySelector('#app input'); // pegando o input...
let buttonElement = document.querySelector('#app button'); // pegando o botao...

let tarefas = [];

function renderTarefas(){
  listElement.innerHTML = '';

  // percorendo os lementos com o map, usando funcao anonima para trabalhar
  // sobre cada elemento, passando para a mesma cada elemento (todo).
  tarefas.map((todo) => {
    let liElement = document.createElement('li'); //criando um li
    let tarefaText = document.createTextNode(todo); // criando o texto.

    liElement.appendChild(tarefaText); //colocando o texto na li
    listElement.appendChild(liElement); // colocando oento li na lista de tarefas 'ul'
  })
}

function adicionarTarefas(){
  if(inputElement.value === ''){
    alert('digite alguma tarefa');
    return false;
  }else{
    let novaTarefa = inputElement.value; // pegando a tarefa digita
    tarefas.push(novaTarefa); // adicionando a lista de tareas
    inputElement.value = ''; // resetando o input.
    renderTarefas(); // chamando a funcao para a renderizacao de tarefas registadas.
  }
}


