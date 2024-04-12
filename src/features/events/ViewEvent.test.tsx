import { render, screen } from "@testing-library/react"
import ViewEvent from "./ViewEvent"
import { EventResponse } from "../../models/responses/event.response"
import React from "react"

describe('ViewEvent', () => {
    const mockEvent: EventResponse = {
        id: "1",
        title: "AW",
        icon: "celebration",
        date: new Date()
    }

    it('should render the event title', () => {
        render(<ViewEvent event={mockEvent} />)
        expect(screen.getByText(mockEvent.title)).toBeInTheDocument()
    })
})