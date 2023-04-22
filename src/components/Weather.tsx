import React, { useState, useEffect } from "react";
import WeatherService from "../services/WeatherService";
import { WeatherModel } from "../models/weather.model";
import { Grid, Typography } from "@mui/material";

function Weather() {
  const [weather, setWeather] = useState<WeatherModel>();

  const fetchWeather = () => {
    WeatherService.getWeather().then((data) => {
      setWeather(data);
    });
  };

  useEffect(() => {
    fetchWeather(); // call immediately
    const intervalId = setInterval(fetchWeather, 1800000); // call every 30 seconds
    return () => clearInterval(intervalId); // clean up on unmount
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        {weather ? (
          <div>
            <Typography variant="h4"><strong>{Math.round(weather.main.temp)}°</strong></Typography>
          </div>
        ) : (
          <div>
            <Typography variant="h6">No weather data available</Typography>
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={4}>
        {weather ? (
          <div>
            <Typography variant="h5">{Math.round(weather.main.feels_like)}°</Typography>
          </div>
        ) : (
          <div>
            <Typography variant="h6">No weather data available</Typography>
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={4}>
        {weather ? (
          <div>
            <Typography variant="h5">{weather.weather[0].description}</Typography>
          </div>
        ) : (
          <div>
            <Typography variant="h6">No weather data available</Typography>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
export default Weather;
