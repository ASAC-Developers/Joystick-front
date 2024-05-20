import React from 'react';
import './Banner.css'; // Assuming you will create a separate CSS file for styling
import bannerVideo from '../../../assets/video.mp4';  // Importing the video file directly
import logoBanner from '../../../assets/logo2.png'
const Banner = () => {
  return (
    <div className="main-banner" id="top">
      <video autoPlay muted loop id="bg-video">
        <source src={bannerVideo} type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
        <div className="caption">
          <img className='logo-joystic' src={logoBanner} alt='banner_image'/>
          <h6>JoyStick GAMES</h6>
          <h2 className="cssanimation hu__hu__"> The world of <em>GAMES</em></h2>
          <div className="main-button scroll-to-section">
            {/* <a href="#features">Become a member</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
