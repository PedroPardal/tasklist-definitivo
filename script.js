function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim(); // Use trim() para remover espaços em branco no início e no fim
  
  if (task === '') {
    alert("Por favor digite uma Tarefa :)");
    return;
  }

  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  
  // Usando textContent para adicionar o texto da tarefa para evitar problemas com HTML inserido
  li.textContent = task;
  
  // Criando spans separados para os ícones de remoção e conclusão
  var removeSpan = document.createElement("span");
  removeSpan.innerHTML = " ❌";
  removeSpan.classList.add("remove-task");
  removeSpan.onclick = function() {
    removeTask(li);
  };
  li.appendChild(removeSpan);
  
  var completeSpan = document.createElement("span");
  completeSpan.innerHTML = " ✅";
  completeSpan.classList.add("complete-task");
  completeSpan.onclick = function() {
    completeTask(li);
  };
  li.appendChild(completeSpan);
  
  ul.appendChild(li);
  input.value = '';

  // Adicionando a classe de animação para fadeIn após a adição da tarefa
  setTimeout(function() {
    li.classList.add("fadeIn");
  }, 100); // Espera um pouco antes de aplicar a animação
}

function removeTask(taskItem) {
  var taskList = document.getElementById("taskList");
  
  // Adicionando a classe de animação para fadeOut
  taskItem.classList.add("fadeOut");
  
  // Removendo a tarefa após a animação
  setTimeout(function() {
    taskList.removeChild(taskItem);
  }, 500); // Tempo igual à duração da animação fadeOut
}

function completeTask(taskItem) {
  taskItem.classList.toggle("completed");
}
