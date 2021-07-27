app.component("display-weather", {


template:
/*html*/`
<h1>Hello world!</h1>
<h4>Current Temperature: {{ weather.data.current.temp + "&deg; F" }}</h4>
<h4>Humidity: {{ weather.data.current.humidity + '%'}}</h4>


`,

data: function(){
    return {
         weather: null 
    }
},

created: function(){
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.51&lon=-98.64&exclude={part}&units=imperial&appid=" + openWeatherApiKey)
    .then(response => (this.weather = response))
}



})