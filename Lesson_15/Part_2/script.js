//Задание. У нас есть разметка для To-Do листа (списка дел). Нужно запрограммировать ему функциональность. Минимальный набор: 1. При нажатии на кнопку “Создать” добавляется новое задание. 2. При нажитии на дело - оно меняет свой статус с выполенного и наоборот с соотсветсвующим изменением стилизации (примеры дел есть в разметке). 3. Кнопки “Все“, “Выполенные” и “Невыполенные” фильтруют задачи чтобы отображались соответвенно все, выполенные или не выполенные.
// создание элемента Кнопка
//
const submitButtonElement = document.createElement("button");
submitButtonElement.innerText = "Результат";
submitButtonElement.classList.add("submit-button");
const ListToDo = ["Сделать домашку", "купить молоко "];
const taskInput = document.querySelector(".task-input");
const createBtn = document.querySelector(".actions .btn");
const allBtn = document.getElementById("all");
const taskList = document.querySelector(".list");
const completedBtn = document.getElementById("completed");
const uncompletedBtn = document.getElementById("uncompleted");
//submitButtonElement.addEventListener("click", submitButtonHanler);
function showTasks(tasks) {
    tasks.forEach(tasks => {
    const createListItem = document.createElement('li')
    createListItem.classList.add('list-item')
    createListItem.innerText = tasks;
 // console.log(tasks[1]);
//  console.log(createListItem)
 taskList.append(createListItem)
    });
}
showTasks(ListToDo);