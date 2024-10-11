// const promiseExample = new Promise(
//     (res,rej)=>{
//         console.log('Промис начал свою работу');
        
//         let randomNumber;
        // setTimeout(()=>{
        //  randomNumber= Math.random();
        
        // if (randomNumber > 0.5){
        //     res(randomNumber);
        //     console.log('результат успешен');
            
        // }else{
        //      rej(randomNumber);
        //     console.log('резульатат не успешный');
            
        // }
        
        // },5000)
//         randomNumber=Math.random();
//         if(randomNumber>0.5){
//             res(randomNumber);
//         }else{
//             rej(randomNumber);
//         }

//     }
// );

// setTimeout(()=>{
//     console.log('Отработал СЕТ ТАЙМ АУТ');
    
// },0)

// promiseExample.then((responce)=>{
//     console.log(responce);
    
// })

//console.log(promiseExample);




const resOfFetch = fetch('https://jsonplaceholder.typicode.com/posts/');

console.log(resOfFetch);
console.log('мы сделали fetch запрос');

// setTimeout(()=>{
//     console.log('отработал СЕТ ТАЙМАУТ');
    
// },1000)


// const functionCallBack = (responce)=>{
//     responce.json().then((bodyOfresponce)=>{
       
        
//     })
// }


// resOfFetch.then(functionCallBack);



// console.log('программа работает дальше');


// const r = Math.random();

// const rInPromise = new Promise((res,rej)=>{
//     res(Math.random)
// })

// console.log(r);
// rInPromise.then((r)=>{
//     console.log(r);
// });

// resOfFetch.catch((error)=>{
//     console.log('здесь ошибка error');
    
// })

// resOfFetch.finally(()=>{
//     console.log('finaly function - выполняется всегда!');
    
// })


resOfFetch
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((bodyOfResponse) => {
    // console.log(bodyOfResponse);
   renderFirst10(bodyOfResponse);
  });

resOfFetch.catch((error) => {
  console.log('Здесь ошибка', error);
});

resOfFetch.finally(()=> {
    console.log('Finally, в конце выполняется')
});

console.log('Программа работает дальше');

// Оборачиваем данные в пропис!!!!
// const r = Math.random();

// const rInPromise = new Promise((res, rej) => {
//   res(Math.random());
// });

// console.log(r);

// rInPromise.then((r) => {console.log(r)});


function renderFirst10(arrayOfposts){
const ulElement = document.createElement('ul')
arrayOfposts
.slice(0, 10)
.map(el=>el.title)
.forEach(title=>{
const newLiElement = document.createElement('li');
newLiElement.textContent = title;
ulElement.append(newLiElement)
  //  document.querySelector('h1').after(document.createElement('span').)
});
document.body.append(ulElement)
 
}

console.log(renderFirst10);
