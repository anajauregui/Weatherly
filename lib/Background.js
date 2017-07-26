import React from 'react';
import './Background.css';

export default class Background extends React.Component{
  render() {
    return(
      <div className="welcome-background">
        <img className="backgound-img" src="assets/gradientbg.jpg" />
      </div>
    )
  }
}
