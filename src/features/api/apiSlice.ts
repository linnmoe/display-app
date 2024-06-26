import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9017/api'}),
    tagTypes: ['Event'],
    endpoints: () => ({})
});