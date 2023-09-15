document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    
    addTaskButton.addEventListener("click", function() {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();
      
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          ${taskText}
          <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);
        
        taskInput.value = "";
        
        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", function() {
          taskList.removeChild(taskItem);
        });
      }
    });
  });