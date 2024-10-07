const hello = "hello, node.js";
console.log(hello);
console.log(typeof hello);

let student;

student = "Vladimir";
student = "Mykola";
console.log(student);

// ! красный цвет кометариев
// * ярко зеленый цвет
// просто зеленый
// todo Оранжевый цвет кометариев

const language = "JavaScript";
// * константе нельзя перезаписывать значения
console.log(language);

//! примитивные тыпы
//* string- строка

let planet = "Earth";

let greeting = "мы  с планеты " + planet;

console.log(greeting);
let planetNumber = "3";

let greeting1 = `Мы с планеты ${planet}. Она находиться в солнечной системе. Это ${planetNumber} планета от Солнца.`;

console.log(greeting1);

let n1 = 42;
let n2 = 3.14;
let n3 = -41;

let lastSafeInteger = Number.MAX_SAFE_INTEGER;

console.log("это числа", n1, n2);

console.log(lastSafeInteger);

//*boolean - значение

let isStudent = true;
let isBackEnd = false;
console.log(isStudent);

let nothing = null;

//! операция с данными
//* приобразование в строку

console.log("операция с данными");

let sum = 14 + 2 + "2";
console.log(sum);

//явное преобразование

let sum1 = String(42) + " - ответ на главный вопрос";
console.log(sum1);

//* преобразование к числам
//* получиться преобразовать только если значения допустимые к преобразованию в число

let sum2 = 2 + Number("2");

console.log(sum2);

let sum3 = 1000 + Number("100$");
console.log(sum3);
//* NaN- Not a Number

//* через parthInt

let sum4 = 1000 + parseInt("100$");

console.log(sum4);

let b1 = Boolean("");
let b2 = Boolean(100);

console.log("b1 - " + b1);
console.log("b2 - " + b2);

//! Математические операторы

let v1 = 12 + 45;
let v2 = 10 - 5;
let v3 = 2 * 2;
let v4 = 10 ** 10; // возведение в степень
let v5 = 8 / 4;
let v6 = 12 % 2; //остаток от деления на 2
let v7 = Math.sqrt(16); // квадратный корень

let random = Math.random; // случайное значение от 1 до 100

let random1 = Math.floor(Math.random() * 100) + 1;
console.log("случайное число - " + random1);

console.log("v1 result= " + v1);

// ! операторы сравнения

console.log("Операторы сравнения");
let res = 25 + 10 + 5 < 25 + (10 - 5);
console.log(res);


//! == - сравнение с приведением к одному типу
//! === - строгое сравнение без приведения к одному типу

console.log(25 === "25");
