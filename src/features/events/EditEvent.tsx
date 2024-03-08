import { Box, Button, TextField } from "@mui/material";
import { EventModel } from "../../models/event.model";
import { useAppDispatch } from "../../hooks";
import { useState } from "react";
import { updateEvent } from "./eventsSlice";

interface EventProps {
    event: EventModel;
    onEventSave: (event: EventModel) => void;
}

const EditEvent: React.FC<EventProps> = ({ event, onEventSave }) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState(event.title);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(updateEvent(
            event.id,
            title,
            event.date,
            event.icon
        ));

        setTitle("");

        onEventSave(event);
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