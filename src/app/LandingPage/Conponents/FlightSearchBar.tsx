'use client';
import { useState } from 'react';
import CommonInput from './Common/CommonInput';
import DateInput from './Common/DateInput';
import FlightPassengerSelector from './Common/FlightPassengerSelector';

const FlightSearchBar = () => {
  const [departDate, setDepartDate] = useState('2026-01-11');
  const [returnDate, setReturnDate] = useState('2026-01-18');
  const [passengers, setPassengers] = useState<any>(null);
  const [from, setFrom] = useState<any>(null);
  const [to, setTo] = useState<any>(null);
  const handleSearch = () => {
    const searchPayload = {
      from,
      to,
      departDate,
      returnDate,
      passengers,
    };

    console.log('FINAL SEARCH PAYLOAD:', searchPayload);
  };

  return (
    <>
      <div className="search-bar">
        <div className="search-inputs">
          <CommonInput
            label="From"
            placeholder="Select city"
            options={[
              { label: 'Ahmedabad', value: 'AMD' },
              { label: 'Delhi', value: 'DEL' },
              { label: 'Mumbai', value: 'BOM' },
            ]}
            onChange={(val) => setFrom(val)}
          />
          <CommonInput
            label="To"
            placeholder="Select city"
            options={[
              { label: 'Ahmedabad', value: 'AMD' },
              { label: 'Delhi', value: 'DEL' },
              { label: 'Mumbai', value: 'BOM' },
            ]}
            onChange={(val) => setTo(val)}
          />
          <DateInput
            label="Depart"
            value={departDate}
            onChange={setDepartDate}
          />
          <DateInput
            label="Return"
            value={returnDate}
            onChange={setReturnDate}
          />
          <FlightPassengerSelector
            onApply={(data) => setPassengers(data)}
          />{' '}
        </div>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};

export default FlightSearchBar;
