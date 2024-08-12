// weather.js

// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=45.1921&longitude=9.1592&current=temperature_2m,is_day&timezone=Europe%2FBerlin&forecast_days=1');
        const data = await response.json();

        // Extracting temperature_2m and is_day from the response
        const temperature = data.current.temperature_2m;
        const isDay = data.current.is_day;

        // Updating the HTML content with the data
        document.getElementById('temperature').innerText = temperature;
        document.getElementById('daytime').innerText = isDay ? 'Yes' : 'No';
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call fetchData when the page loads
window.onload = fetchData;
