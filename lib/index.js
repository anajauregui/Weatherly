import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
  <div>
    <App weatherData={
      {
        temp: "90",
        highT: "80",
        lowT: "65",
        summary: "Partly cloudy with a chance of meatballs"
      }
    }/>
  </div>,
  document.getElementById('app')
);
