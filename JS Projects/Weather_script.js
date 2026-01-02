// document.addEventListener("DOMContentLoaded",()=> {
//      const cityInput = document.getElementById("city_inp")
//      const getWeatherBtn = document.getElementById("weather-btn")
//      const weatherInfo = document.getElementById("weather-info")
//      const cityNameDisplay = document.getElementById("city-name")
//      const temperatureDisplay = document.getElementById("temperature")
//      const descriptionDisplay = document.getElementById("description")
//      const errorMessage = document.getElementById("error-msge")


//      const API_KEY = "265d56c0ab94764196e54b2accd0d6d3";

//      getWeatherBtn.addEventListener("click",async ()=> {
//         const city = cityInput.value.trim()
//         if(!city) return

//         try {
//           const weatherData = await fetchWeatherData(city)
//           displayWeatherData(weatherData)
           
//         } catch (error) {
//             showError()
//             console.log(error)
//         }
//      })

//      async function fetchWeatherData(city)
//      {
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

//         const response = await fetch(url)

//         if(!response.ok) {
//             throw new Error("City Not Found")
//         }

//         const data = await response.json()
//         return data
//      }

//      function displayWeatherData(data)
//      {
//          // console.log(data)
//          const {name,main,weather} = data

//          cityNameDisplay.textContent = name;
//          temperatureDisplay.textContent = `Temperature : ${main.temp}`
//          descriptionDisplay.textContent = `Description : ${weather[0].description}`

//          weatherInfo.classList.remove("hidden")
//          errorMessage.classList.add("hidden")
//      }  

//      function showError()
//      {
//         weatherInfo.classList.add("hidden")
//         errorMessage.classList.remove("hidden")
//      }
// })



// 2nd try
document.addEventListener("DOMContentLoaded",()=> {
   const input = document.getElementById("city_inp");
   const getWeather = document.getElementById("weather-btn");
   const infoWeather = document.getElementById("weather-info");
   const cityDisplay = document.getElementById("city-name");
   const temparatureDisplay = document.getElementById("temperature");
   const descriptionDisplay = document.getElementById("description");
   const error = document.getElementById("error-msge");


   const API_KEY = "265d56c0ab94764196e54b2accd0d6d3";

   getWeather.addEventListener("click",async ()=> {
       
      const city = input.value.trim();
      if (!city) return;
      try {
         const data = await fetchWeather(city);
         displayWeather(data)
         
      } catch (error) {
         errorMsge()
      }
      
   })

   async function fetchWeather(city) {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      const response = await fetch(url)
      if(!response.ok) throw new error("City Not Found")

      const data  = await response.json()
      return data;
   }

   function displayWeather(data) {
      console.log(data)

      const {name,main,weather} = data

      if(name === "Mirpur" || name === "mirpur")
      {
         cityDisplay.textContent = `The city ${name} where my 💖 lives 😘😘😘 `;
      }
      if(name === "Rangpur" || name === "rangpur")
      {
         cityDisplay.textContent = `The city ${name} where my love's hubby 💖, I am from 😘😘😘`;
      }
      if(name === "Kashmir" || name === "kashmir")
      {
         cityDisplay.textContent = `The ciy where I will take my love one day inshaallah 💖💖`;
      }
      
      temparatureDisplay.textContent = `Temperature : ${main.temp}`
      descriptionDisplay.textContent = `Description : ${weather[0].description}`

      infoWeather.classList.remove("hidden");
      error.classList.add("hidden");
   }

   function errorMsge() {
      infoWeather.classList.add("hidden")
      error.classList.remove("hidden")
   }
})