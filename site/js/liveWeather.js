var temp = 72.0;
var city = "Unknown";
var weatherType = "suncloudy";
var hour = new Date().getHours();

function loadTemperature() {
    $.ajax({
      url: "https://api.wunderground.com/api/b5bf8c4d5d0f262c/conditions/q/autoip.json",
      dataType: "json",
      async: false,
      success: function(data) {
            temp = data.current_observation.temp_f;
            city = data.current_observation.display_location.city;
            var weather = data.current_observation.weather;
            
            
            if (weather == "Partly Cloudy") {
                weatherType = "suncloudy";
                if (hour >= 20) {
                    weatherType = "cloudy_night";
                }
            } if (weather == "Overcast" || weather == "Mostly Cloudy") {
                weatherType = "cloudy";
                if (hour >= 20) {
                    weatherType = "cloudy_night";
                }
            } if (weather == "Rain") {
                weatherType = "rainy";
            } if (weather == "Clear") {
                weatherType = "sun";
                if (hour >= 20) {
                    weatherType = "clear_night";
                }
            }
                        
            document.getElementById('weatherIcon').src = "/img/weather_icons/" + getWeather() + ".png";
            
            $("#wCity").empty();
            $('<div id=wCity>' + city + '</div>').appendTo("#wCity");
            
            $("#wTemp").empty();
            $('<div id=wTemp>' + temp + ' &deg; F</div>').appendTo("#wTemp");
            
            $("#10daytitle").empty();
            $('<div id=10daytitle>Forecast for ' + city + '</div>').appendTo("#10daytitle");
      }
    });
}

$(document).ready(function() {
    loadTemperature();
    console.log(city + ", " + temp + ", " + weatherType);
    
    if (hour >= 20) {
        $('body').css("background-color","#5499C7");
        $(".calculateButton").css("background-color", "#2471A3");
        $("#emailSubmit").css("background-color", "#2471A3");
    } else {
        $('body').css("background-color","#82E0AA");
        $(".calculateButton").css("background-color", "#2ECC71");
        $("#emailSubmit").css("background-color", "#2ECC71");
    }
});

function getCity() {
    return city;
}

function getWeather() {
    return weatherType;
}

function getTemperature() {
    return temp;
}

