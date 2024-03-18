import React from 'react'
import { Grid, Avatar } from '@mui/material'
import { DepartureResponse } from '../../models/commuting.model';

interface DepartureProps {
    departure: DepartureResponse
}

const ViewDeparture: React.FC<DepartureProps> = ({ departure }) => {
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

    return (
        <>
            <Grid item xs={2}>
                <Avatar
                    variant="circular"
                    style={{ backgroundColor: getLineColor(departure.line.designation) }}
                >
                    {" "}
                    {departure.line.designation}{" "}
                </Avatar>
            </Grid>
            <Grid item xs={4}>
                <p style={{ textAlign: "left", fontSize: "20px" }}>
                    {departure.destination}
                </p>
            </Grid>
            <Grid item xs={4}>
                <p style={{ fontSize: "20px" }}>
                    {departure.display}
                </p>
            </Grid>
        </>
    )
}

export default ViewDeparture