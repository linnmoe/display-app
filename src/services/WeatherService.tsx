
class WeatherService {
    static getWeather() {
        return fetch('http://localhost:9017/api/weather')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error(error);
        })
    }
}

export default WeatherService

