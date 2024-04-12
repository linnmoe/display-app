import { WeatherModel } from "../../models/weather.model";
import { apiSlice } from "../api/apiSlice";

export const weatherExtendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherModel, void>({
            query: () => '/weather'
        })
    })
});

export const { useGetWeatherQuery } = weatherExtendedApiSlice;