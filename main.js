let weather = {
    "apikey" : "934dce5e1d15d30a7b853df697d89c9e",
    fetchWeather : function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
              + "&units=metric&appid=" 
               + this.apikey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data ;
        const { icon , description } = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerHTML = "weather in " +  name ;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity " + humidity + " %";
        document.querySelector(".wind").innerHTML = " wind speed "  +  speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
       // to change to pic document.body.style.backgroundImage = "url('https://source.unsplash.com/1600*900/?" + name +  "')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click" , function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup" ,function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});
weather.fetchWeather("oran");