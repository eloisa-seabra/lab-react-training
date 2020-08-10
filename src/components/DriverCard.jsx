import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  let rate = Math.round(rating);
  return (
    <div>
      <div>
        <img style={{ width: '150px' }} src={img} />
      </div>
      <p>{name}</p>
      <p>{rate}</p>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
};
export default DriverCard;
