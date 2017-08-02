import React from 'react';
import '../Styles/Welcome.css';
import Search from './Search';

export default function Welcome(props) {
  return (
    <div className="welcome">
      <h1>Welcome, Choose a City</h1>
      <Search getApi={props.getApi}/>
    </div>
  );
}
