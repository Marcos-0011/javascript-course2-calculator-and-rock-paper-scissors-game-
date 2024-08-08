const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  date: '8-4-2024'
}, {
  name: 'wash dishes',
  date: '8-4-2024'
}];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const { name, date } = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${date}</div>
      <button class="delete-todo-button" onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      ">Delete</button>
    `;

    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-date-input');
  const date = dateElement.value;

  todoList.push( {
    name,
    date
  });

  inputElement.value = '';

  renderTodoList();
}