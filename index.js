window.addEventListener('DOMContentLoaded', function() {
  const newTodoSubmitBtn = document.getElementById('submit-button');

  newTodoSubmitBtn.addEventListener('click', function() {
    let todoItem = RetrieveTodoItem();

    if (IsTodoItemValid(todoItem)) {
      CreateTodoItem(todoItem);

      ClearForm();
    } else {
      alert('enter the stuff!');
    }
  });
});

function RetrieveTodoItem() {
  let todoItem = {};

  todoItem.title = document.getElementById('todo-input').value.trim();
  todoItem.dueDate = document.getElementById('todo-due-date').value;

  return todoItem;
}

function IsTodoItemValid(todoItem) {
  let result = true;

  if (
    todoItem.title === '' ||
    todoItem.title === null ||
    todoItem.dueDate === '' ||
    todoItem.dueDate === null
  ) {
    result = false;
  }

  return result;
}

function CreateTodoItem(todoItem) {
  let todoListDiv = document.getElementById('todo-items');

  let todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-item');

  let todoTitle = document.createElement('p');
  todoTitle.innerText = todoItem.title;
  todoDiv.appendChild(todoTitle);

  let todoDueDate = document.createElement('p');
  todoDueDate.innerText = todoItem.dueDate;
  todoDiv.appendChild(todoDueDate);

  let todoCompleteButton = document.createElement('button');
  todoCompleteButton.classList.add('complete-btn');
  todoCompleteButton.innerText = 'Complete!';
  todoCompleteButton.addEventListener('click', DestroyTodo);

  todoDiv.appendChild(todoCompleteButton);

  todoListDiv.appendChild(todoDiv);
}

function ClearForm() {
  document.getElementById('todo-input').value = '';
  document.getElementById('todo-due-date').value = '';
}

function DestroyTodo(event) {
  let todoItem = event.toElement.parentElement;
  console.log(todoItem);
  todoItem.remove();
}
