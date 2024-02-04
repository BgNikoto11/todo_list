
function addTodo(){
    let todoInput = document.getElementById("todo-input");
    let todoText = todoInput.value.trim();

    if(todoText !== ""){
        let todoList = document.getElementById("todo-list");

        let todoItem = document.createElement("div");
        todoItem.className = "todo-item";
        todoItem.textContent = todoText;

        todoList.appendChild(todoItem);

        todoInput.vale = ""
    }
}