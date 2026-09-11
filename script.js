const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priority = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");

const tasks = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskName = taskInput.value;
    const taskPriority = priority.value;
    if(taskName === "") {
        alert("Please enter a task name.");
        return;
    }
    const task = {
        name: taskName,
        priority: taskPriority,
        completed: false
    };
    tasks.push(task);
    displayTasks();
    taskInput.value = "";
});

function displayTasks() {

    taskList.innerHTML = "";

    for(let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        if(task.priority === "Low") {
            taskElement.classList.add("Low");
        } else if(task.priority === "Medium") {
            taskElement.classList.add("Medium");
        } else if(task.priority === "High") {
            taskElement.classList.add("High");
        }
        const completeButton = document.createElement("button");
        completeButton.classList.add("complete-button");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");

        if(task.completed) {
            taskElement.classList.add("completed");
        }
        taskElement.textContent = task.name + " - Priority: " + task.priority;
        completeButton.textContent = "Complete";
        deleteButton.textContent = "Delete";

        completeButton.addEventListener("click", function() {
            task.completed = true;
            taskElement.classList.add("completed");
        });
        deleteButton.addEventListener("click", function() {
            tasks.splice(i, 1);
            displayTasks();
        });
        const lineBreak = document.createElement("br");

        taskList.appendChild(taskElement);
        taskElement.appendChild(lineBreak);
        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);
    }
}