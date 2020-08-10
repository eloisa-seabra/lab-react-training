import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="idcard">
      <p>{lastName}</p>
      <p> {firstName}</p>
      <p> {gender} </p>
      <p> {height}</p>
      <p>{birth.toString()}</p>
      <div>
        <img src={picture} />
      </div>
    </div>
  );
};
export default IdCard;
