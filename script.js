
function addTodo(){
    let todoInput = document.getElementById("todo-input");
    let todoText = todoInput.value.trim();

    if(todoText !== ""){
        let todoList = document.getElementById("todo-list");

        let todoItem = document.createElement("div");
        todoItem.className = "todo-item";

        let todoItemText = document.createElement("p");
        todoItemText.textContent = todoText;
       
        todoList.appendChild(todoItem);
        todoItem.appendChild(todoItemText);

        todoInput.vale = ""
    }
}