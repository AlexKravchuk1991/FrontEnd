// const nameOfUser = prompt('Введите имя');

// console.log('all is good');
// console.log(`hello, ${nameOfUser}`);

// const inpulElement = document.querySelector("input");
// const buttonElement = document.querySelector("button");
// const nameOfUser = inpulElement.value;
// buttonElement.addEventListener("click", () => {
//   console.log(`hello, ${inpulElement.value}`);
// });

// console.log('цикл начался');

// const startDate = Date.now();

// for (let i = 0; i < 5000000000; i++) {
//     const a = i;
// }

// const endDate = Date.now();
// console.log("цикл закончился через - " + (endDate - startDate) + 'сек.');

console.log("Program Started");

// setTimeout(() => {
//   console.log("Ассинхронный консоль лог 5000");
// },0);

// setTimeout(() => {
//   console.log("Ассинхронный консоль лог 2000");
// }, 2000);
const  ii = setInterval(()=>{
console.log('set interval');

},2000)


console.log(ii);

setTimeout(()=>{
clearInterval(ii)
},10000)




console.log("all is good");
