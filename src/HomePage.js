// HomePage.js
import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <div className="text-container1">
        <h1 className="fade-in1">
            <div id='what'>WHAT WE HAVE</div>
            <div id='seen'>SEEN &</div>
            <div id='heard'>HEARD</div>
        </h1>
      </div>
      <div className='text-container2'>
        <h1 className="fade-in2">
            <div id='vote'>VOTE FOR JACKSON</div>
            <div id='gammon'>GAMMON</div>
            <div id='for'>MR. GT</div>
        </h1>
      </div>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video">
          <source src="./globe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HomePage;
