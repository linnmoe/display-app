import React from 'react';
import './App.css';
import Clock from './Clock';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Item>
            logga
            <svg width="100" height="100">
              
            </svg></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>

            <ul>
              <li>
                AW-kväll
              </li>
              <li>
                Docker-kurs
              </li>
            </ul>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>

        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
      <Clock />
    </div>
  );
}

export default App;
