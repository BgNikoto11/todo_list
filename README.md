# Todo List Web Application
## Project Overview
The project consists of three main parts: a text box for creating new todo-items, an area in which to display them, and an area in which to move them once they are completed. Once the user types in the new todo and clicks the "Add" button, it gets created and added to the todo list. There are also two buttons for removing and completing the todo-item which get displayed for that specific item on a mouse hover over them. The buttons get removed once the todo-item is added to the complete area.
### Screenshot
[![Screenshot-from-2024-02-07-20-07-32.png](https://i.postimg.cc/rpYMhSRF/Screenshot-from-2024-02-07-20-07-32.png)](https://postimg.cc/3ypsN0ZP)
## What I Learned During This Project
This project introduced me more deeply to all of the different ways the DOM can be manipulated using JavaScript. It taught me how to create elements, how to give them values, how to remove them or their children, and how to dynamically change their style for a better user experience. It also taught me more methods and techniques like "trim()" or "querySelectorAll()" which can be used for problem-solving.
## Challanges That I Faced
* When I was trying to add event listeners to the different elements like todoItem, completeButton, and deleteButton, I couldn't access them with their variable names outside of the scope of the addTodo() function. To solve this, I had to either access them by their IDs or classes within the DOM, or directly access them inside of that scope. I chose the latter since this is a smaller project and it wouldn't lead to any confusions.
* Another thing that bothered me was getting the functionality that displays the todoItem buttons right. It wouldn't work as expected until I used the querySelectorAll() to select both of them at once and then change their style using a loop.
```javascript
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
```
