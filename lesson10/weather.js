const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/wakefield%20rhode%20island?unitGroup=us&key=2P7SUHYC4RMT9L5759A8NEBTR&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = t.toFixed(2);
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#ws').textContent = data.currentConditions.windspeed;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';



    const temp = document.querySelector('#t').textContent;
    const windspeed = document.querySelector('#ws').textContent;



    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

    if (temp <= 50 && windspeed >= 3){
        const windchill = document.querySelector('#wc');
        windchill.textContent = chill;
    };
  };
getWeather();
//wind chill calculation //
