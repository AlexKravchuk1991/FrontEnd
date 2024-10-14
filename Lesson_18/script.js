const picture = document.querySelector('#img-dog') 
const uploadButton = document.querySelector('#upload-button')
const stopUpdateBtn = document.querySelector('#stop-udate')

let isRunning = false;
let interval;


const getDog = ()=>{
fetch('https://dog.ceo/api/breeds/image/random').then(element=>
 element.json())
 .then(data => {
    picture.src = data.message
 });
}

const toggleInterval =  ()=>{
    if(!isRunning){
    interval = setInterval(getDog,5000); 
    stopUpdateBtn.textContent = 'Stop update';
    isRunning = true;
    }else{
        clearInterval(interval)
        stopUpdateBtn.textContent = "Start Update"
        isRunning = false
    }
}

getDog();



uploadButton.addEventListener('click',getDog)
stopUpdateBtn.addEventListener('click', toggleInterval)


 

 


