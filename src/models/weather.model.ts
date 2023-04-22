export interface WeatherModel {
    weather: Weather[];
    main: Main;
}

interface Weather {
    id: string;
    main: string;
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    feels_like: number;
}