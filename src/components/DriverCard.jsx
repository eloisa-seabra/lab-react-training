import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  let rate = Math.round(rating);

  return (
    <div>
      <div>
        <img style={{ width: '150px' }} src={img} />
      </div>
      <p>{name}</p>
      <Rating>{rate}</Rating>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
};
export default DriverCard;
