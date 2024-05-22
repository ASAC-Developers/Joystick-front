import React from 'react'
import './AboutInfo.css'
import MainImg from '../../../assets/3d.png'
// import Feature1 from '../../../assets/feature1.png'
function AboutInfo() {
  return (
    <div>
    <section className="infoContainer" id="about">
      <h2 className="infoTitle">About our Website</h2>
      <div className='content'>
        <img
          src={MainImg}
          alt="InfoCardImg"
          className="aboutImage"
        />
        <ul className="aboutItems">
          <li className="aboutItem">
            {/* <img src={Feature1} alt="Faeture 1" /> */}
            <div className="aboutItemText">
              <h3>wide Game Library</h3>
              <p className='PaboutItemText'>
              Explore our thoughtfully curated collections to uncover your  favorite game. </p>
            </div>
          </li>
          <li className='aboutItem'>
            {/* <img src="#Feature2" alt=" icon2" /> */}
            <div className='aboutItemText'>
              <h3> Play Online </h3>
              <p>
              You can visit the official game websites to download and enjoy the full, offline gaming experience.
              </p>
            </div>
          </li>
          <li className='aboutItem'>
            {/* <img src="Feature3" alt="icon3" /> */}
            <div className='aboutItemText'>
              <h3>Regular Updates and New Releases</h3>
              <p>
              We keep our content fresh and exciting with regular updates and new game releases. Stay tuned!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
  )
}

export default AboutInfo
