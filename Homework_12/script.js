const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];

let namesAndAges = [];

for(let i = 0;i<names.length;i++){
    namesAndAges.push(`${names[i]} ${ages[i]} лет\годов`);
}

// console.log(namesAndAges);


let namesAndAgesReverse = [];
for(let i =names.length -1;i>=0;i--){
namesAndAgesReverse.push(namesAndAges[i])
}

// console.log(namesAndAgesReverse);

const countries = [];
countries.push("Франция", "Германия", "Италия");

let deletedCoutry=countries.pop(countries);

countries.unshift(deletedCoutry);

const coutriesNew = [...countries,'Испания']

// console.log(coutriesNew);



let car = {
    brand: 'BMW',
    model: 'X5',
    year: '2010',
    isElectric: false,
    getCarInfo: ()=> (`${car.brand}, ${car.model},${car.year}`)
}

console.log(car.getCarInfo());

// for (let key in car){
//     console.log(`key: ${key}, value: ${car[key]}`);
    
// }


console.log(Object.keys(car));

console.log(Object.values(car));

