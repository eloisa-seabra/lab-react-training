import React from 'react';
import './CreditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let digitsYear = expirationYear % 100;
  let num = number.replace(/\d(?=\d{4})/g, '*');
  return (
    <div
      className="creditcard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <p>{type}</p>
      <h1> {num}</h1>
      <p>
        {expirationMonth}/{digitsYear} {bank}
      </p>
      <p> {owner}</p>
    </div>
  );
};
export default CreditCard;
