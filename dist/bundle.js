/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// const $ = require('jquery');\n\nlet search = document.getElementById('search')\nlet defaultTxt = document.getElementById('default')\n\nlet country = ''\nlet time = ''\nlet city = ''\nlet tempC = ''\nlet tempF = ''\nlet weatherDesc = ''\nlet wind = ''\nlet humid = ''\nlet vis = ''\nlet feelsLike = ''\nlet feelsLikeF = ''\n\nlet swapCount = 0\n\n\nlet countryC = document.querySelector('.country')\nlet cityC = document.querySelector('.city')\nlet timeC = document.querySelector('.time')\nlet temp = document.querySelector('.temp')\nlet weatherDescC = document.querySelector('.weatherDesc')\nlet windC = document.querySelector('.wind')\nlet humidC = document.querySelector('.humid')\nlet visC = document.querySelector('.vis')\nlet feelsLikeC = document.querySelector('.feelsLike')\n\nswap = document.querySelector('.labels');\n\nswap.addEventListener('click', function(){\n\nif(swapCount === 1){\n        temp.textContent = tempC + '°C'\n        feelsLikeC.textContent = 'Feels like:' + feelsLike + '°C'\n        swapCount--\n    } else {\n        temp.textContent = tempF + '°F'\n        feelsLikeC.textContent = 'Feels like:' + feelsLikeF + '°F'\n        swapCount++\n    }\n})\n\nsearch.addEventListener('keypress', function(e) {\n    if(e.key === 'Enter'){\n        fetch('http://api.weatherapi.com/v1/current.json?key=a8a8a7fdd7c54ca28c3231933231809&q='+ search.value + '&aqi=no', {mode: 'cors'})\n        .then(function(response){\n            return response.json()\n        }).then(data => {\n            console.log(data)\n            city = data.location.name\n            time = data.location.localtime\n            country = data.location.country\n            tempC = data.current.temp_c\n            tempF = data.current.temp_f\n            weatherDesc = data.current.condition.text\n            wind = data.current.wind_kph\n            humid = data.current.humidity\n            vis = data.current.vis_km\n            feelsLike = data.current.feelslike_c\n            feelsLikeF = data.current.feelslike_f\n        }).then(function(){\n            createDiv()\n        }).catch(function(err){\n            console.log(err)\n            alert('Please enter a valid City name')\n\n        })\n    }\n})\n\nfunction createDiv(){\n    defaultTxt.textContent = ''\n\n\n    let icons = document.querySelector('.weatherIcon')\n    icons.style.opacity = '1'\n\n    let border = document.querySelector('.container')\n    border.style.opacity = '1'\n\n    if(country === 'United States of America'){\n        country = 'USA'\n    }\n\n    countryC.textContent = country\n    countryC.classList.add('country')\n\n    cityC.textContent = city\n    cityC.classList.add('city') \n\n    if(swapCount === 0){\n        temp.textContent = tempC + '°C'\n        feelsLikeC.textContent = 'Feels like:' + feelsLike + '°C'\n    } else if(swapCount === 1){\n        temp.textContent = tempF + '°F'\n        feelsLikeC.textContent = 'Feels like:' + feelsLike + '°F'\n    }\n\n    temp.classList.add('temp')\n    feelsLikeC.classList.add('.feelsLike')\n\n    timeC.textContent = time\n    timeC.classList.add('time')\n\n    weatherDescC.textContent = weatherDesc\n    weatherDescC.classList.add('weatherDesc')\n\n    windC.textContent = 'Wind:' + wind + 'KM/H'\n    windC.classList.add('wind')\n\n    humidC.textContent = 'Humidity:' + humid + '%'\n    humidC.classList.add('humid')\n\n    visC.textContent = 'Visibility:' + vis + 'KM'\n    visC.classList.add('vis')\n\n\n\n    switch(weatherDesc){\n        case \"Clear\":\n            icons.src = 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png'\n            break;\n        case \"Partly cloudy\":\n            icons.src = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-256.png'\n            break;\n        case \"Sunny\":\n            icons.src = 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png'\n            break;\n        case \"Light rain\":\n            icons.src = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-30-256.png'\n            break;\n        case \"Heavy rain\":\n            icons.src = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-32-256.png'\n            break;\n        case \"Mist\":\n            icons.src = 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-256.png'\n            break;\n        case \"Fog\":\n            icons.src = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-27-256.png'\n            break;\n        case \"Overcast\":\n            icons.src = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-256.png'\n            break;\n    }\n\n}\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;