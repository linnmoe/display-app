import { DepartureResponse, CommutingResponse } from "../../models/commuting.model";
import { apiSlice } from "../api/apiSlice";

export const departuresExtendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDepartures: builder.query<DepartureResponse[], void>({
            query: () => '/departures',
            transformResponse: (response: CommutingResponse) => response.departures
        })
    })
})

export const { useGetDeparturesQuery } = departuresExtendedApiSlice;