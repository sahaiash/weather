const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apikey="abe5429cdadbbb270f47f16a72f2716d";
const SearchBox=document.querySelector(".search input")
const btn=document.querySelector(".search button")
   const imageWeather=document.querySelector(".weather-icon")
   async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
   const data=await response.json();
    console.log(data);
    console.log(SearchBox);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind-speed").innerHTML=data.wind.speed+" "+"Km/hr";
    if(data.weather[0].main=="Clouds"){
        imageWeather.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Rain"){
        imageWeather.src="images/rain.png"
    }
    else if(data.weather[0].main=="Clear"){
        imageWeather.src="images/clear.png"
    }else if(data.weather[0].main=="mist"){
        imageWeather.src="images/mist.png"
    }
    else if(data.weather[0].main=="Mist"){
        imageWeather.src="images/mist.png"
    }
    else if(data.weather[0].main=="Humidity"){
        imageWeather.src="images/humidity.png"
    }
    else if(data.weather[0].main=="Snow"){
        imageWeather.src="images/snow.png"
    }

   }
   btn.addEventListener("click",()=>{
    checkWeather(SearchBox.value);
   })