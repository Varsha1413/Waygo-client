import { useState, useRef, useEffect } from 'react';
interface FlightPassengerSelectorProps {
  onApply: (data: {
    adults: number;
    children: number;
    childAges: string[];
    totalTravellers: number;
    cabinClass: string;
  }) => void;
}

export default function FlightPassengerSelector({
  onApply,
}: FlightPassengerSelectorProps) {
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
    const payload = {
      adults,
      children,
      childAges,
      totalTravellers: adults + children,
      cabinClass: 'Economy',
    };

    console.log('Passenger Selection:', payload);
    onApply(payload);
    setIsOpen(false);
  };

  const totalTravellers = adults + children;
  const displayText = `${totalTravellers} Traveller${
    totalTravellers > 1 ? 's' : ''
  }, Economy`;

  return (
    <>
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
