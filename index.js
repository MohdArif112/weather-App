
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// 04dc7ab1edf2b3c3ff1fa6585dc607fe

const weatherApi = {
    key: "04dc7ab1edf2b3c3ff1fa6585dc607fe",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox= document.getElementById("input-box");

// Event Listener function on keypress
searchInputBox.addEventListener("keypress", (event)=>{
    if(event.keyCode == 13){

        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
})


//Get weather report

function getWeatherReport(city) {
    //Api calling
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport)
}

// Show weather report on UI


function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById("city");
    city.innerText= `${weather.name},${weather.sys.country}`;

    let temp = document.getElementById("temp");
    temp.innerText=`${Math.round(weather.main.temp)}&deg;c`;
}
// date manage



