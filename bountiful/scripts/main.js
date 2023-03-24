const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Carlsbad%2C%20California?unitGroup=us&key=2P7SUHYC4RMT9L5759A8NEBTR&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('.tempi').textContent = t.toFixed(2);
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('.windspeedi').textContent = data.currentConditions.windspeed;
    document.querySelector('.desci').textContent =  data.currentConditions.conditions;
    document.querySelector('.today_img').src = image;
    document.querySelector('.today_img').alt= data.currentConditions.conditions + ' icon';
    document.querySelector('.humidityi').textContent =data.currentConditions.humidity;
    document.querySelector('.sunrisei').textContent =data.currentConditions.sunrise;
    document.querySelector('.sunseti').textContent =data.currentConditions.sunset;
    document.querySelector('.todayimax').textContent=data.days[0].tempmax;
    document.querySelector('.todayimin').textContent=data.days[0].tempmin;
    document.querySelector('.tomorrowimax').textContent=data.days[1].tempmax;
    document.querySelector('.tomorrowimin').textContent=data.days[1].tempmin;
    document.querySelector('.overmorrowimax').textContent=data.days[2].tempmax;
    document.querySelector('.overmorrowimin').textContent=data.days[2].tempmin;




  };
getWeather();