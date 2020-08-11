import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <div>
        <img src={picture} />
      </div>
      <span>
        <strong> Last name: </strong>
      </span>
      {lastName}
      <span>
        <strong> First name: </strong>
      </span>
      {firstName}
      <span>
        <strong> Gender: </strong>
      </span>
      {gender}
      <span>
        <strong> Height: </strong>
      </span>
      {height}
      <span>
        <strong> Birth: </strong>
      </span>
      {birth.toDateString()}
    </div>
  );
};
export default IdCard;
