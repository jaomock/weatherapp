// const $ = require('jquery');

let search = document.getElementById('search')
let defaultTxt = document.getElementById('default')

let country = ''
let time = ''
let city = ''
let tempC = ''
let tempF = ''
let weatherDesc = ''
let wind = ''
let humid = ''
let vis = ''
let feelsLike = ''
let feelsLikeF = ''

let swapCount = 0


let countryC = document.querySelector('.country')
let cityC = document.querySelector('.city')
let timeC = document.querySelector('.time')
let temp = document.querySelector('.temp')
let weatherDescC = document.querySelector('.weatherDesc')
let windC = document.querySelector('.wind')
let humidC = document.querySelector('.humid')
let visC = document.querySelector('.vis')
let feelsLikeC = document.querySelector('.feelsLike')

swap = document.querySelector('.labels');

swap.addEventListener('click', function(){

if(swapCount === 1){
        temp.textContent = tempC + '°C'
        feelsLikeC.textContent = 'Feels like:' + feelsLike + '°C'
        swapCount--
    } else {
        temp.textContent = tempF + '°F'
        feelsLikeC.textContent = 'Feels like:' + feelsLikeF + '°F'
        swapCount++
    }
})

search.addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        fetch('http://api.weatherapi.com/v1/current.json?key=a8a8a7fdd7c54ca28c3231933231809&q='+ search.value + '&aqi=no', {mode: 'cors'})
        .then(function(response){
            return response.json()
        }).then(data => {
            console.log(data)
            city = data.location.name
            time = data.location.localtime
            country = data.location.country
            tempC = data.current.temp_c
            tempF = data.current.temp_f
            weatherDesc = data.current.condition.text
            wind = data.current.wind_kph
            humid = data.current.humidity
            vis = data.current.vis_km
            feelsLike = data.current.feelslike_c
            feelsLikeF = data.current.feelslike_f
        }).then(function(){
            createDiv()
        }).catch(function(err){
            console.log(err)
            alert('Please enter a valid City name')

        })
    }
})

function createDiv(){
    defaultTxt.textContent = ''


    let icons = document.querySelector('.weatherIcon')
    icons.style.opacity = '1'

    let border = document.querySelector('.container')
    border.style.opacity = '1'

    if(country === 'United States of America'){
        country = 'USA'
    }

    countryC.textContent = country
    countryC.classList.add('country')

    cityC.textContent = city
    cityC.classList.add('city') 

    if(swapCount === 0){
        temp.textContent = tempC + '°C'
        feelsLikeC.textContent = 'Feels like:' + feelsLike + '°C'
    } else if(swapCount === 1){
        temp.textContent = tempF + '°F'
        feelsLikeC.textContent = 'Feels like:' + feelsLike + '°F'
    }

    temp.classList.add('temp')
    feelsLikeC.classList.add('.feelsLike')

    timeC.textContent = time
    timeC.classList.add('time')

    weatherDescC.textContent = weatherDesc
    weatherDescC.classList.add('weatherDesc')

    windC.textContent = 'Wind:' + wind + 'KM/H'
    windC.classList.add('wind')

    humidC.textContent = 'Humidity:' + humid + '%'
    humidC.classList.add('humid')

    visC.textContent = 'Visibility:' + vis + 'KM'
    visC.classList.add('vis')



    switch(weatherDesc){
        case "Clear":
            icons.src = 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png'
            break;
        case "Partly cloudy":
            icons.src = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-256.png'
            break;
        case "Sunny":
            icons.src = 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png'
            break;
        case "Light rain":
            icons.src = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-30-256.png'
            break;
        case "Heavy rain":
            icons.src = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-32-256.png'
            break;
        case "Mist":
            icons.src = 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-256.png'
            break;
        case "Fog":
            icons.src = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-27-256.png'
            break;
        case "Overcast":
            icons.src = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-256.png'
            break;
    }

}