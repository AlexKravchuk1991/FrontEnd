const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

const nameAndJedi = starWarsHeroes.map(el=>({
    name: el.name,
    isJedi: el.isJedi
}));

console.log(nameAndJedi);

const newJediHeroesYounger40 = [];
for(const el of starWarsHeroes){
    if(el.isJedi && el.age < 40){
        newJediHeroesYounger40.push({
            name: el.name,
            age: el.age
        })
    }
};

console.log(newJediHeroesYounger40);


const totatalAge = starWarsHeroes.reduce((res, el)=>{
    return res + el.age;
},0);

console.log(totatalAge);

const ageHeroesPlusTen = starWarsHeroes.map(el=>({
...el,
age: el.age +10
}))

console.log(ageHeroesPlusTen);


const arrayWithDartVader = starWarsHeroes.map(el=> el.name === "Anakin Skywalker" ? {
    name: 'Darth Vader',
    isJedi: false,
    age: 50
}: el);

console.log(arrayWithDartVader);










