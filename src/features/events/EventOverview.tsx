import { Button, Container, Grid } from "@mui/material";
import { EventResponse } from "../../models/responses/event.response";
import ViewEvent from "./ViewEvent";
import EditEvent from "./EditEvent";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import AddEvent from "./AddEvent";
import { useGetEventsQuery } from "./eventsSlice";

const EventOverview: React.FC = () => {
    const [addingNewEvent, setAddingNewEvent] = useState<boolean>(false);
    const [editableEvents, setEditableEvents] = useState(new Map<string, boolean>());

    const initEditableEvents = (events: EventResponse[]): void => {
        const initialEditableEvents = new Map<string, boolean>();

        events.forEach(event => {
            initialEditableEvents.set(event.id, false);
        });

        setEditableEvents(initialEditableEvents);
    }


    const handleEventSave = (event: EventResponse) => {
        const newEditableEvents = new Map(editableEvents);
        newEditableEvents.set(event.id, false);

        setEditableEvents(newEditableEvents);
    }

    const handleEditButtonClick = (event: EventResponse) => {
        const newEditableEvents = new Map(editableEvents);
        newEditableEvents.set(event.id, true);

        setEditableEvents(newEditableEvents);
    }

    const {
        data: events,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetEventsQuery();

    let content: JSX.Element | null = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (isError) {
        content = <div>Error fetching data</div>;
    } else if (isSuccess && events) {
        //initEditableEvents(events);

        content = (
            <div>
                <h1>Event</h1>
                <Container>
                    <Grid container spacing={2}>
                        {events.map((event, index) => (
                            <Grid key={index} item xs={12} md={6}>
                                {editableEvents.get(event.id) 
                                    ? (
                                        <EditEvent event={event} onEventSave={handleEventSave}/>
                                    ) 
                                    : (
                                        <>
                                            <ViewEvent event={event}/>
                                            <Button 
                                                variant="contained" 
                                                startIcon={ <EditIcon /> }
                                                onClick={() => handleEditButtonClick(event)}>
                                                Edit
                                            </Button>
                                        </>
                                    )
                                }
                                
                            </Grid>
                        ))}
                    </Grid>
                    {addingNewEvent 
                        ? <AddEvent onEventSave={() => setAddingNewEvent(false)} />
                        : (<Button variant="contained" startIcon={ <AddIcon /> } onClick={() => setAddingNewEvent(true)}>Lägg till event</Button>) 
                    }
                </Container>
            </div>
        );
    }

    return <>{content}</>
}

export default EventOverview;
