const result = document.getElementById('result');

const apiKey = 'a427f9078549a5caaeeba49bdc6f48ef';

async function fetchWeather(city){
    try{
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(baseURL);
        if (!response.ok){
            throw new Error('City not found');
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        result.textContent = error.message;
    }

}

async function getWeather(){
    try{
        const city = document.getElementById('city').value;
        if (!city){
            return alert('City field cannot be empty');
        }
        const data = await fetchWeather(city);

        result.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} K</p>
            <p>Weather: ${data.weather[0].description}</p>
        `
    }
    catch(error){
        result.innerHTML = `<h2>City Not Found</h2>`;
    }
}