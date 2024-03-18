import React from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { useGetWeatherQuery } from "./weatherSlice";

function Weather() {
  const {
    data: weather,
    isLoading,
    isSuccess,
    isError
  } = useGetWeatherQuery(undefined, { pollingInterval: 1_800_000 });

  let content: JSX.Element | null = null;

  if (isLoading) {
    content = (<div>
      <CircularProgress />
    </div>);
  } else if (isError) {
    content = <div>Error fetching data</div>;
  } else if (isSuccess && weather) {
    content = (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="h4"><strong>{Math.round(weather.main.temp)}°</strong></Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="h5">{Math.round(weather.main.feels_like)}°</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Typography variant="h5">{weather.weather[0].description}</Typography>
          </div>
        </Grid>
      </Grid>
    );
  }

  return <>
    {content}
  </>;
}
export default Weather;
