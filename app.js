const TODO_INPUT = document.querySelector(".todoInput")
const TODO_BUTTON = document.querySelector(".todoButton")
const TODO_LIST = document.querySelector(".todoList")

TODO_BUTTON.addEventListener("click", addTodoElemet)

function addTodoElemet(event) {
  event.preventDefault()
  const todoListItemDiv = document.createElement("div")
  todoListItemDiv.classList.add("todoListItemdiv")
  const newTodoElement = document.createElement("li")
  newTodoElement.innerText = TODO_INPUT.value
  newTodoElement.classList.add("todoItem")
  todoListItemDiv.appendChild(newTodoElement)
  const checkButton = document.createElement("button")
  checkButton.innerHTML = '<i class="fas fa-check "> </i>'
  checkButton.classList.add("checkedButton")
  todoListItemDiv.appendChild(checkButton)
  const deleteButton = document.createElement("button")
  deleteButton.innerHTML = '<i class="fas fa-trash "> </i>'
  deleteButton.classList.add("deleteButton")
  todoListItemDiv.appendChild(deleteButton)
  TODO_LIST.appendChild(todoListItemDiv)
  TODO_INPUT.value = ""
}
