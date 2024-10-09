// Получаем элементы из DOM
const toDoInput = document.querySelector('.task-input');
const taskList = document.querySelector('.list');
const addTaskButton = document.querySelector('.actions .btn');
const allListButton = document.getElementById('all');
const completedListButton = document.getElementById('completed');
const uncompletedListButton = document.getElementById('uncompleted');


const addTask = () => {
    const taskText = toDoInput.value.trim();
    
    if (taskText === '') {
        alert('Введите задачу');
        return;
    }


    const newTask = document.createElement('li');
    newTask.classList.add('list-item');
    newTask.innerText = taskText;


    newTask.addEventListener('click', toggleTaskStatus);
    
  
    taskList.appendChild(newTask);

   
    toDoInput.value = '';
};


const toggleTaskStatus = (event) => {
    const task = event.target;
    task.classList.toggle('list-item_done');
};


const showAllTasks = () => {
    const tasks = document.querySelectorAll('.list-item');
    tasks.forEach(task => {
        task.classList.remove('hidden');
    });
};


const showCompletedTasks = () => {
    const tasks = document.querySelectorAll('.list-item');
    tasks.forEach(task => {
        if (task.classList.contains('list-item_done')) {
            task.classList.remove('hidden');
        } else {
            task.classList.add('hidden');
        }
    });
};


const showActiveTasks = () => {
    const tasks = document.querySelectorAll('.list-item');
    tasks.forEach(task => {
        if (!task.classList.contains('list-item_done')) {
            task.classList.remove('hidden');
        } else {
            task.classList.add('hidden');
        }
    });
};


addTaskButton.addEventListener('click', addTask);
allListButton.addEventListener('click', showAllTasks);
completedListButton.addEventListener('click', showCompletedTasks);
uncompletedListButton.addEventListener('click', showActiveTasks);


document.querySelectorAll('.list-item').forEach(task => {
    task.addEventListener('click', toggleTaskStatus);
});