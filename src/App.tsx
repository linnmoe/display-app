import React from 'react';
import './App.css';
import Clock from './Clock';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">

      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          Event
          <ul>
            <li>
              AW-kväll
            </li>
            <li>
              Docker-kurs
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} md={4}>
          Klocka
          <Clock />
        </Grid>
        <Grid item xs={6} md={4}>
          Tidtabeller
        </Grid>
        <Grid item xs={6} md={8}>

        </Grid>
      </Grid>

    </div>
  );
}

export default App;
