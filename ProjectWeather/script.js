const API_KEY = "59c8f7f4a30a9e0cf0127442587a1f59";
const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherResult = document.getElementById("weatherResult");
const loadingIndicator = document.getElementById("loadingIndicator");

getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (!city) {
        alert("Пожалуйста, введите название города");
        return;
    }

    weatherResult.innerHTML = "";
    loadingIndicator.classList.remove("hidden");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const { name, main, weather } = data;
            weatherResult.innerHTML = `
                <h3>${name}</h3>
                <p>Температура: ${main.temp}°C</p>
                <p>Погода: ${weather[0].description}</p>
            `;
        })
        .catch(error => {
            weatherResult.innerHTML = `<p style="color: red;">${error.message}</p>`;
        })
        .finally(() => {
            loadingIndicator.classList.add("hidden");
        });
});
