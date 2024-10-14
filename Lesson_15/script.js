// Получаем элементы из DOM
const toDoInput = document.querySelector('.task-input');
const taskList = document.querySelector('.list');
const addTaskButton = document.querySelector('.actions .btn');
const allListButton = document.getElementById('all');
const completedListButton = document.getElementById('completed');
const uncompletedListButton = document.getElementById('uncompleted');
const prioritySelector = document.querySelector('.priority-select');

const resultOfFetch = fetch('https://jsonplaceholder.typicode.com/todos');
const elementsOfFetch = resultOfFetch.then(element=>
    element.json())
.then((bodyOfFetch)=>{
    renderFirst10(bodyOfFetch)
})

 resultOfFetch.catch((Error)=>{
    console.log(Error);
    
});



function renderFirst10 (arrayOfListToDo) {
    const ulList = document.querySelector('.list')
    arrayOfListToDo.slice(0,10).forEach(el=>{
        const newLiEl = document.createElement('li');
        newLiEl.classList.add('list-item');
        newLiEl.addEventListener('click', toggleTaskStatus);
        newLiEl.textContent = el.title;
        ulList.append(newLiEl);
    })
}

const addTask = () => {
    const taskText = toDoInput.value.trim();
    const taskPriority = prioritySelector.value; // получаем выбранный приоритет

    if (taskText === '') {
        alert('Введите задачу');
        return;
    }

    const newTask = document.createElement('li');
    newTask.classList.add('list-item', `priority-${taskPriority}`); // добавляем класс в зависимости от приоритета
    newTask.innerText = taskText;

    // Добавляем метку приоритета к тексту задачи
    const priorityLabel = document.createElement('span');
    priorityLabel.classList.add('priority-label');
    priorityLabel.innerText = `[${taskPriority.toUpperCase()}]`; // помечаем приоритет для наглядности
    newTask.appendChild(priorityLabel);

    newTask.addEventListener('click', toggleTaskStatus);

    taskList.appendChild(newTask);

    // Очищаем поле ввода и сбрасываем приоритет на "низкий"
    toDoInput.value = '';
    prioritySelector.value = 'low';
};

// const addTask = () => {
//     const taskText = toDoInput.value.trim();
//     const taskPriority = prioritySelector.value;
    
//     if (taskText === '') {
//         alert('Введите задачу');
//         return;
//     }


//     const newTask = document.createElement('li');
//     newTask.classList.add('list-item', `priority - ${taskPriority}`);
//     newTask.innerText = taskText;

//     const priorytyLabel = document.createElement('span');
//     priorytyLabel.classList.add('priority-label')
//     priorytyLabel.innerText=`[${taskPriority.toUpperCase()}]`;
//     newTask.appendChild(priorytyLabel);

//     newTask.addEventListener('click', toggleTaskStatus);
    
  
//     taskList.appendChild(newTask);

   
//     toDoInput.value = '';
//     prioritySelector ='low';
// };


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