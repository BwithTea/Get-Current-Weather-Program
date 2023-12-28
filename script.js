
let weather = {
  "apikey": "e36a1fcc8d084b42bdbb951bea275a23",
  Fetch_Weather: function (city) {
    fetch(
      "https://api.weatherbit.io/v2.0/current?city=" 
      + city 
      + "&key=" 
      + this.apikey 
      + "&include=hourly"
    ).then((Response) => Response.json())
    .then((data) => this.displayweather(data))
  },
  converttofah: function(celsius) {
    fah = celsius * (9/5) + 32
    return Math.floor(fah)
  },
  displayweather: function (data) {
    const {city_name,app_temp,clouds,rh,wind_spd} = data.data[0];
    const {description,icon} = data.data[0].weather;
    fahrenheit = this.converttofah(app_temp);
    console.log(app_temp,fahrenheit,description,clouds,rh,wind_spd,city_name)
    document.querySelector(".city").innerText = "Weather in " + city_name;
    document.querySelector(".icon").src = "https://www.weatherbit.io/static/img/icons/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = fahrenheit + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + rh + "%" ;
    document.querySelector(".wind").innerText = "Wind speed: " + rh + " km/h" ;
    document.body.style.backgroundImage = "url('https://source.unsplash.com/2000x1200/?" + city_name + "')"
  },
  search: function () {
    this.fetchweather(document.querySelector(".search-bar").value);
  }
}


document.querySelector(".search button").addEventListener("click", function() {
  weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
  if (event.key == "Enter") {
    weather.search()
  }
})


weather.Fetch_Weather("Denver")