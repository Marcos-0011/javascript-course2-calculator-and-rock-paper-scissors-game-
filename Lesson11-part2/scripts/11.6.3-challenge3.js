const todoListObject = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  date: '8-4-2024'
}, {
  name: 'wash dishes',
  date: '8-4-2024'
}];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  for (let i = 0; i < todoListObject.length; i++) {
    // const name = todoListObject[i].name
    // const date = todoListObject[i].date
    // the one line below does the same thing as the two lines above, this is called destructuring! (when our variable has the same name as the property name)
    const { name, date } = todoListObject[i];
    const html = `
      <div>${name}</div> 
      <div>${date}</div>
      <button class="delete-todo-button" onclick="
        todoListObject.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  localStorage.setItem('todoList', JSON.stringify(todoListObject));
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-date-input');
  const date = dateElement.value;

  todoListObject.push( {
    // name: name,
    // date: date
    // the two lines of code below do the same as the two lines code above. when the property name has the same name as the variable, just write it once. this is called the shorthand property
    name,
    date
  });

  inputElement.value = '';

  renderTodoList();
}