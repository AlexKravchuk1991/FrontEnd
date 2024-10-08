
// Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. 

function arrayToObjeck (array){
    const result = {};
    array.forEach(el => {
        result[el] = el;
    });
    return result
}

//const  exampleArray = ['a', 36.6, 'John Doe'];
//const resObj = arrayToObjeck(exampleArray);
// console.log(resObj);



// Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. 
function arrayToObjeck2 (array) {
    // const result = {};
    
    return Object.fromEntries(array);
    // array.forEach(el=>{
    // const[key,value] = el;
    // result[key] = value;
    };

// const exampleArr = [
//     [ 'height', 170 ],
//     [ 'weight', 80 ],
//     [ 'sport', 'regbi' ],
//     [ 'full name', 'John Doe' ],
//     [ 'sing', 'love' ],
//     [ 'speed', 90 ]
//   ];
  //const resObl1 = arrayToObjeck2(exampleArr)
  //console.log(resObl1);
  
//   Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.

function objectToString (obj) {
    return Object.values(obj).join(', ')
}

//const example3 = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
//const res3 = objectToString(example3);
//console.log(res3);


// Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, но значения свойств - это их типы.

function objectToObjectWithTypes (obj) {
    const result = {};
    // for(let key in obj){
    //    result[key]= typeof obj[key];
    // }
    Object.keys(obj).forEach(el=> 
        result[el] = typeof obj[el]
    )
    return result;
}

const example = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };

const example2 = objectToObjectWithTypes(example);

console.log(example2);



