import React from 'react';
import { Plane, ChevronRight } from 'lucide-react';

// CityCard Component
interface FlightLeg {
  date: string;
  day: string;
  route: string;
  type: string;
}

interface CityCardProps {
  cityName: string;
  country: string;
  cityImage: string; // Required image URL
  flights: FlightLeg[];
  priceFrom: string;
  currency?: string;
  onCardClick?: () => void;
  className?: string;
}

export const CityCard: React.FC<CityCardProps> = ({
  cityName,
  country,
  cityImage,
  flights,
  priceFrom,
  currency = '₹',
  onCardClick,
  className = '',
}) => {
  return (
    <div
      className={`city-card ${className}`}
      onClick={onCardClick}
      style={{
        width: '100%',
        maxWidth: '350px',
        background: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Header with City Image */}
      <div
        style={{
          width: '100%',
          height: '180px',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom, #dbeafe, #eff6ff)',
        }}
      >
        <img
          src={cityImage}
          alt={`${cityName} skyline`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* City Info */}
      <div style={{ padding: '24px' }}>
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#111827',
            margin: '0',
          }}
        >
          {cityName}
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: '4px 0 0 0',
          }}
        >
          {country}
        </p>

        {/* Flight Details */}
        <div
          style={{
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {flights.map((flight, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  flex: '1',
                }}
              >
                <Plane
                  style={{
                    width: '24px',
                    height: '24px',
                    color: '#111827',
                    flexShrink: '0',
                    marginTop: '4px',
                  }}
                  fill="currentColor"
                />
                <div style={{ flex: '1' }}>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#111827',
                      margin: '0',
                    }}
                  >
                    {flight.day}, {flight.date}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {flight.route}
                  </p>
                </div>
              </div>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#111827',
                  whiteSpace: 'nowrap',
                }}
              >
                {flight.type}
              </span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div
          style={{
            marginTop: '24px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: '#2563eb',
              fontWeight: '600',
              fontSize: '15px',
              textDecoration: 'none',
            }}
            onClick={(e) => e.preventDefault()}
          >
            <span>
              from {currency} {priceFrom}
            </span>
            <ChevronRight style={{ width: '20px', height: '20px' }} />
          </a>
        </div>
      </div>
    </div>
  );
};
