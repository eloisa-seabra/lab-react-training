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
  const censorCreditCardNumber = (number) => {
    return `**** **** **** ${number.substring(12, 16)}`;
  };

  /*   let num = number.replace(/\d(?=\d{4})/g, '*'); */
  return (
    <div
      className="creditcard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <p>{type}</p>
      <h1> {censorCreditCardNumber(number)}</h1>
      <p>
        Expires: {(expirationMonth < 10 ? '0' : ' ') + expirationMonth}/
        {expirationYear % 1000} {bank}
      </p>
      <p> {owner}</p>
    </div>
  );
};
export default CreditCard;
