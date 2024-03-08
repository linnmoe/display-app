import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchMetros } from "./metrosSlice";
import ViewMetro from "./ViewMetro";
import CircularProgress from '@mui/material/CircularProgress';

const MetroOverview: React.FC = () => {
  const dispatch = useAppDispatch();

  const fetchStatus = useAppSelector((state) => state.metros.status);
  const metros = useAppSelector((state) => state.metros.items);


  useEffect(() => {
    dispatch(fetchMetros()); // call immediately
    const intervalId = setInterval(() => dispatch(fetchMetros()), 30000); // call every 30 seconds
    return () => clearInterval(intervalId); // clean up on unmount
  }, [dispatch]);

  let content: JSX.Element | null = null;

  if (fetchStatus === "loading") {
    content = (<div>
      <CircularProgress />
    </div>);
  } else if (fetchStatus === "failed") {
    content = <div>Error fetching data</div>;
  } else if (fetchStatus === "succeeded" && metros) {
    content = (
      <Grid container spacing={2} columns={10}>
        {metros.map((metro) => (
          <ViewMetro metro={metro} />
        ))}
      </Grid>
    );
  }

  return (
    <div>
      <h1>Avgångar från T-Centralen</h1>
      <Container>
        {content}
      </Container>
    </div>
  );
}

export default MetroOverview;