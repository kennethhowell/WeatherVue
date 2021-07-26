app.component("display-weather", {


template:
/*html*/`
<h1>Hello world!</h1>
<h4>AJAX response test: {{ weather }}</h4>

`,

data: function(){
    return {
         weather: null 
    }
},

mounted: function(){
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.51&lon=-98.64&exclude={part}&appid=" + openWeatherApiKey)
    .then(response => (this.weather = response))
    // .then(function(response){  
    //     console.log(this.weather)
    //     console.log("hey!?")
    //     console.log(response)
    //     this.weather = response;
    //     console.log(this.weather)
    //     return this.weather = response;
    // })

}



})