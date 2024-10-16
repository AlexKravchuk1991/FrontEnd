const locationElement = document.querySelector('#location')
const mainIcon = document.querySelector('#main-icon')
const temperatureNowText = document.querySelector('.temperature-now-text');
const wetherText = document.querySelector('#weather')
const todayDate = document.querySelector('#today')
const weekDayBlock =document.querySelector('.weekDay-block')


console.log(locationElement);




const getDataGeo = async()=> {
    const res1 = await fetch('https://get.geojs.io/v1/ip/geo.json')
    const data1 = await res1.json()
    const latitude = data1.latitude;
    const longitude = data1.longitude;

    const city = `${latitude},${longitude}`;

    const res2 = await fetch(`https://api.weatherapi.com/v1/current.json?key=338eeff4a86c4040a7f82409241610&q=${city}&aqi=no`)
    const dataOfWether = await res2.json();

     locationElement.textContent = `${dataOfWether.location.name}, ${data1.country_code}`;
     temperatureNowText.textContent = `${Math.round(dataOfWether.current.temp_c)} °C`;
     wetherText.textContent = dataOfWether.current.condition.text;
     const iconUrl = dataOfWether.current.condition.icon;
     mainIcon.src = iconUrl;

     const weeklyForecast = await getDataGeoForWeek(latitude,longitude);
     displayWeeklyForecast(weeklyForecast)

}

function getLocalizedMonthName(date, locale) {
    return new Intl.DateTimeFormat(locale, {
      month: 'long',
    }).format(date);
  }
  function getLocalizedWeekDayName(date, locale) {
    return new Intl.DateTimeFormat(locale, {
      weekday: 'short',
    }).format(date);
  }


  const date = new Date();
  
 
 todayDate.textContent = `${getLocalizedWeekDayName(date,'rus')}, ${getLocalizedMonthName(date, 'rus')} ${date.getDate()}`



 const getDataGeoForWeek = async(latitude, longitude)=>{
  const res2= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=338eeff4a86c4040a7f82409241610&q=${latitude},${longitude}&days=8&aqi=no&alerts=no`)
    const dataOfWeatherForweek = await res2.json();
    return dataOfWeatherForweek.forecast.forecastday;
 }

 const displayWeeklyForecast = (forecastDays) => { 
  weekDayBlock.innerHTML = ''; 

  forecastDays.slice(1,8).forEach((day) => {
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');

      dayDiv.innerHTML = `
          <div class="icon-small">
              <img src="${day.day.condition.icon}" alt="" height="50">
          </div>
          <div class="weekDay"><p class="text-weekDay">${getLocalizedWeekDayName(new Date(day.date), 'ru-RU')}</p></div>
          <div class="temperature-max"><p class="temperature-max-text">${Math.round(day.day.maxtemp_c)}°</p></div>
          <div class="temperature-min"><p class="temperature-min-text">${Math.round(day.day.mintemp_c)}°</p></div>
      `;

      weekDayBlock.appendChild(dayDiv);
  });
}

getDataGeo()
