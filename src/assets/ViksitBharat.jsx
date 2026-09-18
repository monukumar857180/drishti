import React from 'react';

// Replicating the "Viksit Bharat" graphic with Indian tricolor wave from the reference image
export const ViksitBharat = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', userSelect: 'none' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <span
        style={{
          fontFamily: "'Playfair Display', 'Georgia', serif",
          fontStyle: "italic",
          fontWeight: 700,
          color: "#071D3A",
          fontSize: "1.2rem",
          letterSpacing: "0.2px"
        }}
      >
        Viksit Bharat
      </span>
    </div>
    {/* Tricolor dynamic wave ribbon matching reference */}
    <svg width="112" height="14" viewBox="0 0 112 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '2px' }}>
      {/* Saffron upper stroke */}
      <path
        d="M2 3 C25 9, 65 -1, 110 5"
        stroke="#FF7A00"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Green lower stroke */}
      <path
        d="M10 9 C35 15, 75 5, 108 9"
        stroke="#138808"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default ViksitBharat;
