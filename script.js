function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;
  if (task === '') {
    alert("Por favor digite uma Tarefa :)");
    return;
  }

  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  li.innerHTML = task + '<span class="remove-task" onclick="removeTask(this)"> ❌</span>';
  ul.appendChild(li);
  input.value = '';

  // Adicionando a classe de animação para fadeIn
  li.classList.add("fadeIn");
}

function removeTask(taskItem) {
  var taskList = taskItem.parentNode.parentNode;
  var task = taskItem.parentNode;
  
  // Adicionando a classe de animação para fadeOut
  task.classList.add("fadeOut");
  
  // Removendo a tarefa após a animação
  setTimeout(function() {
    taskList.removeChild(task);
  }, 500); // Tempo igual à duração da animação fadeOut
}


  