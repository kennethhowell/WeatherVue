app.component("display-weather", {


template:
/*html*/`
<h1>Hello world!</h1>
<h4>Current Temperature: {{ weather.data.current.temp + "&deg; F" }}</h4>
<h4>Humidity: {{ weather.data.current.humidity + '%'}}</h4>
<h5>Currently: {{ weather.data.current.weather[0].main }} / {{ weather.data.current.weather[0].description }} </h5>
<br>
<h1>Extended Forecast 8)</h1>
<div v-for="(dailyWeather, index) in weather.data.daily">
    {{ index }} Your forecast for: {{ new Date(dailyWeather.dt * 1000).toLocaleDateString() }} is as follows -
    <div>
    High: {{ dailyWeather.temp.max }} // Low : {{ dailyWeather.temp.min }}
    <br>
    Humidity: {{ dailyWeather.humidity + "%"}} / Dew Point: {{ dailyWeather.dew_point }}
    <br>
    {{ dailyWeather.weather[0].main + " / " + dailyWeather.weather[0].description }}
    <br>
    Chance of rain: {{ (dailyWeather.pop * 100) + "%"}}    
    </div>
    <br>
</div>


`,

data: function(){
    return {
         weather: null 
    }
},

created: function(){
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.51&lon=-98.64&exclude={part}&units=imperial&appid=" + openWeatherApiKey)
    .then(response => {this.weather = response
    console.log(this)})

}


})