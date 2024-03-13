import { Autocomplete, Button, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import React, { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useAddEventMutation } from "./eventsSlice";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { sv } from 'date-fns/locale/sv';

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CodeIcon from '@mui/icons-material/Code';



const AddEvent: React.FC<any> = ({ onEventSave }) => {
    const [addNewEvent, { isLoading }] = useAddEventMutation();

    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date());
    const [icon, setIcon] = useState<string>('work');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            await addNewEvent({ title, date, icon }).unwrap();

            setTitle("");
            setDate(new Date());
            setIcon('work');

            onEventSave();
        } catch (err) {
            console.error(err);
        }
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

    const iconOptions: Map<string, JSX.Element> = new Map<string, JSX.Element>([
         ['work', <WorkIcon />],
         ['school', <SchoolIcon />],
         ['celebration', <CelebrationIcon />],
         ['beachaccess', <BeachAccessIcon />],
         ['code', <CodeIcon />]
    ]);

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
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={sv}>
                <DateTimePicker 
                    label="Datum"
                    value={date}
                    onChange={newValue => newValue && setDate(newValue)}
                />
            </LocalizationProvider>
            <Autocomplete
                options={Array.from(iconOptions.keys())}
                value={icon}
                onChange={(e, value) => value && setIcon(value)}
                renderInput={ (params) => <TextField {...params} label="Ikon" /> }
                renderOption={ (props, option) => (
                    <li {...props}>
                        {iconOptions.get(option)}
                    </li>
                )}  
            />

            <Button variant="outlined">Avbryt</Button>
            <Button type="submit" variant="contained">Spara</Button>
        </Box>
    )
}

export default AddEvent