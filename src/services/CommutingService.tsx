import { CommutingModel, Metro } from "../models/commuting.model";

class CommutingService {
    static getCommuting() {
        return fetch('http://localhost:9017/api/departures')
        .then(response => response.json())
        .then(data => {
            const commuting : CommutingModel = {
                ResponseData : {
                    Metros : data.ResponseData.Metros.map( (metro : Metro) => {
                        return {
                            DisplayTime : metro.DisplayTime,
                            LineNumber: metro.LineNumber,
                            Destination: metro.Destination
                        }
                    })
                }
            }
            return data;
        })
        .catch(error => {
            console.error(error);
        })
    }
}

export default CommutingService

