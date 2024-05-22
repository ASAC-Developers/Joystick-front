import React from 'react';
import './AboutCard.css';
import Loai from '../../../assets/loai.png';
import Ahmad from '../../../assets/ahmad.png';
import Haya from '../../../assets/haya.png';
import Raneem from '../../../assets/Raneem.png'
function AboutCard() {
    return (
        <div className='aboutCardContainer'>
            <h2 className="teamTitle">Meet Our Development Team</h2>
            <div className='groupCard'>
                <div className="person">
                    <div className="cardContainer">
                        <div className="cardContainer-inner">
                            <img
                                className="circle"
                                src={Haya}
                                alt="Haya Circle"
                            />
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="name">Haya Al-Sughair</div>
                    <div className="personTitle">Front-end Developer & UIUX Designer</div>
                </div>
                <div className="person">
                    <div className="cardContainer">
                        <div className="cardContainer-inner">
                            <img
                                className="circle"
                                src={Raneem}
                                alt="Raneem Circle"
                            />
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="name">Raneem Hamid </div>
                    <div className="personTitle">Front-end Developer & UIUX Designer </div>
                </div>
                <div className="person">
                    <div className="cardContainer">
                        <div className="cardContainer-inner">
                            <img
                                className="circle"
                                src={Ahmad}
                                alt="Ahmad Circle"
                            />
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="name">Ahmad Abed</div>
                    <div className="personTitle">Back-end Developer</div>
                </div>
                <div className="person">
                    <div className="cardContainer">
                        <div className="cardContainer-inner">
                            <img
                                className="circle"
                                src={Loai}
                                alt="Loai Circle"
                            />
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="name">Loai Alhasan</div>
                    <div className="personTitle">Back-end Developer</div>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;
