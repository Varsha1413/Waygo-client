"use client";
import { useState } from "react";
import CommonInput from "./CommonInput";
import DateInput from "./DateInput";

const FlightSearchBar = () => {
  const [departDate, setDepartDate] = useState("2026-01-11");
  const [returnDate, setReturnDate] = useState("2026-01-18");
  const [form, setFrom] = useState("2026-01-18");
  const [to, setTo] = useState("2026-01-18");

  return (
    <>
      <div className="search-bar">
        <div className="search-inputs">
          <CommonInput
            label="From"
            placeholder="Select city"
            options={[
              { label: "Ahmedabad", value: "AMD" },
              { label: "Delhi", value: "DEL" },
              { label: "Mumbai", value: "BOM" },
            ]}
            onChange={(val) => console.log(val)}
          />
          <CommonInput
            label="From"
            placeholder="Select city"
            options={[
              { label: "Ahmedabad", value: "AMD" },
              { label: "Delhi", value: "DEL" },
              { label: "Mumbai", value: "BOM" },
            ]}
            onChange={(val) => console.log(val)}
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
          <CommonInput
            label="From"
            placeholder="Select city"
            options={[
              { label: "Ahmedabad", value: "AMD" },
              { label: "Delhi", value: "DEL" },
              { label: "Mumbai", value: "BOM" },
            ]}
            onChange={(val) => console.log(val)}
          />
        </div>
        <button className="search-btn">Search</button>
      </div>
    </>
  );
};

export default FlightSearchBar;
