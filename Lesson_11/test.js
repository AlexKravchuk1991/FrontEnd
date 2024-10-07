const arr =[];
const numbers = [4,8,15,16,32,42];
const fruits = ['apple','orange','kiwi','banana']

console.log(fruits);

let kiwi = fruits[2];

// console.log(kiwi);



// for(let i =0;i<fruits.length;i++){
//     console.log((i+1)+'.'+fruits[i]);
    
// }

let fruitsLength = fruits.length;

// let i =1;
// while (i<6){
//     console.log(i,' раз');
//     i++
// }

// let isStudent = false;
// if(isStudent){
//     console.log('похоже что вы студент')
// }
//     else{
//         console.log('похоже что вы не студент')
//     }

    //! методы добавления и удаления элементов массива
    
    
    const animals = ['shark','panda','tiget','otter']
const snake = 'snake';
//* push- метод добавления элемента в конец массива

animals.push(snake);

// console.log(animals);

//* pop - удаляет элементы с конца массива

animals.pop();// метод возвращает удаленный элемент
// console.log(animals);

//* unshift - метод добавления элементов в начало массива

animals.unshift(snake);// метод возвращает длинну массива после добавления
// console.log(animals);

//* shift - метод удаления первого элемента из массива

animals.shift();// метод возвращает удаленный элемент
// console.log(animals);

//! spread syntax - спред оператор
//* удобный способ сделать копию массива

const newAnimals= [...animals];//... - обязательно нужно поставить три точки, такой синтаксис
// newAnimals.push(snake)

// console.log(animals);

// console.log(newAnimals);

const mixedArr1= [...animals,...fruits]

// console.log(mixedArr1);

let copyArr = structuredClone(mixedArr1);

console.log(copyArr);


//! Objects - обьекты

// обьект- ссылочный тип данных
// данные хранят в формате: ключ и значение
// ключи - это строковые значения

const person1= {
    name: "Ron",
    lastname: "Wisley",
    age: 40,
    isAdult: true,
    isMarried: true,
    siblings:['Jinny','Fred','George']
};

const person2= {
    name: "Jinny",
    lastname: "Wisley",
    age: 35,
    isAdult: true,
    isMarried: true,
    siblings:['Fred','Ron','George']
};

const family=[person1,person2]

console.log(person2.name,person2.lastname);


const personInfo = person2.name+ ' '+ person2.lastname +' is sister of '+person1.name+ ' '+ person1.lastname

console.log(personInfo);

const personInfo2 = `${person1.name} ${person1.lastname} is brother of ${person2.name} ${person2.lastname}. He is ${person1.age}.`

console.log(personInfo2);


for(let i = 0; i<family.length; i++){
    console.log(family[i].name +' is '+ family[i].age );
    
}

const variable = 'hasWife';

const person3= {
    name: "Fred",
    lastname: "Wisley",
    age: 35,
    isAdult: true,
    isMarried: true,
    [variable]: true,
    "brothers n sisters":['Jinny','Ron','George']
};

console.log(person3 ["brothers n sisters"]);


const {name, lastname, age, siblings} = person1


console.log(name);
console.log(siblings);
console.log(age);








