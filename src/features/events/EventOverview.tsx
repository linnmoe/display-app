import { Button, Container, Grid } from "@mui/material";
import { useAppSelector } from "../../hooks";
import { EventModel } from "../../models/event.model";
import ViewEvent from "./ViewEvent";
import EditEvent from "./EditEvent";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import AddEvent from "./AddEvent";

const EventOverview: React.FC = () => {
    const [addingNewEvent, setAddingNewEvent] = useState<boolean>(false);
    const [editableEvents, setEditableEvents] = useState(new Map<string, boolean>());

    const events: EventModel[] = useAppSelector(state => state.events);

    useEffect(() => {
        const initialEditableEvents = new Map<string, boolean>();

        events.forEach(event => {
            initialEditableEvents.set(event.id, false);
        });

        setEditableEvents(initialEditableEvents);
    }, [events]);

    const handleEventSave = (event: EventModel) => {
        const newEditableEvents = new Map(editableEvents);
        newEditableEvents.set(event.id, false);

        setEditableEvents(newEditableEvents);
    }

    const handleEditButtonClick = (event: EventModel) => {
        const newEditableEvents = new Map(editableEvents);
        newEditableEvents.set(event.id, true);

        setEditableEvents(newEditableEvents);
    }

    return (
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

export default EventOverview;
