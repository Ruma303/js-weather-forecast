import HourClass from './HourClass.js';

// Richiesta AJAX al database.json
window.addEventListener('DOMContentLoaded', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../database/database.json', true);
    xhr.send();
    xhr.onload = function() {
        if(xhr.status === 200) {
            const weatherForecastJSON = xhr.responseText;
            const weatherForecast = JSON.parse(weatherForecastJSON);
            const weatherArray = weatherForecast.forecast;
            console.log(weatherArray);
            showHours(weatherArray);
        }
    }
});

function showHours(weatherArray) {
    const weatherCards = document.getElementById('weather-cards');

    if (weatherArray.length > 0) {
        weatherArray.forEach(hourData => {

            const hour = new HourClass(hourData.hour, hourData.type, hourData.humidity, hourData.temperature);

            const weatherInfo = hour.getWeatherInfo;

            const card = document.createElement('li');
            card.classList.add('col-3', 'weather-card');

            let iconHTML = '';

            switch (weatherInfo.type) {
                case 'soleggiato':
                    iconHTML = `<i class="bi bi-brightness-high icon"></i>`;
                    break;
                case 'nuvoloso':
                    iconHTML = `<i class="bi bi-cloud-sun icon"></i>`;
                    break;
                case 'piovoso':
                    iconHTML = `<i class="bi bi-cloud-drizzle icon"></i>`;
                    break;
                case 'temporali':
                    iconHTML = `<i class="bi bi-cloud-lightning-rain icon"></i>`;
                    break;
            }

            card.innerHTML = `
                <div class="weather-icon">
                    ${iconHTML}
                </div>
                <div class="weather-details">
                    <div class="weather-type">Meteo previsto: ${weatherInfo.type}</div>
                    <div class="weather-hour">Orario previsto: ${weatherInfo.hour}</div>
                    <div class="weather-temperature">Temperatura: ${weatherInfo.temperature}°C</div>
                    <div class="weather-humidity">Tasso di umidità: ${weatherInfo.humidity}%</div>
                </div>
            `;

            weatherCards.appendChild(card);
        });
    }
}

//<i class="bi bi-brightness-high-fill"></i> //icona soleggiato
//<i class="bi bi-cloud-sun"></i> // icona nuvoloso
//<i class="bi bi-cloud-drizzle"></i> //icona piovoso
//<i class="bi bi-cloud-lightning-rain"></i> //icona temporali