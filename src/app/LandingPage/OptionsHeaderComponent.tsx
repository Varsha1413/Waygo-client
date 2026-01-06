"use client";
import { Button } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import KingBedIcon from "@mui/icons-material/KingBed";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useState } from "react";

const OptionsHeadeComponent = () => {
  const [active, setActvie] = useState("Flights");
  return (
    <div className="option-conponent-context">
      <Button
        variant="text"
        onClick={() => setActvie("Flights")}
        className={`border-btn ${active === "Flights" ? "active" : ""}`}
      >
        <FlightIcon className=""></FlightIcon>
        <span className="d-none">Flights</span>
      </Button>
      <Button
        variant="text"
        onClick={() => setActvie("Hotels")}
        className={`border-btn ${active === "Hotels" ? "active" : ""}`}
      >
        <KingBedIcon className=""></KingBedIcon>
        <span className="d-none">Hotels</span>
      </Button>
      <Button
        variant="text"
        onClick={() => setActvie("Cars")}
        className={`border-btn ${active === "Cars" ? "active" : ""}`}
      >
        <DirectionsCarIcon className=""></DirectionsCarIcon>
        <span className="d-none">Cars</span>
      </Button>
    </div>
  );
};

export default OptionsHeadeComponent;
