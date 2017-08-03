// JavaScript File
      var tenDayForecast = new Array(10);
      var cityName = "";
      $( document ).ready(function() {
        forecast();
    });
      function forecast()
      {
        cityName.replace(/ /g,'');
        console.log(cityName);
        var info = "https://api.wunderground.com/api/c7342c538d6cf73d/forecast10day/forecast/q/autoip.json";
        console.log(info);
        $.ajax(
        {
          url : info,
          dataType: "json",
          success: function(data)
          {
           // var temp = url.current_observation.temp_f;
            
           // alert("Currrent temperature in " + cityName + " is " + temp + "F");
            
            tenDayForecast[0] = data.forecast.simpleforecast.forecastday[0];
            tenDayForecast[1] = data.forecast.simpleforecast.forecastday[1];
            tenDayForecast[2] = data.forecast.simpleforecast.forecastday[2];
            tenDayForecast[3] = data.forecast.simpleforecast.forecastday[3];
            tenDayForecast[4] = data.forecast.simpleforecast.forecastday[4];
            tenDayForecast[5] = data.forecast.simpleforecast.forecastday[5];
            tenDayForecast[6] = data.forecast.simpleforecast.forecastday[6];
            tenDayForecast[7] = data.forecast.simpleforecast.forecastday[7];
            tenDayForecast[8] = data.forecast.simpleforecast.forecastday[8];
            tenDayForecast[9] = data.forecast.simpleforecast.forecastday[9];
            console.log(tenDayForecast);
            formatTable(tenDayForecast);
          }
        });

      }
    
      function formatTable(tenDayForecast)
      {
          var content = ""
        
          content += '<tr>';
          for(i=0; i<10; i++){
            
              var high = tenDayForecast[i].high.fahrenheit;
              var low = tenDayForecast[i].low.fahrenheit;
              var condition = tenDayForecast[i].conditions;
			  var day = tenDayForecast[i].date.weekday_short;
              var date = tenDayForecast[i].date.month + "/" + tenDayForecast[i].date.day;
              var imgSrc = "img/weather_icons_green/";
              if (condition == "Partly Cloudy") {
                console.log("PARTLY CLOUDY");
                imgSrc += "suncloudy";
            } if (condition == "Overcast" || condition == "Mostly Cloudy") {
                imgSrc += "cloudy";
            } if (condition.toUpperCase().includes("RAIN")) {
                imgSrc += "rainy";
            } if (condition == "Clear") {
                condition = "Clear Skies";
                imgSrc += "sun";
            }
          
              content += '<td id = "weatherData">';
			content += day +"<br>";
              content += date + "<br><br>";
              content += '<div>';
              content += '<img src = "' + imgSrc + '.png" id = "greenIMG"><br><br>';
              content += '</div><div id = "hiLo">';
              content += 'High: ' + high + '&deg<br></div><div id = "hiLo">Low: ' + low + '&deg';
              content +=  '</div></td>';
          }
          content += '</tr>';
          
          
          $('#weatherTable').append(content);
      }
    
    
        
     function closeMap()
     {
       cityName = $("#place-name").text();
       $("#map").hide();
       forecast();
     }
     function initMap() {
        
         var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 36.6149, lng: 121.8221},
          zoom: 13
        });
        var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        var types = document.getElementById('type-selector');
        var strictBounds = document.getElementById('strict-bounds-selector');

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

        var autocomplete = new google.maps.places.Autocomplete(input);

        // Bind the map's bounds (viewport) property to the autocomplete object,
        // so that the autocomplete requests use the current map bounds for the
        // bounds option in the request.
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }

          infowindowContent.children['place-icon'].src = place.icon;
          infowindowContent.children['place-name'].textContent = place.name;
          infowindowContent.children['place-address'].textContent = address;
          infowindow.open(map, marker);
        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        /*
        function setupClickListener(id, types) {
          var radioButton = document.getElementById(id);
          radioButton.addEventListener('click', function() {
            autocomplete.setTypes(types);
          });
        }
        

        setupClickListener('changetype-all', []);
        setupClickListener('changetype-address', ['address']);
        setupClickListener('changetype-establishment', ['establishment']);
        setupClickListener('changetype-geocode', ['geocode']);

      */
      }
