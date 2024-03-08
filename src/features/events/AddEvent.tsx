import { Autocomplete, Button, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import { useAppDispatch } from "../../hooks"
import React, { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { addEvent } from "./eventsSlice";
import 'dayjs/locale/sv';
import GroupsIcon from '@mui/icons-material/Groups';

const AddEvent: React.FC<any> = ({ onEventSave }) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<Date | null>();
    const [icon, setIcon] = useState<JSX.Element | null>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(addEvent(title, date, icon))
        
        setTitle("");
        setDate(null);
        setIcon(null);

        onEventSave();
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

    const iconOptions: JSX.Element[] = [
        
    ]

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                required
                id="outlined-required"
                label="Titel"
                value={title}
                onChange={handleTitleChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
                <DateTimePicker 
                    label="Datum"
                    value={date}
                    onChange={newValue => setDate(newValue)}
                />
            </LocalizationProvider>
            <Autocomplete
                options={iconOptions}
                value={icon}
                onChange={(e, value) => setIcon(value)}
                renderInput={ (params) => <TextField {...params} label="Ikon" /> }
                renderOption={ (props, option) => (
                    <li {...props}>
                        {option}
                    </li>
                )}  
            />

            <Button type="submit" variant="contained">Spara</Button>
        </Box>
    )
}

export default AddEvent