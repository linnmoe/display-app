import React, { useState, useEffect } from "react";
import CommutingService from "../services/CommutingService";
import { CommutingModel } from "../models/commuting.model";
import { Avatar, Container, Grid } from "@mui/material";

function Commuting() {
  const getLineColor = (lineNumber: string) => {
    switch (lineNumber) {
      case "10":
      case "11":
        return "rgb(2,125,184)";
      case "13":
      case "14":
        return "rgb(214,29,36)";
      case "17":
      case "18":
      case "19":
        return "rgb(21,133,64)";
      default:
        return "";
    }
  };

  const [commuting, setCommuting] = useState<CommutingModel>();

  const fetchCommuting = () => {
    CommutingService.getCommuting().then((data) => {
      setCommuting(data);
    });
  };

  useEffect(() => {
    fetchCommuting(); // call immediately
    const intervalId = setInterval(fetchCommuting, 30000); // call every 30 seconds
    return () => clearInterval(intervalId); // clean up on unmount
  }, []);

  return (
    <div>
      <Container>
        {commuting && (
          <Grid container spacing={2} columns={10}>
            {commuting.ResponseData.Metros.map((metro) => (
              <>
                <Grid item xs={2}>
                  <Avatar
                    variant="circular"
                    style={{ backgroundColor: getLineColor(metro.LineNumber) }}
                  >
                    {" "}
                    {metro.LineNumber}{" "}
                  </Avatar>
                </Grid>
                <Grid item xs={4}>
                  <p style={{textAlign : "left", fontSize: "20px"}}>
                    {metro.Destination}
                  </p>
                </Grid>
                <Grid item xs={4}>
                <p style={{fontSize: "20px"}}>
                   {metro.DisplayTime}
                  </p>
                </Grid>
              </>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}
export default Commuting;
