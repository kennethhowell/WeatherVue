app.component("display-weather", {


template:
/*html*/`
<h1>Hello world!</h1>
<h4>Current Temperature: {{ weather.data.current.temp + "&deg; F" }}</h4>
<h4>Humidity: {{ weather.data.current.humidity + '%'}}</h4>
<h5>Currently: {{ weather.data.current.weather[0].main }} / {{ weather.data.current.weather[0].description }} </h5>



`,

data: function(){
    return {
         weather: null 
    }
},

mounted: function(){
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.51&lon=-98.64&exclude={part}&units=imperial&appid=" + openWeatherApiKey)
    .then(response => (this.weather = response))
}



})