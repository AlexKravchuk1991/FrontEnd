
function helloWorld(value){
    if(typeof value === 'string'|| typeof value === 'number'){
        return `Hello, ${value}`;
    }
    console.log("give me string value");
    
    
}


const greeting= helloWorld('javaScript');
console.log(greeting);

const greeting2 = helloWorld('42');
console.log(greeting2);


const sum = function(num1, num2){
    return num1+num2
};

const sumResult = sum(50,30)

console.log('сумма двух чисел - ', sumResult);


const multtiply =(a,b,c)=>a*(b+c);
const multtiply1 = (a,b,c)=>{
    const result =a*b*c;
    return `${result} - result, это результат умножения чисел ${a}, ${b} и ${c}`
}

console.log(multtiply(10,15,5));

console.log(multtiply1(5,10,15));

const brothers=[
    {name: 'Legolas', height: 190, race: 'elf', age:500, hasMagic: true},
    {name: 'Ghimli', height: 50, race: 'dwarf', age: 200, hasMagic: false},
    {name: 'Aragorn', height: 190, race: 'human', age:50, hasMagic: false},
    {name: 'Gendalf', height: 200, race: 'magician',age: 2000, hasMagic: true}
]

let frodo = {name: 'Frodo', height:105, race:'hobbit', age: 33, hasMagic: false}

brothers.push(frodo);

console.log(brothers);


const brothersNames = brothers.map(el=> el.name)
console.log(brothersNames);

const brotherAge = brothers.map(el=>el.age)
console.log(brotherAge);

const brotherNameNAge = brothers.map(el=>{
    return el.name + " " + el.age
})

console.log(brotherNameNAge);


console.log('------------Filer------');


console.log(brothers.filter(el=> el.age>=100 && el.hasMagic===true));


console.log('-----------Find---------');
console.log(brothers.find(el=>el.race==='hobbit'));
console.log(brothers.find(el=>el.age>190));

console.log('----------Reduce--------');

let sum2 = brotherAge.reduce((acc, current)=>acc+current,0)

console.log('посчитаем сумму лет всех братьев из массива с возраостами - ',sum2);

let sum3 = brothers.reduce((acc,current)=> acc+ current.age, 0)

console.log('посчитаем сумму лет всех братьев из массива с обьектами- ',sum3);

let allNames = brothers.reduce((acc,current)=> acc+ current.name+ ", ","Братья: ")

console.log(allNames);







