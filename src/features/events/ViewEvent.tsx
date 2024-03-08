import { EventModel } from "../../models/event.model";

interface EventProps {
    event: EventModel;
}

const ViewEvent: React.FC<EventProps> = ({ event }) => {
    return (
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
    );
}

export default ViewEvent;