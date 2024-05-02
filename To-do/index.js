document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", function() {
      const taskName = taskInput.value.trim();
      if (taskName !== "") {
        const li = document.createElement("li");
        li.textContent = taskName;
        taskList.appendChild(li);
        taskInput.value = "";
  
        li.addEventListener("click", function() {
          this.classList.toggle("completed");
        });
      } else {
        alert("Please enter a task!");
      }
    });
  });
  