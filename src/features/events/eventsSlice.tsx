import { EventModel } from "../../models/event.model";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import CelebrationIcon from '@mui/icons-material/Celebration';
import GroupsIcon from '@mui/icons-material/Groups';
import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState: EventModel[] = [
    { 
        id: "1",
        title: "Digitalt bolagsmöte",
        date: new Date(2023, 3, 27, 12, 0),
        icon: <GroupsIcon />
    },
    {
        id: "2",
        title: "Rekryterings-AW",
        date: new Date(2023, 3, 27, 17, 0),
        icon: <WorkIcon />
    },
    {
        id: "3",
        title: "Kurs i NoSQL",
        date: new Date(2023, 4, 3, 9, 0),
        icon: <SchoolIcon />
    },
    {
        id: "4",
        title: "Code and Connect",
        date: new Date(2023, 4, 10, 17, 30),
        icon: <CodeIcon />
    },
    {
        id: "5",
        title: "Sommarfest",
        date: new Date(2023, 5, 2, 18, 0),
        icon: <CelebrationIcon />
    },
    {
        id: "6",
        title: "Konferens i Makarska",
        date: new Date(2023, 8, 30),
        icon: <BeachAccessIcon />
    }
];

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        addEvent: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title: string, date: Date | null | undefined, icon: JSX.Element | null | undefined) => {
                return {
                    meta: null,
                    error: null,
                    payload: {
                        id: nanoid(),
                        title,
                        date,
                        icon
                    }
                }
            }
        },
        updateEvent: {
            reducer: (state, action) => {
                const { id, title, date, icon } = action.payload;
                const event = state.find((event) => event.id === id);
                if (event) {
                    event.title = title;
                    event.date = date;
                    event.icon = icon;
                }
            },
            prepare: (id: string, title: string, date: Date, icon: any) => {
                return {
                    meta: null,
                    error: null,
                    payload: {
                        id,
                        title,
                        date,
                        icon
                    }
                }
            }
        }
    }
});

export const { addEvent, updateEvent } = eventsSlice.actions;

export default eventsSlice.reducer;