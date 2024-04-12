import { Box, Button, TextField } from "@mui/material";
import { EventResponse } from "../../models/responses/event.response";
import { useUpdateEventMutation } from "./eventsSlice";
import { SubmitHandler, useForm } from "react-hook-form";

interface EventProps {
    event: EventResponse;
    onClose: (event: EventResponse) => void;
}

interface FormData {
    title: string;
}

const EditEvent: React.FC<EventProps> = ({ event, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            title: event.title
        }
    });

    const [updateEvent, { isLoading}] = useUpdateEventMutation();


    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            await updateEvent({id: event.id, title: data.title, date: event.date, icon: event.icon}).unwrap();
            onClose(event);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit(onSubmit)}
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                label="Titel"
                {...register("title", { required: 'Titel är obligatorisk', minLength: { value: 3, message: 'Titel måste vara minst 3 tecken långt' } })}
                error={!!errors.title}
                helperText={errors.title?.message}
            />
            <Button variant="outlined" onClick={() => onClose(event)}>Avbryt</Button>
            <Button type="submit" variant="contained">Spara</Button>      
        </Box>
    )
}

export default EditEvent;