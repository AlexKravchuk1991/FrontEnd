const headerElement = document.querySelector('.header');
headerElement.innerText = "Калькулятор"
//console.log(headerElement);

headerElement.classList.add('red');


const inputElement = document.querySelectorAll('input')
console.log([...inputElement]);

// inputElement[0];
// inputElement[1];

//создание элемента
const submitButtonElement = document.createElement('button');
submitButtonElement.innerText = 'Результат';
submitButtonElement.classList.add('submit-button')
 headerElement.after(submitButtonElement)

// создаем функцию
 const submitButtonHandler =  ()=>{
// найдем и удалим существующий спан
const createdSpanElement = document.querySelector('.result');
if(createdSpanElement){createdSpanElement.remove()};



    const inputElement = document.querySelectorAll('input')
    const element1 = inputElement[0].value;
    const element2 = inputElement[1].value;
    const sum = +element1 + +element2;
    const resultElement = document.createElement('span');
    resultElement.classList.add('result')
    resultElement.innerText = sum;
    const bodyElement = document.querySelector('body');
    bodyElement.append(resultElement)
    
 }

 submitButtonElement.addEventListener('click',submitButtonHandler);

 console.log('Javasript');
 