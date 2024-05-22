import React from 'react';
import './Banner.css';
import bannerVideo from '../../../assets/video.mp4'; 
import logoBanner from '../../../assets/logo001.png'
const Banner = () => {
  return (
    <div className="main-banner" id="top">
      <video autoPlay muted loop id="bg-video">
        <source src={bannerVideo} type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
        <div className="caption">
          <img className='logo-joystic' src={logoBanner} alt='banner_image'/>
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
