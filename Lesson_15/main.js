// Получаем элементы
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');
const showAllButton = document.getElementById('show-all');
const showCompletedButton = document.getElementById('show-completed');
const showActiveButton = document.getElementById('show-active');

// Функция для создания новой задачи
const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Введите задание");
        return;
    }

    // Создаем новый элемент li
    const newTask = document.createElement('li');
    newTask.classList.add('task');
    newTask.textContent = taskText;

    // Добавляем обработчик клика для изменения статуса
    newTask.addEventListener('click', toggleTaskStatus);

    // Добавляем задачу в список
    taskList.appendChild(newTask);

    // Очищаем поле ввода
    taskInput.value = '';
};

// Функция для переключения статуса задачи
const toggleTaskStatus = (event) => {
    const task = event.target;
    task.classList.toggle('completed');
};

// Функции для фильтрации задач
const showAllTasks = () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.classList.remove('hidden');
    });
};

const showCompletedTasks = () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        if (task.classList.contains('completed')) {
            task.classList.remove('hidden');
        } else {
            task.classList.add('hidden');
        }
    });
};

const showActiveTasks = () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        if (!task.classList.contains('completed')) {
            task.classList.remove('hidden');
        } else {
            task.classList.add('hidden');
        }
    });
};

// Привязываем события
addTaskButton.addEventListener('click', addTask);
showAllButton.addEventListener('click', showAllTasks);
showCompletedButton.addEventListener('click', showCompletedTasks);
showActiveButton.addEventListener('click', showActiveTasks);

// Добавляем возможность менять статус существующих задач (в примере)
document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('click', toggleTaskStatus);
});