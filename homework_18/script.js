const button = document.querySelector('#button-info')
const picture = document.querySelector('#img-picture')
const catFact = document.querySelector('#intesting-info')


async function getInterestingInfo() {
    const res = await fetch('https://catfact.ninja/fact')
    const photoRes = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')


    const data = await res.json(); 
    const photoData = await photoRes.json();

    picture.src = photoData[0].url;
    catFact.textContent = data.fact;
    
}

button.addEventListener('click',getInterestingInfo);
getInterestingInfo()
