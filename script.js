
function addTodo(){
    let todoInput = document.getElementById("todo-input");
    let todoText = todoInput.value.trim();

    if(todoText !== ""){
        let todoList = document.getElementById("todo-list");

        let todoItem = document.createElement("div");
        todoItem.className = "todo-item";

        let todoItemText = document.createElement("p");
        todoItemText.textContent = todoText;

        let completeButton = document.createElement("button");
        completeButton.className = "complete-button";
        completeButton.textContent = "Completed";

        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Remove";
       
        todoList.appendChild(todoItem);
        todoItem.appendChild(todoItemText);
        todoItem.appendChild(completeButton);
        todoItem.appendChild(deleteButton);

        todoInput.vale = ""
    }
}