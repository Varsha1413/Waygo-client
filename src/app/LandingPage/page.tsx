"use client";
import { useEffect, useState } from "react";
import FlightSearchBar from "../Components/FlightSearchBar";
import Header from "../Components/Header";
import OptionsHeadeComponent from "./OptionsHeaderComponent";

const LandingPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // runs once on refresh / page load
    setShow(true);
  }, []);
  return (
    <>
      <div className="full-container">
        <div className="content-container">
          <Header></Header>
          <OptionsHeadeComponent></OptionsHeadeComponent>
        </div>
      </div>
      <div className="landing-page-image-context">
        <div
          className={`landing-page-image-context-inner-content ${
            show ? "show" : ""
          }`}
        >
          <div className="content-container  landing-page-image-context-title">
            The Best Flights Offers From Anywhere, To Everywhere
          </div>
          <div className="content-container landing-page-image-searchbar-context">
            <FlightSearchBar />
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
