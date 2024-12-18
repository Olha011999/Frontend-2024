const geoDataContainer = document.querySelector('#geo-data');
const weatherDataContainer = document.querySelector('#weather-data');

const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
};

async function fetchGeoData() {
        const res = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
        const data = await res.json();

        const { latitude, longitude, city } = data;

        const geoCard = createCard("Your Geodata", [
            `Latitude: ${latitude}`,
            `Longitude: ${longitude}`,
            `City: ${city}`
        ]);
        geoDataContainer.append(geoCard);

        fetchWeatherData(latitude, longitude);
}

async function fetchWeatherData(latitude, longitude) {
    try {
        const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const weatherData = await res.json();
        const { current_weather, current_weather_units } = weatherData;

        const { temperature, wind_speed, weathercode } = current_weather;

        const weatherDescription = weatherDescriptions[weathercode] || "Unknown weather";

        const weatherCard = createCard("Current Weather", [
            `Temperature: ${temperature} ${current_weather_units.temperature}`,
            `Wind Speed: ${wind_speed} ${current_weather_units.windspeed}`,
            `Weather: ${weatherDescription}`
        ]);
        weatherDataContainer.append(weatherCard);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function createCard(title, contentArray) {
    const card = document.createElement("div");
    card.className = "card";

    const heading = document.createElement("h4");
    heading.textContent = title;

    card.append(heading);

    contentArray.forEach((content) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = content;
        card.append(paragraph);
    });

    return card;
}

fetchGeoData();
