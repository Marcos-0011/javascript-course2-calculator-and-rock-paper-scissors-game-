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

  todoList.forEach((todoObject, index) => {
    const { name, date } = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${date}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;

    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  // 12.4.1 advanced functions 2 part 2: we have to add addEventListeners to the delete buttons after they're put on the page. we also have multiple delete buttons so we can use querySelectorAll to select all the delete buttons. console.logging document.querySelectorAll('.js-delete-todo-button); shows an array of the delete buttons. so we can loop through them and add addEventListeners. now go back to 12.4.1 for advanced functions 2 part 3
  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });

  localStorage.setItem('todoList', JSON.stringify(todoList));
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

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