const calculateBmi = () => {
  // const height = parseFloat(document.getElementById("height").value);

  // const weight = parseFloat(document.getElementById("weight").value);

  const inputDates = document.querySelectorAll('input');
  const weight = inputDates[0].value;
  const height = inputDates[1].value;
  const heightInMeter = height/100;

if(isNaN(weight) || isNaN(height) || weight<= 20 || height<= 50 || height> 250 || weight>250){
  alert('Введены не коректные данные')
  return;
}

  const  bmiResult1 = weight/(heightInMeter * heightInMeter);
// if (height > 0 && weight > 0 && height < 250 && weight < 250) {

  
  
   

  let category = "";
  if (bmiResult1 < 18.5) {
    category = "Недостаточный вес";
  } else if (bmiResult1 >= 18.5 && bmiResult1 < 24.9) {
    category = "Норма";
  } else if (bmiResult1 >= 25 && bmiResult1 < 30) {
    category = "Пора сходить в спортзал";
  } else {
    category = "ХВАТИТ ЖРАТЬ!!!!";
  }
  const infoElement = document.getElementById("calc-conteiner");
  //вывод результата в консоль
let bmiResultElement = document.getElementById('bmiResult');
if(!bmiResultElement){
  bmiResultElement = document.createElement("span");
  bmiResultElement.id = 'bmiResult'
  infoElement.append(bmiResultElement);
}
 
  bmiResultElement.innerText = `Ваш BMI: ${bmiResult1.toFixed(2)} (${category})`;
  bmiResultElement.classList.add('result-bmi')
  

  const bmiScale = document.querySelector('.bmi-scale');
  const bmiPercentage = Math.min((bmiResult1 / 40) * 100, 100); // нормализуем до 100%
  bmiScale.style.width = bmiPercentage + '%';

  // Изменение цвета шкалы в зависимости от категории
  if (bmiResult1 < 18.5) {
      bmiScale.style.backgroundColor = '#ff9800'; // оранжевый
  } else if (bmiResult1 >= 18.5 && bmiResult1 < 24.9) {
      bmiScale.style.backgroundColor = '#64f503'; // зеленый
  } else if (bmiResult1 >= 25 && bmiResult1 < 30) {
      bmiScale.style.backgroundColor = '#ffeb3b'; // желтый
  } else {
      bmiScale.style.backgroundColor = '#f44336'; // красный
  }
}


const button = document.querySelector("button");

button.addEventListener("click", calculateBmi);
