import { EventResponse } from "../../models/responses/event.response";
import { apiSlice } from "../api/apiSlice";
import { EventRequest } from "../../models/requests/event.request";

export const eventsExtendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query<EventResponse[], void>({
            query: () => "/events",
            providesTags: ["Event"]
        }),
        addEvent: builder.mutation<void, EventRequest>({
            query: (event) => ({
                url: "/events",
                method: "POST",
                body: event
            }),
            invalidatesTags: ["Event"]
        }),
        updateEvent: builder.mutation<void, EventRequest>({
            query: (event) => ({
                url: `/events/${event.id}`,
                method: "PUT",
                body: event
            }),
            invalidatesTags: ["Event"]
        })
    })
})

export const { useGetEventsQuery, useAddEventMutation, useUpdateEventMutation } = eventsExtendedApiSlice;