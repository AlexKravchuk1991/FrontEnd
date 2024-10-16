const locationElement = document.querySelector('#location')
const mainIcon = document.querySelector('#main-icon')
const temperatureNowText = document.querySelector('.temperature-now-text');
const wetherText = document.querySelector('#weather')



console.log(locationElement);





const getDataGeo = async()=> {
    const res1 = await fetch('https://get.geojs.io/v1/ip/geo.json')
    const data1 = await res1.json()
    const city = data1.city;

    const res2 = await fetch(`https://api.weatherapi.com/v1/current.json?key=338eeff4a86c4040a7f82409241610&q=${city}&aqi=no`)
    const dataOfWether = await res2.json();

     locationElement.textContent = `${dataOfWether.location.name}, ${data1.country_code}`;
     temperatureNowText.textContent = `${Math.round(dataOfWether.current.temp_c)} °C`;
     wetherText.textContent = dataOfWether.current.condition.text;
     const iconUrl = dataOfWether.current.condition.icon;
     mainIcon.src = iconUrl;
}

getDataGeo()