import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WeatherModel } from '../../models/weather.model';
import { CommutingResponse, DepartureResponse } from '../../models/commuting.model';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9017/api'}),
    tagTypes: ['Event'],
    endpoints: builder => ({
        getDepartures: builder.query<DepartureResponse[], void>({
            query: () => '/departures',
            transformResponse: (response: CommutingResponse) => response.departures
        }),
        getWeather: builder.query<WeatherModel, void>({
            query: () => '/weather'
        })
    })
});

export const { useGetDeparturesQuery, useGetWeatherQuery } = apiSlice;