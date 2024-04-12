import { EventResponse } from "../../models/responses/event.response";

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CodeIcon from '@mui/icons-material/Code';

interface EventProps {
    event: EventResponse;
}

const ViewEvent: React.FC<EventProps> = ({ event }) => {
    const icons: Map<string, JSX.Element> = new Map<string, JSX.Element>([
        ['work', <WorkIcon />],
        ['school', <SchoolIcon />],
        ['celebration', <CelebrationIcon />],
        ['beachaccess', <BeachAccessIcon />],
        ['code', <CodeIcon />]
   ]);

    const eventDate: Date = new Date(event.date);

    return (
        <div>
            <h2>{event.title} {icons.get(event.icon)}</h2>
            <p>
                {
                    eventDate.getHours() > 0 
                        ? eventDate.toLocaleString() 
                        : eventDate.toLocaleDateString()
                }
            </p>
        </div>
    );
}

export default ViewEvent;