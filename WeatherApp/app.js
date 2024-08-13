const apiKey = "91f7983f13e689752809ca9bc4ec9560"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCard = document.querySelector(".weather");
const errorMessage = document.querySelector(".error-message");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    updateWeatherUI(data);
    errorMessage.textContent = ""; // Clear any previous error message
  } catch (error) {
    console.error("Error fetching weather:", error);
    errorMessage.textContent = "An error occurred. Please try again later.";
  } finally {
    // Always hide the error message after a successful or failed attempt
    errorMessage.style.display = "none";
  }
}

function updateWeatherUI(data) {
  weatherCard.style.display = "block"; 

  const cityName = data.cityName;
  const temperature = Math.round(data.main.temp);
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  document.querySelector(".city").textContent = cityName;
  document.querySelector(".temp").textContent = `${temperature}°C`;
  document.querySelector(".humidity").textContent = `${humidity}%`;
  document.querySelector(".wind").textContent = `${windSpeed} km/h`;


  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "./images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "./images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "./images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "./images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "./images/mist.png";
      break;
    default:
      weatherIcon.src = "./images/clear.png"; // Set a default icon or handle other conditions
  }
  document.querySelector(".weather").style.display= "block"
}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim(); // Trim leading and trailing whitespace

  if (city) {
    checkWeather(city);
    searchBox.value = ""; // Clear the search box after submission
  } else {
    // Handle empty search input (optional: display a message or prevent submission)
    console.warn("Please enter a city name.");
  }
});
