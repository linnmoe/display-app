import { CommutingModel, Metro } from "../models/commuting.model";

class CommutingService {
    static getCommuting() {
        return fetch('http://localhost:9017/api/departures')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        })
    }
}

export default CommutingService

