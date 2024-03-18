import React from "react";
import "./App.css";
import { ReactSVG } from "react-svg";
import { Box } from "@mui/material";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <header>
        <Box
          display="flex"
          justifyContent="left"
          alignItems="left"
          height="10vh"
          marginTop={4}
          marginLeft={2}
        >
          <ReactSVG src="/Knowit_logo.svg" />
        </Box>
      </header>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
