 // ApexCharts Configuration
 document.addEventListener("DOMContentLoaded", () => {
    const options = {
      chart: {
        type: "line",
        height: 300,
      },
      series: [
        { name: "This week", data: [10, 20, 15, 30, 25, 35] },
        { name: "Last week", data: [15, 25, 20, 35, 30, 40] },
      ],
      xaxis: {
        categories: ["Feb 14", "Feb 15", "Feb 16", "Feb 17", "Feb 18", "Feb 19"],
      },
      colors: ["#6366F1", "#EAB308"],
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todoList.innerHTML = todos
            .map(
                (todo, index) => `
                <li class="flex justify-between items-center p-2 bg-white shadow rounded-lg">
                    <input 
                        id="task-${index}" 
                        type="text" 
                        class="task-text bg-transparent border-none w-full focus:outline-none" 
                        value="${todo}" 
                        readonly 
                    />
                    <div class="flex gap-2">
                        <button 
                            class="edit-todo bg-blue-500 text-white px-2 py-1 rounded-lg text-sm"
                            data-index="${index}">
                            Edit
                        </button>
                        <button 
                            class="delete-todo bg-red-500 text-white px-2 py-1 rounded-lg text-sm"
                            data-index="${index}">
                            Delete
                        </button>
                    </div>
                </li>
            `
            )
            .join("");
    
        // Attach event listeners to the new buttons
        document.querySelectorAll(".edit-todo").forEach((button) => {
            button.addEventListener("click", () => {
                const index = button.dataset.index;
                editTodo(index);
            });
        });
    
        document.querySelectorAll(".delete-todo").forEach((button) => {
            button.addEventListener("click", () => {
                const index = button.dataset.index;
                deleteTodo(index);
            });
        });
    };
    
    
    // Add a new task
    const addTodo = () => {
        const task = todoInput.value.trim();
        if (task) {
            const todos = JSON.parse(localStorage.getItem("todos")) || [];
            todos.push(task);
            localStorage.setItem("todos", JSON.stringify(todos));
            loadTodos();
            todoInput.value = "";
        }
    };
    
    // Edit a task
    const editTodo = (index) => {
        const taskInput = document.getElementById(`task-${index}`);
        taskInput.readOnly = false;
        taskInput.focus();
    
        // Save the updated task when the input field loses focus
        taskInput.addEventListener("blur", () => {
            const todos = JSON.parse(localStorage.getItem("todos")) || [];
            const updatedTask = taskInput.value.trim();
    
            if (updatedTask) {
                todos[index] = updatedTask;
                localStorage.setItem("todos", JSON.stringify(todos));
                loadTodos();
            } else {
                // Reload the original tasks if the input is empty
                loadTodos();
            }
        });
    };
    
    // Delete a task
    const deleteTodo = (index) => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        loadTodos();
    };
    
    // Initial setup
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    const addTodoButton = document.getElementById("add-todo");
    
    // Event listeners
    addTodoButton.addEventListener("click", addTodo);
    loadTodos();  
    document.querySelector('.fa-arrow-right-from-bracket').addEventListener('click', () => {
    window.location.href = "index.html";
    });
    
});