import React from 'react';

export default function FlightDealsComponent() {
  return (
    <div className="w-full py-14 px-4">
      {/* Card Container */}
      <div className="max-w-6xl mx-auto bg-[#f3f7fb] rounded-2xl px-6 sm:px-10 py-14">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Looking for the best flight deals to anywhere in the world?
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            It's easy around here. 100 million travellers use us as their go-to
            tool, comparing flight deals and offers from more than 1,200
            airlines and travel providers. With so many options to choose from
            in one place, you can say hello to savings, and goodbye to stress –
            here's how.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Feature 1 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="mb-6 transition-transform duration-300 hover:scale-105">
              <svg viewBox="0 0 180 180" className="w-32 h-32">
                <defs>
                  <linearGradient
                    id="globeGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#7EC8E3" />
                    <stop offset="100%" stopColor="#5B9FDB" />
                  </linearGradient>
                </defs>
                <circle cx="90" cy="90" r="70" fill="url(#globeGrad)" />
                <path
                  d="M 50 70 Q 55 65 60 70 Q 65 68 70 72 L 72 80 Q 68 85 62 83 Q 58 86 52 82 Z"
                  fill="#5FB85F"
                />
                <path
                  d="M 75 55 Q 82 50 88 55 Q 92 53 95 58 L 96 68 Q 92 72 86 70 Q 82 73 77 68 Z"
                  fill="#5FB85F"
                />
                <path
                  d="M 100 65 Q 108 62 115 68 Q 118 66 122 70 L 124 82 Q 120 87 113 84 Q 108 88 102 82 Z"
                  fill="#5FB85F"
                />
                <path
                  d="M 55 95 Q 62 90 70 95 Q 74 93 78 98 L 80 108 Q 76 113 68 110 Q 63 114 57 108 Z"
                  fill="#5FB85F"
                />
                <ellipse
                  cx="90"
                  cy="90"
                  rx="70"
                  ry="70"
                  fill="none"
                  stroke="#4A90C8"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <line
                  x1="20"
                  y1="90"
                  x2="160"
                  y2="90"
                  stroke="#4A90C8"
                  strokeWidth="2"
                  opacity="0.3"
                />
              </svg>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              Search 'Everywhere', explore anywhere
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Enter your departure airport and travel dates, then hit
              'Everywhere'. You'll see flights to every destination in the
              world, cheapest first.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="mb-6 transition-transform duration-300 hover:scale-105">
              <svg viewBox="0 0 180 180" className="w-32 h-32">
                <path
                  d="M 35 55 L 145 55 L 150 145 L 30 145 Z"
                  fill="#7EC8E3"
                />
                <path
                  d="M 40 50 L 140 50 L 145 140 L 35 140 Z"
                  fill="#5B9FDB"
                />
                <rect x="85" y="45" width="10" height="15" fill="#4A90C8" />
                <rect
                  x="50"
                  y="75"
                  width="35"
                  height="48"
                  rx="2"
                  fill="#8B3A3A"
                />
                <rect
                  x="95"
                  y="80"
                  width="38"
                  height="24"
                  rx="2"
                  fill="#5B9FDB"
                />
                <circle cx="105" cy="115" r="14" fill="#7ED6C1" />
                <circle cx="105" cy="112" r="5" fill="white" />
                <path
                  d="M 95 122 Q 105 117 115 122"
                  stroke="white"
                  strokeWidth="2.5"
                  fill="none"
                />
              </svg>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              Pay less, go further with transparent pricing
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              The cheapest flight deals. No hidden fees. No funny business. With
              us, the price you see when you search is what you'll pay.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="mb-6 transition-transform duration-300 hover:scale-105">
              <svg viewBox="0 0 180 180" className="w-32 h-32">
                <circle cx="90" cy="100" r="50" fill="#3B7AC2" />
                <circle cx="90" cy="100" r="46" fill="white" />
                <line
                  x1="90"
                  y1="100"
                  x2="90"
                  y2="72"
                  stroke="#C73E3A"
                  strokeWidth="3"
                />
                <line
                  x1="90"
                  y1="100"
                  x2="108"
                  y2="110"
                  stroke="#2D5A8C"
                  strokeWidth="3"
                />
                <circle cx="65" cy="55" r="12" fill="#F5C563" />
                <circle cx="115" cy="55" r="12" fill="#F5C563" />
              </svg>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              Book when it's best with Price Alerts
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Found your flight, but not quite ready to book? Set up Price
              Alerts and we'll let you know when your flight price goes up or
              down.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
