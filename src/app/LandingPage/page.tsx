'use client';
import { useEffect, useState } from 'react';
import FlightSearchBar from './Conponents/FlightSearchBar';
import Header from '../Components/Header';
import OptionsHeadeComponent from './OptionsHeaderComponent';
import { CityCard } from '../Components/FlightCard';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LabelIcon from '@mui/icons-material/Label';
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FlightDealsComponent from './Conponents/FlightDealsComponent';
import SkyscannerFooter from '../Components/Footer';
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
      cityName: 'Jalgaon',
      country: 'India',
      cityImage:
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=180&fit=crop',
      flights: [
        {
          date: '8 Jan',
          day: 'Thu',
          route: 'AMD - JLG with Alliance Air',
          type: 'Direct',
        },
        {
          date: '9 Jan',
          day: 'Fri',
          route: 'JLG - AMD with Alliance Air',
          type: 'Direct',
        },
      ],
      priceFrom: '3,215',
    },
    {
      cityName: 'Mumbai',
      country: 'India',
      cityImage:
        'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&h=180&fit=crop',
      flights: [
        {
          date: '10 Jan',
          day: 'Sat',
          route: 'DEL - BOM with Air India',
          type: 'Direct',
        },
        {
          date: '15 Jan',
          day: 'Thu',
          route: 'BOM - DEL with Air India',
          type: 'Direct',
        },
      ],
      priceFrom: '4,850',
    },
    {
      cityName: 'Bangalore',
      country: 'India',
      cityImage:
        'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=180&fit=crop',
      flights: [
        {
          date: '12 Jan',
          day: 'Mon',
          route: 'AMD - BLR with IndiGo',
          type: 'Direct',
        },
        {
          date: '18 Jan',
          day: 'Sun',
          route: 'BLR - AMD with IndiGo',
          type: '1 Stop',
        },
      ],
      priceFrom: '5,499',
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
            show ? 'show' : ''
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
      <div className="all-context info-context">
        <div className="info-cards">
          <ConnectingAirportsIcon className="info-cards-icons"></ConnectingAirportsIcon>
          Explore the best flight deals from anywhere, to everywhere, then book
          with no fees
        </div>
        <div className="info-cards">
          <CalendarMonthIcon className="info-cards-icons"></CalendarMonthIcon>
          Compare flight deals from over 1000 providers, and choose the
          cheapest, fastest or lowest-emission tickets
        </div>
        <div className="info-cards">
          <LabelIcon className="info-cards-icons"></LabelIcon>
          Find the cheapest month - or even day - to fly, and set up Price
          Alerts to book when the price is right
        </div>
      </div>
      <div className="all-context" style={{ paddingInline: '10px' }}>
        <div style={{ fontSize: '40px', marginBottom: '5px' }}>
          Flight Deals From India
        </div>
        <div style={{ fontSize: '20px', marginBottom: '15px' }}>
          Here are the flight deals with the lowest prices. Act fast – they all
          depart within the next three months.
        </div>
      </div>
      <div className="all-context flight-cards">
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
      <div className="all-context see-more-details-context">
        <Button variant="text" className="button-see-more-details">
          See more deals <ArrowRightAltIcon></ArrowRightAltIcon>
        </Button>
      </div>
      <div className="all-context">
        <FlightDealsComponent></FlightDealsComponent>
      </div>
      <div>
        <SkyscannerFooter></SkyscannerFooter>
      </div>
    </>
  );
};
export default LandingPage;
