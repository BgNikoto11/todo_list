
function addTodo(){
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value.trim();

    if(todoText !== ""){
        var todoList = document.getElementById("todo-list");

        var todoItem = document.createElement("div");
        todoItem.className = "todo-item";

        var todoItemText = document.createElement("p");
        todoItemText.textContent = todoText;

        var completeButton = document.createElement("button");
        completeButton.className = "complete-button";
        completeButton.textContent = "Completed";

        var deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Remove";
       
        todoList.appendChild(todoItem);
        todoItem.appendChild(todoItemText);
        todoItem.appendChild(completeButton);
        todoItem.appendChild(deleteButton);

        todoInput.value = ""

        todoItem.addEventListener("mouseover", function() {
            let buttons = this.querySelectorAll(".complete-button, .delete-button");
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].style.display = "inline-block";
            }
        });

        todoItem.addEventListener("mouseout", function() {
            let buttons = this.querySelectorAll(".complete-button, .delete-button");
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].style.display = "none";
            }
        });
    }
}

