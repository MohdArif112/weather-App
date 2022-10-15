
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
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;


    let minMaxTemp= document.getElementById("min-max");
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)} &deg;c (min)/ ${Math.ceil(weather.main.temp_max)} &deg;c`; 



    let weatherType = document.getElementById("weather");
    // weatherType.innerText = "Rain";
    weatherType.innerText = `${weather.weather[0].main}`; 


    let date = document.getElementById("date");
    let todayDate =new Date();
    date.innerText = dateManage(todayDate);

    //settimf images according to city waether

    if(weatherType.textContent =='Clear'){
        document.body.style.backgroundImage="url('images/clear.jpg')"
    }
    if(weatherType.textContent =='Clouds'){
        document.body.style.backgroundImage="url('images/cloudy-weather-image.jpg')"
    }
    if(weatherType.textContent =='Rain'){
        document.body.style.backgroundImage="url('images/rainy-weather-image.jpg')"
    }
    if(weatherType.textContent =='Mist'){
        document.body.style.backgroundImage="url('images/mist.jpg')"
    }
    if(weatherType.textContent =='Thunderstrom'){
        document.body.style.backgroundImage="url('images/thunderstrom.jpg')"
    }

}
// date manage

function dateManage(date){
    let days =["Sunday","Monday","tuesday","Wednwsday","Thursdar","Friday","Saturday"];

    let months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let dateshow = date.getDate();

    let day= days[date.getDay()];

    return `${dateshow} ${month} (${day}), ${year}`;
}

