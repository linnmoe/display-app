import React from 'react'
import { Metro } from '../../models/commuting.model'
import { Grid, Avatar } from '@mui/material'

interface MetroProps {
    metro: Metro
}

const ViewMetro: React.FC<MetroProps> = ({ metro }) => {
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
                    style={{ backgroundColor: getLineColor(metro.lineNumber) }}
                >
                    {" "}
                    {metro.lineNumber}{" "}
                </Avatar>
            </Grid>
            <Grid item xs={4}>
                <p style={{ textAlign: "left", fontSize: "20px" }}>
                    {metro.destination}
                </p>
            </Grid>
            <Grid item xs={4}>
                <p style={{ fontSize: "20px" }}>
                    {metro.displayTime}
                </p>
            </Grid>
        </>
    )
}

export default ViewMetro