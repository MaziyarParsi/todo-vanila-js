const TODO_INPUT = document.querySelector(".todoInput")
const TODO_BUTTON = document.querySelector(".todoButton")
const TODO_LIST = document.querySelector(".todoList")
const REFRESH_BUTTON = document.querySelector(".refreshButton")

let card = []

TODO_BUTTON.addEventListener("click", addTodoElements)
TODO_LIST.addEventListener("click", deleteElement)
REFRESH_BUTTON.addEventListener("click", refreshPage)

function addTodoElements(event) {
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
  card.push(todoListItemDiv)
}

function deleteElement(event) {
  let item = event.target
  if (item.classList[0] === "deleteButton") {
    item.parentElement.classList.add("fall")
    item.parentElement.addEventListener("transitionend", () => {
      item.parentElement.remove()
    })
  }
  if (item.classList[0] === "checkedButton") {
    item.parentElement.classList.toggle("checked")
  }
}
function refreshPage() {
  for (let i = 0; i < card.length; i++) card[i].remove()
}
