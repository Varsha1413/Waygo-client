"use client";
import { useEffect, useState } from "react";
import FlightSearchBar from "../Components/FlightSearchBar";
import Header from "../Components/Header";
import OptionsHeadeComponent from "./OptionsHeaderComponent";
import { CityCard } from "../Components/FlightCard";

const LandingPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  const handleCardClick = (cityName: string) => {
    console.log(`Clicked on ${cityName}`);
    // Navigate to flight details page
  };
  const cities = [
    {
      cityName: "Jalgaon",
      country: "India",
      cityImage:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=180&fit=crop",
      flights: [
        {
          date: "8 Jan",
          day: "Thu",
          route: "AMD - JLG with Alliance Air",
          type: "Direct",
        },
        {
          date: "9 Jan",
          day: "Fri",
          route: "JLG - AMD with Alliance Air",
          type: "Direct",
        },
      ],
      priceFrom: "3,215",
    },
    {
      cityName: "Mumbai",
      country: "India",
      cityImage:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&h=180&fit=crop",
      flights: [
        {
          date: "10 Jan",
          day: "Sat",
          route: "DEL - BOM with Air India",
          type: "Direct",
        },
        {
          date: "15 Jan",
          day: "Thu",
          route: "BOM - DEL with Air India",
          type: "Direct",
        },
      ],
      priceFrom: "4,850",
    },
    {
      cityName: "Bangalore",
      country: "India",
      cityImage:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=180&fit=crop",
      flights: [
        {
          date: "12 Jan",
          day: "Mon",
          route: "AMD - BLR with IndiGo",
          type: "Direct",
        },
        {
          date: "18 Jan",
          day: "Sun",
          route: "BLR - AMD with IndiGo",
          type: "1 Stop",
        },
      ],
      priceFrom: "5,499",
    },
  ];
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
          <div className="landing-page-image-context-title">
            The Best Flights Offers From Anywhere, To Everywhere
          </div>
          <div className="landing-page-image-searchbar-context">
            <FlightSearchBar />
          </div>
        </div>
      </div>
      <div className="info-context">
        <div className="info-contexts">
          Explore the best flight deals from anywhere, to everywhere, then book
          with no fees
        </div>
        <div className="info-contexts">
          Explore the best flight deals from anywhere, to everywhere, then book
          with no fees
        </div>
        <div className="info-contexts">
          Explore the best flight deals from anywhere, to everywhere, then book
          with no fees
        </div>
      </div>

      <div
        className="card-context"
       
      >
        {cities.map((city, index) => (
          <CityCard
            key={index}
            cityName={city.cityName}
            country={city.country}
            cityImage={city.cityImage}
            flights={city.flights}
            priceFrom={city.priceFrom}
            currency="₹"
            onCardClick={() => handleCardClick(city.cityName)}
          />
        ))}
      </div>
    </>
  );
};
export default LandingPage;
