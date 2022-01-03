let weather = {
    "apiKey" : "20932b964dbfe78cb56c83551aa2466f",
    fetchWeather : function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey 
        )
            
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));     
    },

    displayWeather : function(data) {
        const {name} = data;
        const { description, icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, description, icon, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".description").innerText = description ;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png"
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/? " + name + "')";
    },

    search : function() {
        this.fetchWeather(document.querySelector (".search-bar").value);
    },
};
    
document
.querySelector(".search button")
.addEventListener("click", function(){
weather.search();
});

document.querySelector(".search-bar")
.addEventListener("keyup", function (event){
    if(event.key == "Enter"){
        weather.search();
    }
   
});

weather.fetchWeather("Hyderabad");