import React from 'react';

// National Emblem of India (Ashoka Lion Capital) — custom SVG
export const AshokaEmblem = ({ width = 52, height = 64, color = '#FFFFFF' }) => (
  <svg
    viewBox="0 0 100 130"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Emblem of India - Ashoka Stambh"
    role="img"
  >
    {/* Central Lion Head */}
    <path
      d="M50 8 C44 8 40 12 39 17 C35 18 32 22 33 26 C33 30 36 34 39 36 C38 42 41 48 45 52 L45 62 L55 62 L55 52 C59 48 62 42 61 36 C64 34 67 30 67 26 C68 22 65 18 61 17 C60 12 56 8 50 8 Z"
      stroke={color}
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Crown detail */}
    <path d="M46 14 C48 12 52 12 54 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="50" cy="20" r="1.5" fill={color} />
    <path d="M44 26 C46 28 54 28 56 26" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M47 32 L53 32" stroke={color} strokeWidth="2" strokeLinecap="round" />

    {/* Left Lion Profile */}
    <path
      d="M39 20 C32 20 25 24 24 31 C23 37 26 43 31 47 C29 53 32 60 37 63 L45 63"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="29" cy="28" r="1.2" fill={color} />
    <path d="M26 36 C29 38 34 38 36 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

    {/* Right Lion Profile */}
    <path
      d="M61 20 C68 20 75 24 76 31 C77 37 74 43 69 47 C71 53 68 60 63 63 L55 63"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="71" cy="28" r="1.2" fill={color} />
    <path d="M74 36 C71 38 66 38 64 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

    {/* Abacus Base Platform */}
    <rect x="22" y="65" width="56" height="8" rx="2" stroke={color} strokeWidth="2" fill="none" />

    {/* Ashoka Chakra in Base */}
    <circle cx="50" cy="69" r="3.2" stroke={color} strokeWidth="1.5" fill="none" />
    <line x1="50" y1="66" x2="50" y2="72" stroke={color} strokeWidth="1" />
    <line x1="47" y1="69" x2="53" y2="69" stroke={color} strokeWidth="1" />

    {/* Decorative dots */}
    <circle cx="34" cy="69" r="1.8" fill={color} />
    <circle cx="66" cy="69" r="1.8" fill={color} />

    {/* Lotus Base / Bell */}
    <path
      d="M26 73 C30 82 40 86 50 86 C60 86 70 82 74 73"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path d="M36 74 C39 80 45 83 50 83 C55 83 61 80 64 74" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

    {/* Plinth */}
    <rect x="18" y="87" width="64" height="6" rx="1.5" stroke={color} strokeWidth="2" fill="none" />

    {/* Satyameva Jayate */}
    <text
      x="50"
      y="105"
      fill={color}
      fontSize="9"
      fontWeight="700"
      letterSpacing="1.2"
      textAnchor="middle"
      fontFamily="serif"
    >
      सत्यमेव जयते
    </text>
  </svg>
);

export default AshokaEmblem;
