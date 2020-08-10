import React from 'react';
import './Greetings.css';

const Greetings = ({ lang, children }) => {
  let message;
  switch (lang) {
    case 'de':
      message = 'Hallo';
      break;
    case 'en':
      message = 'Hello';
      break;
    case 'es':
      message = 'Hola';
      break;
    case 'fr':
      message = 'Bonjour';
      break;
    default:
      message = 'Hello';
  }
  return (
    <div className="lang">
      <p>
        {message} {children}
      </p>
    </div>
  );
};
export default Greetings;
