import React from 'react';
import './FaceBook.css';
import profiles from '../data/berlin.json';

const countries = profiles
  .map((profile) => profile.country)
  .filter(
    (country, index, originalArray) => originalArray.indexOf(country) === index
  );
const FaceBook = () => {
  return (
    <div className="facebook">
      {profiles.map((person) => {
        return (
          <div key={person.img} className="card">
            <div>
              <img style={{ width: '200px' }} src={person.img} alt="img" />
            </div>
            <div className="details">
              <p>
                <strong>First name:</strong>
                {person.firstName}
              </p>
              <p>
                <strong> Last name: </strong>
                {person.lastName}
              </p>
              <p>
                <strong> Country: </strong>
                {person.country}
              </p>
              <p>
                <strong> Type: </strong>
                {person.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FaceBook;
