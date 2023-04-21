class CommutingService {
    static setCommuting() {
        return fetch('https://api.sl.se/api2/realtimedeparturesV4.json?key=76239c02cf7d4b2a86c31d3434bb16e1&siteid=9119&timewindow=15')
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

