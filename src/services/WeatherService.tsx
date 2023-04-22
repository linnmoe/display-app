import { CommutingModel, Metro } from "../models/commuting.model";
import { WeatherModel } from "../models/weather.model";

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

