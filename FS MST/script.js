const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const addTaskBtn = document.getElementById("addTaskBtn");
const filterAllBtn = document.getElementById("filterAllBtn");
const filterCompletedBtn = document.getElementById("filterCompletedBtn");
const filterPendingBtn = document.getElementById("filterPendingBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
filterAllBtn.addEventListener("click", () => filterTasks("all"));
filterCompletedBtn.addEventListener("click", () => filterTasks("completed"));
filterPendingBtn.addEventListener("click", () => filterTasks("pending"));

function addTask() {
    const taskName = taskInput.value.trim();
    const priority = prioritySelect.value;
    if (taskName === "") {
        alert("Please enter a task name.");
        return;
    }
    const taskItem = document.createElement("li");

    taskItem.className = `task-item flex items-center justify-between p-4 border-l-4 rounded shadow`;
    taskItem.innerHTML = `

        <div class="text-gray-800 font-medium flex">${taskName} 
            <div class="text-sm text-gray-600">
                (${priority})
            </div>
        </div>

        <div class="flex gap-2">
            <input type="checkbox" class="complete-btn w-5 h-5 cursor-pointer">
            <button class="delete-btn px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">Delete</button>
        </div>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
    prioritySelect.value = "Low";
    taskItem.querySelector(".complete-btn").addEventListener("click", () => {
        taskItem.classList.toggle("completed");
        taskItem.classList.toggle("opacity-60");
    });
    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });
}

function filterTasks(filter) {
    const tasks = taskList.querySelectorAll(".task-item");
    tasks.forEach(task => {
        if (filter === "all") {
            task.style.display = "flex";
        } else if (filter === "completed") {
            task.style.display = task.classList.contains("completed") ? "flex" : "none";
        } else if (filter === "pending") {
            task.style.display = !task.classList.contains("completed") ? "flex" : "none";
        }
    });
}

