import { Box, Button, TextField } from "@mui/material";
import { EventResponse } from "../../models/responses/event.response";
import { useAppDispatch } from "../../hooks";
import { useState } from "react";
import { useUpdateEventMutation } from "./eventsSlice";

interface EventProps {
    event: EventResponse;
    onEventSave: (event: EventResponse) => void;
}

const EditEvent: React.FC<EventProps> = ({ event, onEventSave }) => {
    const [updateEvent, { isLoading}] = useUpdateEventMutation();

    const [title, setTitle] = useState(event.title);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await updateEvent({id: event.id, title, date: event.date, icon: event.icon}).unwrap();
            setTitle("");
            onEventSave(event);
        } catch (err) {
            console.error(err);
        }
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="outlined-required"
                label="Titel"
                value={title}
                onChange={handleTitleChange}
            />
            <Button type="submit" variant="contained">Spara</Button>      
        </Box>
    )
}

export default EditEvent;