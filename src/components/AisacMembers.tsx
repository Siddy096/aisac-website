import React from 'react';
import { useState } from 'react';

import CsiMembers from './CsiMembers';

import Particles from '../backgrounds/Particles';
import TiltedCard from '../component-animations/TiltedCard';

import SplitText from '../text-animations/SplitText'
import DecryptedText from '../text-animations/DecryptedText';

import '../styles/TeamMembers.css'

import Devesh from '../assets/team-members-images/Devesh.jpg'
import Siddhesh from '../assets/team-members-images/Siddhesh.jpg';
import Rishi from '../assets/team-members-images/Rishi.jpg'
import Vedant from '../assets/team-members-images/Vedant.jpg';
import Drishti from '../assets/team-members-images/Drishti.jpg';
import Kshama from '../assets/team-members-images/Kshama.jpg'
import Ninad from '../assets/team-members-images/Ninad.jpg';
import Sarthak from '../assets/team-members-images/Sarthak.jpg'
import Maitreya from '../assets/team-members-images/Maitreya.jpg';
import urvi from '../assets/team-members-images/urvi-t.jpg'

import Ayush from '../assets/team-members-images/Ayush.jpg';
import Darpan from '../assets/team-members-images/Darpan.jpg';
import Aditya from '../assets/team-members-images/Aditya.jpg'
import Aditi from '../assets/team-members-images/Aditi.jpg'
import sharyou from '../assets/team-members-images/sharyou.jpg'
import neel from '../assets/team-members-images/neel.jpg'
import Anuj from '../assets/team-members-images/Anuj.jpg'
import Aarya from '../assets/team-members-images/Aarya.jpg'
import Aadi from '../assets/team-members-images/Aadi.jpg'
import ayusha from '../assets/team-members-images/ayusha.jpg'
import parth from '../assets/team-members-images/parth.jpg'
import trisha from '../assets/team-members-images/trisha.jpg'
import dhruv from '../assets/team-members-images/dhruv.jpg'
import mashood from '../assets/team-members-images/mashood.jpg'
import pankaj from '../assets/team-members-images/pankaj.jpg'

import Default from '../assets/team-members-images/Default.jpg';

