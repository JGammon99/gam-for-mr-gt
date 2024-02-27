import React from 'react';
import './global.css';
import './AboutPage.css';

function AboutPage() {

  // Function to toggle video playback
  const togglePlayback = () => {
    const video = document.getElementById('myVideo');
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="page-container">
        <h1 className='title-text'>What is Mr. GT?</h1>
        <div className='mrgt-image'>
          <img src='/mrgt.jpg' alt='Mr. GT'></img>
        </div>
        <div className='about-text'>
            <p>Mr. GT is a male pageant that has the goal of raising money for Send Me Now Missions! Leading up to the event on March 8th, competitors work together with their coaches to fundraise money for their campaign! On the night of March 8th, the competitors
                will participate in a fun talent show where they get to showcase their personality, talents, and share about their heart for missions! At the end of the night, based on their fundraising efforts and performance at the talent, one competitor will be crowned Mr. GT!
            </p>
        </div>
        <br></br>
        <h1 className='title-text'>Where does the money go?</h1>
        <div className='smn-image'>
          <img src='/smn.png' alt='Send Me Now'></img>
        </div>
        <div className='about-text'>
            <p>All money that is raised for Mr. GT goes to an organization called Send Me Now! Sponsored by the Georgia Baptist Mission Board, Send Me Now is a missions organization that aims to mobilize students from BCMs all across the state of Georgia on mission trips!
               Donations help support college students with a desire to reach the nations with the gospel!
            </p>
        </div>
        <br></br>
        <div className='learn-more'>
          <h1 className='title-text'>Learn More</h1>
          <div className="about-video-container">
            <video className="about-video" controls>
              <source src="./smn.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div id="playPauseBtn" onClick={togglePlayback}></div>
          </div>
          <div className="button-container">
            <a href="https://sendmenow.net/" target="_blank" rel="noopener noreferrer" className="sendmenow-button">
              Visit SendMeNow
            </a>
          </div>
        </div>
        <br></br>
        <div className='images'>
          <h1 className='title-text'>GT on Mission</h1>
          <div className='image'>
            <img src='/NaySMN2.jpeg' alt='Two of our students on a SendMeNow trip in Argentina'></img>
            <p>Two of our students, Natalie and Rylee, on a Send Me Now trip in Argentina!!</p><br></br><br></br>
          </div>
          <div className='image'>
            <img src='/GTSMN.png' alt='Georgia Tech Students at Discovery Day for Send Me Now'></img>
            <p>This year's group of students going on a Send Me Now trip this summer!</p><br></br><br></br>
            </div>
          <div className='image'>
            <img src='/Landrum.jpeg' alt='One of our students on a SendMeNow trip in Arizona'></img>
            <p>Another one of our students, John, on a Send Me Now trip to Arizona this past summer!</p><br></br>
          </div>
          <div className='image'>
            <img src='/bakerSMN.jpg' alt='Serving free coffee in Norway'></img>
            <p>Baker serving the people of Norway one free coffee at a time!</p><br></br>
          </div>
        </div>
    </div>
  );
}

export default AboutPage;
