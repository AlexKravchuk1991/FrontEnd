
const transport = {
    speed: 140,
    color: 'Red',
    move: function(){
        console.log('I am moving');
        
    }   
};

console.log(transport.speed);

const prop = 'speed';

console.log(transport[prop]);


transport.move();


const car = {
    model: "Tesla Model 3",
    __proto__:transport,
};

console.log(car.model);
console.log(car.move());

const exampleArray = new Array();

const ship = new Object();

// добавляем свойства
ship.year = 1996;

console.log(ship);

Object.setPrototypeOf(ship, transport);
ship.move();



const johnyDeep = {
    name: 'Johny',
    surname: 'Deep',
    age: 50,
    hobbies: ['cricet','golf', 'bowling'],
    films: {
        year1999: ['Pirates1', 'Edvard'],
        year2003: ['Pirates2', 'Pirates3'],
    },
    singing() {
        console.log('I m singing')
        
    }
}

const RikkimartinConsert = {
    city: 'Berlin',
    date: '1998-05-25 14:00',
    biletes: 8000,
    songs: ['LA-LA','Da vida Loca']
}

console.log(johnyDeep.name);

johnyDeep.singing();

johnyDeep.weight = 70;
console.log(johnyDeep);

delete johnyDeep.age;

const ifJohnyHasAge = 'age' in johnyDeep;
console.log(ifJohnyHasAge);

console.log(Object.hasOwn(johnyDeep, 'weight'));

const keysJohny = Object.keys(johnyDeep);

console.log(keysJohny);

const valuesJohny = Object.values(johnyDeep);

console.log(valuesJohny);


const films =  Object.values(johnyDeep.films);
const fimls2 = films.flat();
console.log(fimls2);





