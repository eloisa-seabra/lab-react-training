import React from 'react';

const Rating = ({ children }) => {
  let roundVal = Math.round(children);
  return <p>{roundVal}</p>;
};

export default Rating;
