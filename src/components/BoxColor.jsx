import React from 'react';

const BoxColor = ({ r, g, b }) => {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex({ r, g, b }) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  rgbToHex({ r, g, b });
  const textColor = r + g + b > (255 * 3) / 2 ? 'black' : 'white';
  return (
    <div style={{ backgroundColor: `rgb(${r},${g}, ${b})`, color: textColor }}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex({ r, g, b })}</p>
    </div>
  );
};

export default BoxColor;
