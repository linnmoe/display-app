import { useState } from "react";
import { EventModel } from "../models/event.model";
import { Container, Grid } from "@mui/material";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import CelebrationIcon from '@mui/icons-material/Celebration';
import GroupsIcon from '@mui/icons-material/Groups';

const Event: React.FC = () => {
    
    const [events, setEvents] = useState<EventModel[]>([
        {
            title: "Digitalt bolagsmöte",
            date: new Date(2023, 3, 27, 12, 0),
            icon: <GroupsIcon />
        },
        {
            title: "Rekryterings-AW",
            date: new Date(2023, 3, 27, 17, 0),
            icon: <WorkIcon />
        },
        {
            title: "Kurs i NoSQL",
            date: new Date(2023, 4, 3, 9, 0),
            icon: <SchoolIcon />
        },
        {
            title: "Code and Connect",
            date: new Date(2023, 4, 10, 17, 30),
            icon: <CodeIcon />
        },
        {
            title: "Sommarfest",
            date: new Date(2023, 5, 2, 18, 0),
            icon: <CelebrationIcon />
        },
        {
            title: "Konferens i Makarska",
            date: new Date(2023, 8, 30),
            icon: <BeachAccessIcon />
        }
    ]);

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    {events.map((event, index) => (
                        <Grid key={index} item xs={12} md={6}>
                            <div>
                                <h2>{event.title} {event.icon}</h2>
                                <p>
                                    {
                                        event.date.getHours() > 0 
                                            ? event.date.toLocaleString() 
                                            : event.date.toLocaleDateString()
                                    }
                                </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Event;
