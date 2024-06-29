document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    const temperatureElement = document.getElementById('temperature');
    const conditionsElement = document.getElementById('conditions');
    const windElement = document.getElementById('wind');
    const windChillElement = document.getElementById('windchill');

    
    const apiKey = 'f9d2a96db775a35ad92883830755ade4'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi,KE&units=metric&appid=${apiKey}`;

    function calculateWindChill(temp, speed) {
        return (
            13.12 + 0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(2);
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const conditions = data.weather[0].description;
            const windSpeed = data.wind.speed;

            temperatureElement.textContent = `${temperature} °C`;
            conditionsElement.textContent = conditions;
            windElement.textContent = `${windSpeed} m/s`;

            if (temperature <= 10 && windSpeed > 4.8) {
                windChillElement.textContent = calculateWindChill(temperature, windSpeed);
            } else {
                windChillElement.textContent = 'N/A';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            temperatureElement.textContent = 'N/A';
            conditionsElement.textContent = 'N/A';
            windElement.textContent = 'N/A';
            windChillElement.textContent = 'N/A';
        });
});
