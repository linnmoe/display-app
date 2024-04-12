import React from "react";
import { Container, Grid } from "@mui/material";
import ViewDeparture from "./ViewDeparture";
import CircularProgress from '@mui/material/CircularProgress';
import { useGetDeparturesQuery } from "./departuresSlice";


const DepartureOverview: React.FC = () => {
  const {
    data: departures,
    isLoading,
    isSuccess,
    isError
  } = useGetDeparturesQuery(undefined, { pollingInterval: 30000 } );

  let content: JSX.Element | null = null;

  if (isLoading) {
    content = (<div>
      <CircularProgress />
    </div>);
  } else if (isError) {
    content = <div>Error fetching data</div>;
  } else if (isSuccess && departures) {
    content = (
      <Grid container spacing={2} columns={10}>
        {departures.map((departure) => (
          <ViewDeparture departure={departure} />
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

export default DepartureOverview;