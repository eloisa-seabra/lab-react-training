import React from 'react';
import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
  let numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="table">
      {numbers.map((num) => {
        return (
          <div
            className="numbers"
            style={{
              backgroundColor: num % 2 ? 'white' : 'red',
              padding: num < 10 ? '158px' : '148px',
            }}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
