import React ,{useContext} from 'react'
import './About.css';
import getImageUrl from "../../../assets/feature1.png";
import AboutCard from '../../mainComponent/aboutCard/AboutCard';
import AboutInfo from '../../mainComponent/aboutInfo/AboutInfo'
import { ThemeContext } from '../../theme/ThemeContext';
function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={theme} >
    {/* star background   */}
    <div className="sky">

    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>

  </div>

    <section className="headContainer">
      <div className="headContent">
        <h1 className="title">Joystick</h1>
        <p className="description">
          Dive into the world of gaming with us and enjoy endless fun!
        </p>
      </div>
      <img
        src={getImageUrl}
        alt="HeroImg"
        className="heroImg"
      />
    </section>
    <section className="aboutCards">
      <AboutCard />
      <AboutInfo />
    </section>
    </div >
  );
}

export default About;