export default function TeamMembers() {
  const [showCsiTeam, setShowCsiTeam] = useState(false);

  const handleTeamToggle = () => {
    setShowCsiTeam(!showCsiTeam);
  };

  return (
    <div className='folder-container'>
      <div style = {{width: '100%', height: '100vh', position: 'fixed'}}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      <button 
        className='csi-team-button' 
        onClick={handleTeamToggle}
      >
        {showCsiTeam ? 'AiSAC Team' : 'CSI Team'}
      </button>

      {showCsiTeam ? (
        <CsiMembers onToggleTeam={handleTeamToggle} />
      ) : (
        <>
          {/* AISAC Team */}
          <h1 className="page-title">
            <SplitText
              text="AiSAC TEAM"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0}
              rootMargin="0px"
            />
          </h1>
          <div className='team-hierarchy'>
            {/* Chairman */}
            <div className='chairman-section'>
              <span className='section-title'>
                <DecryptedText
                  text="Chairman"
                  speed={60}
                  animateOn="view"
                />
              </span>
              <TiltedCard
                imageSrc={Devesh}
                altText="Chairman"
                captionText="Chairman"
                containerHeight="200px"
                containerWidth="200px"
                imageHeight="200px"
                imageWidth="200px"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Devesh Ambekar
                  </p>
                }
              />
            </div>

            {/* Secretaries */}
            <div className='secretaries-section'>
              <span className='section-title'>
                <DecryptedText
                  text="Secretaries"
                  speed={60}
                  animateOn="view"
                />
              </span>
              <div className='secretaries-cards'>
                <TiltedCard
                  imageSrc={Kshama}
                  altText="Kshama Nayak"
                  captionText="Secretary"
                  containerHeight="180px"
                  containerWidth="180px"
                  imageHeight="180px"
                  imageWidth="180px"
                  rotateAmplitude={8}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text">
                      Kshama Nayak
                    </p>
                  }
                />
                <TiltedCard
                  imageSrc={Maitreya}
                  altText="Maitreya Channe"
                  captionText="Joint Secretary"
                  containerHeight="180px"
                  containerWidth="180px"
                  imageHeight="180px"
                  imageWidth="180px"
                  rotateAmplitude={8}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text">
                      Maitreya Channe 
                    </p>
                  }
                />
              </div>
            </div>

            {/* Treasurer */}
            <div className='treasurer-section'>
              <span className='section-title'>
                <DecryptedText
                  text="Treasurer"
                  speed={60}
                  animateOn="view"
                />
              </span>
              <TiltedCard
                imageSrc={Vedant}
                altText="Vedant Dhoke"
                captionText="Treasurer"
                containerHeight="180px"
                containerWidth="180px"
                imageHeight="180px"
                imageWidth="180px"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Vedant Dhoke
                  </p>
                }
              />
            </div>

            {/* Event Head */}
            <div className='event-head-section'>
              <span className='section-title'>
                <DecryptedText
                  text="Event Head"
                  speed={60}
                  animateOn="view"
                />
              </span>
              <TiltedCard
                imageSrc={Rishi}
                altText="Rishi Yadav"
                captionText="Event Head"
                containerHeight="180px"
                containerWidth="180px"
                imageHeight="180px"
                imageWidth="180px"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Rishi Yadav
                  </p>
                }
              />
            </div>

            {/* Technical Team */}
            <div className='technical-team-section'>
              <span className='section-title'>
                <DecryptedText
                  text="Technical Team"
                  speed={60}
                  animateOn="view"
                />
              </span>
              <TiltedCard
                imageSrc={Siddhesh}
                altText="Siddhesh Varhadi"
                captionText="Technical Head"
                containerHeight="180px"
                containerWidth="180px"
                imageHeight="180px"
                imageWidth="180px"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Siddhesh Varhadi
                  </p>
                }
              />
            </div>

            {/* Technical Team Members */}
            <div className='tech-members-section'>
              <div className='tech-members-cards'>
                  <TiltedCard
                    imageSrc={Aditya}
                    altText="Technical Team Member"
                    captionText="Tech Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Aditya Chaurasiya
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={Anuj}
                    altText="Technical Team Member"
                    captionText="Tech Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Anuj Gangawane
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={Darpan}
                    altText="Technical Team Member"
                    captionText="Tech Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Darpan Shah
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={neel}
                    altText="Technical Team Member"
                    captionText="Tech Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Neel Pandey
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={pankaj}
                    altText="Technical Team Member"
                    captionText="Tech Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Pankaj Gujuri
                      </p>
                    }
                  />
              </div>
            </div>
            {/* Creativity Team */}
            <div className='technical-team-section'>
              <span className='section-title'>
                <DecryptedText
                  text="Creativity Team"
                  speed={60}
                  animateOn="view"
                />
              </span>
              <TiltedCard
                imageSrc={urvi}
                altText="Urvi Turbhekar"
                captionText="Creativity Head"
                containerHeight="180px"
                containerWidth="180px"
                imageHeight="180px"
                imageWidth="180px"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Urvi Turbhekar
                  </p>
                }
              />
            </div>

            {/* Creativity Team Members */}
            <div className='tech-members-section'>
              <div className='tech-members-cards'>
                  <TiltedCard
                    imageSrc={Default}
                    altText="Creativity Team Member"
                    captionText="Creativity Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Anushka Mishra
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={sharyou}
                    altText="Creativity Team Member"
                    captionText="Creativity Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Sharyou Sanap
                      </p>
                    }
                  />
              </div>
            </div>
            {/* Infra & Security Team */}
            <div className='technical-team-section'>
              <span className='section-title'>
                <DecryptedText
                  text="Infra & Security Team"
                  speed={60}
                  animateOn="view"
                />
              </span>
              <TiltedCard
                imageSrc={Sarthak}
                altText="Sarthak Gavas"
                captionText="Infra & Security Head"
                containerHeight="180px"
                containerWidth="180px"
                imageHeight="180px"
                imageWidth="180px"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Sarthak Gavas
                  </p>
                }
              />
            </div>

            {/* Infra & Security Team Members */}
            <div className='tech-members-section'>
              <div className='tech-members-cards'>
                  <TiltedCard
                    imageSrc={Aarya}
                    altText="Infra & Security Team Member"
                    captionText="Infra & Security Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Aarya Yerankar
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={trisha}
                    altText="Infra & Security Team Member"
                    captionText="Infra & Security Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Trisha Shetty
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={parth}
                    altText="Infra & Security Team Member"
                    captionText="Infra & Security Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Parth Kariya
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={Default}
                    altText="Infra & Security Team Member"
                    captionText="Infra & Security Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Riddhish Patil
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={Default}
                    altText="Infra & Security Team Member"
                    captionText="Infra & Security Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Amey salaskar
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={Ayush}
                    altText="Infra & Security Team Member"
                    captionText="Infra & Security Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Aayush Karbhal
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={Default}
                    altText="Infra & Security Team Member"
                    captionText="Infra & Security Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Soham Mane
                      </p>
                    }
                  />
              </div>
            </div>
            {/* Social Media Team */}
            <div className='technical-team-section'>
              <span className='section-title'>
                <DecryptedText
                  text="Social Media Team"
                  speed={60}
                  animateOn="view"
                />
              </span>
              <TiltedCard
                imageSrc={Ninad}
                altText="Ninad Panchal"
                captionText="Social Media Head"
                containerHeight="180px"
                containerWidth="180px"
                imageHeight="180px"
                imageWidth="180px"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Ninad Panchal
                  </p>
                }
              />
            </div>

            {/* Social Media Team Members */}
            <div className='tech-members-section'>
              <div className='tech-members-cards'>
                  <TiltedCard
                    imageSrc={Ayush}
                    altText="Social Media Team Member"
                    captionText="Social Media Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Ayush Kharbhal
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={Aadi}
                    altText="Social Media Team Member"
                    captionText="Social Media Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Aadi Kundaar
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={trisha}
                    altText="Social Media Team Member"
                    captionText="Social Media Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Trisha Shetty
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={Aarya}
                    altText="Social Media Team Member"
                    captionText="Social Media Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Aarya Yerankar
                      </p>
                    }
                  />
              </div>
            </div>
            {/* Documentation Team */}
            <div className='technical-team-section'>
              <span className='section-title'>
                <DecryptedText
                  text="Documentation Team"
                  speed={60}
                  animateOn="view"
                />
              </span>
              <TiltedCard
                imageSrc={Drishti}
                altText="Drishti Kadam"
                captionText="Documentation Head"
                containerHeight="180px"
                containerWidth="180px"
                imageHeight="180px"
                imageWidth="180px"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Drishti Kadam
                  </p>
                }
              />
            </div>

            {/* Documentation Team Members */}
            <div className='tech-members-section'>
              <div className='tech-members-cards'>
                  <TiltedCard
                    imageSrc={Aditi}
                    altText="Documentation Team Member"
                    captionText="Documentation Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Aditi Sahu
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={neel}
                    altText="Documentation Team Member"
                    captionText="Documentation Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Neel Pandey 
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={mashood}
                    altText="Documentation Team Member"
                    captionText="Documentation Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Mashood Kasu
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={dhruv}
                    altText="Documentation Team Member"
                    captionText="Documentation Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Dhruv Dwivedi 
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={Darpan}
                    altText="Documentation Team Member"
                    captionText="Documentation Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Darpan Shah
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc={sharyou}
                    altText="Documentation Team Member"
                    captionText="Documentation Team"
                    containerHeight="160px"
                    containerWidth="160px"
                    imageHeight="160px"
                    imageWidth="160px"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Sharyou Sanap
                      </p>
                    }
                  />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}