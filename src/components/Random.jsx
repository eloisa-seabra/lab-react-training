import React from 'react';

const Random = ({ min, max }) => {
  let randomVal = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <p>
      Random value between {min} and {max} = {'>'} {randomVal}
    </p>
  );
};

export default Random;
