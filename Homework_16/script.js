const buttonTimer = document.querySelector(".timer-button");

const input = document.querySelector(".input-cont");

const timerDisplay = document.querySelector(".timer-number");

let timer;

const tiimerFunction = () => {
  let time = parseInt(input.value);

  if (isNaN(time) || time <= 0) {
    alert("введите коректные данные");
    return;
  }

  clearInterval(timer);

  timerDisplay.textContent = `${time} сек`;

  timer = setInterval(() => {
    time--;
    timerDisplay.textContent = `${time} сек`;
    buttonTimer.classList.toggle('timer-button2')

    if (time <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = `Мы все сделали верно!`;
      setTimeout(()=>{
        timerDisplay.textContent = `00 сек`
        input.value = ''
      },3000)
    }
  }, 1000);
};

buttonTimer.addEventListener("click", tiimerFunction);

setInterval()
