import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FlightPassengerSelector() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [childAges, setChildAges] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAdultsChange = (increment: number) => {
    const newValue = adults + increment;
    if (newValue >= 1 && newValue <= 9) {
      setAdults(newValue);
    }
  };

  const handleChildrenChange = (increment: number) => {
    const newValue = children + increment;
    if (newValue >= 0 && newValue <= 9) {
      setChildren(newValue);
      if (newValue > children) {
        setChildAges([...childAges, '']);
      } else if (newValue < children) {
        setChildAges(childAges.slice(0, -1));
      }
    }
  };

  const handleChildAgeChange = (index: number, age: string) => {
    const newAges = [...childAges];
    newAges[index] = age;
    setChildAges(newAges);
  };

  const handleApply = () => {
    setIsOpen(false);
  };

  const totalTravellers = adults + children;
  const displayText = `${totalTravellers} Traveller${
    totalTravellers > 1 ? 's' : ''
  }, Economy`;

  return (
    <>
      <style>{`
        :root {
          --themeColor: #0066ff;
          --themeColorHover: #0052cc;
          --themeColorLight: #e6f0ff;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .passenger-selector-container {
          min-height: 20px;
          background: linear-gradient(to bottom, #f0f7ff, #ffffff);
        //   padding: 10px 10px;
        }

        .passenger-selector-wrapper {
          max-width: 600px;
          margin: 0 auto;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }

        .selector-field {
          position: relative;
        }

        .field-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #4a5568;
          margin-bottom: 0.5rem;
        }

        .selector-button {
          width: 100%;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 1rem;
        }

        .selector-button:hover {
          border-color: var(--themeColor);
        }

        .selector-button:focus {
          outline: none;
          border-color: var(--themeColor);
          box-shadow: 0 0 0 3px var(--themeColorLight);
        }

        .selector-text {
          color: #1a1a1a;
          font-weight: 500;
        }

        .chevron-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #4a5568;
          transition: transform 0.2s ease;
        }

        .chevron-icon.open {
          transform: rotate(180deg);
        }

        .dropdown-panel {
            position: absolute;
            z-index: 1000; /* keep this high */
            width: 350px;
            margin-top: 0.5rem;
          
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          
            max-height: 450px;          /* control visible height */
            overflow-y: auto;           /* enable vertical scroll */
            overflow-x: hidden;         /* prevent horizontal scroll */
          }
          .dropdown-panel::-webkit-scrollbar {
            width: 6px;
          }
          
          .dropdown-panel::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 10px;
          }
          
          .dropdown-panel::-webkit-scrollbar-track {
            background: transparent;
          }

        .dropdown-content {
          padding: 1.5rem;
        }

        .cabin-class-notice {
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }

        .notice-title {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .notice-text {
          font-size: 0.875rem;
          color: #4a5568;
          margin-bottom: 0.75rem;
        }

        .notice-description {
          font-size: 0.875rem;
          color: #2d3748;
        }

        .passenger-controls {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .control-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .control-label {
          flex: 1;
        }

        .label-title {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.25rem;
        }

        .label-subtitle {
          font-size: 0.875rem;
          color: #4a5568;
        }

        .counter-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .counter-button {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: #e2e8f0;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #1a1a1a;
        }

        .counter-button:hover:not(:disabled) {
          background: #cbd5e0;
        }

        .counter-button:disabled {
          background: #f7fafc;
          color: #a0aec0;
          cursor: not-allowed;
        }

        .counter-value {
          width: 2rem;
          text-align: center;
          font-weight: 600;
          color: #1a1a1a;
        }

        .children-ages {
          margin-top: 1rem;
          padding-top: 1rem;
        }

        .age-field {
          margin-bottom: 1rem;
        }

        .age-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .age-select {
          width: 100%;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.75rem 2.5rem 0.75rem 1rem;
          font-size: 1rem;
          color: #1a1a1a;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1.25rem;
          transition: border-color 0.2s ease;
        }

        .age-select:focus {
          outline: none;
          border-color: var(--themeColor);
          box-shadow: 0 0 0 3px var(--themeColorLight);
        }

        .info-box {
          background: var(--themeColorLight);
          border: 1px solid #b3d9ff;
          border-radius: 8px;
          padding: 0.75rem;
          margin-top: 1rem;
        }

        .info-text {
          font-size: 0.75rem;
          color: #2d3748;
          line-height: 1.5;
          margin-bottom: 0.5rem;
        }

        .info-text:last-child {
          margin-bottom: 0;
        }

        .apply-button {
          width: 100%;
          background: var(--themeColor);
          color: white;
          font-weight: 600;
          padding: 0.875rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
          font-size: 1rem;
          margin-top: 1.5rem;
        }

        .apply-button:hover {
          background: var(--themeColorHover);
        }

        .apply-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px var(--themeColorLight);
        }

        .result-display {
          margin-top: 0px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 10px;
          display: inline-block;
        }

        .result-label {
          font-size: 0.875rem;
          color: #4a5568;
          margin-bottom: 0.25rem;
        }

        .result-value {
          font-weight: 600;
          color: #1a1a1a;
        }

        @media (min-width: 768px) {

          .page-title {
            font-size: 2rem;
          }

          .dropdown-content {
            padding: 2rem;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 1.5rem;
          }

          .selector-button {
            padding: 0.625rem 0.875rem;
          }

          .counter-button {
            width: 2.25rem;
            height: 2.25rem;
          }
        }
      `}</style>

      <div className="passenger-selector-container">
        <div className="passenger-selector-wrapper">
          <div className="selector-field" ref={dropdownRef}>
            <div
              className="result-display"
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: 'pointer' }}
            >
              <div className="result-label">Travellers and cabin class</div>
              <div className="result-value">{displayText}</div>
            </div>{' '}
            {isOpen && (
              <div className="dropdown-panel">
                <div className="dropdown-content">
                  <div className="cabin-class-notice">
                    <h3 className="notice-title">Cabin class</h3>
                    <p className="notice-text">
                      We can only show Economy prices for this search.
                    </p>
                    <p className="notice-description">
                      To see Business, Premium Economy, and First Class options,
                      please tell us your travel dates and destination.
                    </p>
                  </div>

                  <div className="passenger-controls">
                    <div className="control-row">
                      <div className="control-label">
                        <div className="label-title">Adults</div>
                        <div className="label-subtitle">Aged 18+</div>
                      </div>
                      <div className="counter-controls">
                        <button
                          onClick={() => handleAdultsChange(-1)}
                          disabled={adults <= 1}
                          className="counter-button"
                        >
                          −
                        </button>
                        <span className="counter-value">{adults}</span>
                        <button
                          onClick={() => handleAdultsChange(1)}
                          disabled={adults >= 9}
                          className="counter-button"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="control-row">
                      <div className="control-label">
                        <div className="label-title">Children</div>
                        <div className="label-subtitle">Aged 0 to 17</div>
                      </div>
                      <div className="counter-controls">
                        <button
                          onClick={() => handleChildrenChange(-1)}
                          disabled={children <= 0}
                          className="counter-button"
                        >
                          −
                        </button>
                        <span className="counter-value">{children}</span>
                        <button
                          onClick={() => handleChildrenChange(1)}
                          disabled={children >= 9}
                          className="counter-button"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {children > 0 && (
                      <div className="children-ages">
                        {childAges.map((age, index) => (
                          <div key={index} className="age-field">
                            <label className="age-label">
                              Age of child {index + 1}
                            </label>
                            <select
                              value={age}
                              onChange={(e) =>
                                handleChildAgeChange(index, e.target.value)
                              }
                              className="age-select"
                            >
                              <option value="">Select age</option>
                              {Array.from({ length: 18 }, (_, i) => (
                                <option key={i} value={i}>
                                  {i}
                                </option>
                              ))}
                            </select>
                          </div>
                        ))}

                        <div className="info-box">
                          <p className="info-text">
                            Your age at time of travel must be valid for the age
                            category booked. Airlines have restrictions on under
                            18s travelling alone.
                          </p>
                          <p className="info-text">
                            Age limits and policies for travelling with children
                            may vary so please check with the airline before
                            booking.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <button onClick={handleApply} className="apply-button">
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
