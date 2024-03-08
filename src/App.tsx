import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import EventOverview from "./features/events/EventOverview";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MetroOverview from "./features/metros/MetroOverview";
import { ReactSVG } from "react-svg";
import { Box } from "@mui/material";
import Birthday from "./components/Birthday";
import background from "./confetti.jpg";
import Weather from "./components/Weather";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <header>
        <Box
          display="flex"
          justifyContent="left"
          alignItems="left"
          height="10vh"
          marginTop={4}
          marginLeft={2}
        >
          <ReactSVG src="/Knowit_logo.svg" />
        </Box>
      </header>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6} md={8}>
          <Item>
            <h1>Väder</h1>
            <Weather/>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item style={{backgroundColor:'rgb(220,237,222)'}}>
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
            <MetroOverview />
          </Item>
        </Grid>

        <Grid item xs={6} md={8}>
          <Item style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <h1>Kommande födelsedag</h1>
            <Birthday/>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
