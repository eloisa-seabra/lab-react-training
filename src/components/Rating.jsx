import React from 'react';

const Rating = ({ children }) => {
  let roundVal = Math.round(parseFloat(children));

  let rating = '';
  for (let i = 0; i < 5; i++) {
    if (i < roundVal) {
      rating += '★';
    } else {
      rating += '☆';
    }
  }
  return <p>{rating}</p>;
};

export default Rating;
