const todos = [];

function addTodo() {
  const newTodo = document.getElementById('new-todo').value;
  if (newTodo !== '') {
    todos.push(newTodo);
    document.getElementById('new-todo').value = '';
    renderTodos();
  }
}

function renderTodos() {
  const todoList = document.getElementById('todos');
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement('li');
    todoItem.textContent = todos[i];
    todoList.appendChild(todoItem);
  }
}

document.getElementById('add-todo').addEventListener('click', addTodo);
