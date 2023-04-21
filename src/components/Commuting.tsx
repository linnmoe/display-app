import React, { useState, useEffect } from "react";
import CommutingService from "../services/CommutingService";

interface Commuting {
    ResponseData: ResponseData;
}

interface ResponseData {
    Metros: Metro[]
}

interface Metro {
    DisplayTime: string;
    LineNumber: string;
    Destination: string;
}

function Commuting() {

  const [commuting, setCommuting] = useState([]);
  useEffect(() => {
    CommutingService.setCommuting().then((data) => {
        setCommuting(data);
        console.log()
    });
  }, []);

  return (
    <ul>
      {" "}
      {/* {departues?.map((departure) => (
        <li>{departure}</li>
      ))}{" "} */}
    </ul>
  );
}
export default Commuting;
