import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Weather from "../features/weather/Weather";
import Clock from "./Clock";
import EventOverview from "../features/events/EventOverview";
import DepartureOverview from "../features/departures/DepartureOverview";
import Birthday from "./Birthday";
import background from "../confetti.jpg";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

export const Dashboard: React.FC = () => {
    return (
        <Grid container spacing={2} columns={12}>
            <Grid item xs={6} md={8}>
                <Item>
                    <h1>Väder</h1>
                    <Weather />
                </Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item style={{ backgroundColor: 'rgb(220,237,222)' }}>
                    <h1>Tid</h1>
                    <Clock />
                </Item>
            </Grid>
            <Grid item xs={6} md={8}>
                <Item>
                    <EventOverview />
                </Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>
                    <DepartureOverview />
                </Item>
            </Grid>

            <Grid item xs={6} md={8}>
                <Item style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
                    <h1>Kommande födelsedag</h1>
                    <Birthday />
                </Item>
            </Grid>
        </Grid>
    )
}