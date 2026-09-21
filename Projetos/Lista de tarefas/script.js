let listElement = document.querySelector('#app ul'); // pegando a lista presente dentro da div class=app, '#' para id, '.' para classes.
let inputElement = document.querySelector('#app input'); // pegando o input...
let buttonElement = document.querySelector('#app button'); // pegando o botao...

let tarefas = [];

function adicionarTarefas(){
  if(inputElement.value === ''){
    alert('digite alguma tarefa');
    return false;
  }else{
    let novaTarefa = inputElement.value; // pegando a tarefa digita
    tarefas.push(novaTarefa); // adicionando a lista de tareas
    inputElement.value = '';
  }
}

