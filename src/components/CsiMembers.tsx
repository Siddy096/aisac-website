import React from 'react';

import Particles from '../backgrounds/Particles';
import TiltedCard from '../component-animations/TiltedCard';

import SplitText from '../text-animations/SplitText'
import DecryptedText from '../text-animations/DecryptedText';

import '../styles/TeamMembers.css'

import Devesh from '../assets/team-members-images/Devesh.jpg'
import Rohit from '../assets/team-members-images/Rohit.jpg';
import Bhakti from '../assets/team-members-images/Bhakti.jpg';

export default function CsiMembers({ onToggleTeam }) {
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
        onClick={onToggleTeam}
      >
        AISAC Team
      </button>
      {/* CSI Team */}
      <h1 className="page-title">
        <SplitText
          text="CSI TEAM"
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
                Aditya Nevgi
              </p>
            }
          />
        </div>

        {/* Secretaries */}
        <div className='secretaries-section'>
          <span className='section-title'>
            <DecryptedText
              text="Secretary"
              speed={60}
              animateOn="view"
            />
          </span>
          <div className='secretaries-cards'>
            <TiltedCard
              imageSrc={Bhakti}
              altText="Bhakti Damare"
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
                  Bhakti Damare
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
            imageSrc={Rohit}
            altText="Rohit Zore"
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
                Rohit Zore
              </p>
            }
          />
        </div>

        {/* Event Head */}
        <div className='event-head-section'>
          <span className='section-title'>
            <DecryptedText
              text="PRO"
              speed={60}
              animateOn="view"
            />
          </span>
          <TiltedCard
            imageSrc={Devesh}
            altText="Bhoomi Naik"
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
                Bhoomi Naik
              </p>
            }
          />
        </div>

        {/* Technical Team */}
        <div className='technical-team-section'>
          <span className='section-title'>
            <DecryptedText
              text="Event Head"
              speed={60}
              animateOn="view"
            />
          </span>
          <TiltedCard
            imageSrc={Devesh}
            altText="Bhoomi Naik"
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
                Gayatri Chavan
              </p>
            }
          />
        </div>
        {/* Creativity Team */}
        <div className='technical-team-section'>
          <span className='section-title'>
            <DecryptedText
              text="Publicity Team"
              speed={60}
              animateOn="view"
            />
          </span>
          <TiltedCard
            imageSrc={Devesh}
            altText="Juned Khan"
            captionText="Publicity Head"
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
                Juned Khan
              </p>
            }
          />
        </div>

        {/* Creativity Team Members */}
        <div className='tech-members-section'>
          <div className='tech-members-cards'>
              <TiltedCard
                imageSrc={Devesh}
                altText="Publicity Team Member"
                captionText="Publicity Team"
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
                    Publicity Member
                  </p>
                }
              />
              <TiltedCard
                imageSrc={Devesh}
                altText="Publicity Team Member"
                captionText="Publicity Team"
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
                    Publicity Member
                  </p>
                }
              />
              <TiltedCard
                imageSrc={Devesh}
                altText="Publicity Team Member"
                captionText="Publicity Team"
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
                    Publicity Member
                  </p>
                }
              />
              <TiltedCard
                imageSrc={Devesh}
                altText="Publicity Team Member"
                captionText="Publicity Team"
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
                    Publicity Member
                  </p>
                }
              />
              <TiltedCard
                imageSrc={Devesh}
                altText="Publicity Team Member"
                captionText="Publicity Team"
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
                    Publicity Member
                  </p>
                }
              />
          </div>
        </div>
        {/* Infra & Security Team */}
        <div className='secretaries-section'>
              <span className='section-title'>
                <DecryptedText
                  text="Event & Magzine Head"
                  speed={60}
                  animateOn="view"
                />
              </span>
              <div className='secretaries-cards'>
                <TiltedCard
                  imageSrc={Devesh}
                  altText="Kshama Nayak"
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
                      Omkar Shingote
                    </p>
                  }
                />
                <TiltedCard
                  imageSrc={Devesh}
                  altText="Maitreya Channe"
                  captionText="Magzine Head"
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
                      Sneha Patil
                    </p>
                  }
                />
              </div>
            </div>

        {/* Infra & Security Team Members */}
        <div className='tech-members-section'>
          <div className='tech-members-cards'>
              <TiltedCard
                imageSrc={Devesh}
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
                    Documentation Member
                  </p>
                }
              />
              <TiltedCard
                imageSrc={Devesh}
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
                    Documentation Member
                  </p>
                }
              />
              <TiltedCard
                imageSrc={Devesh}
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
                    Documentation Member
                  </p>
                }
              />
              <TiltedCard
                imageSrc={Devesh}
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
                    Documentation Member
                  </p>
                }
              />
              <TiltedCard
                imageSrc={Devesh}
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
                    Documentation Member
                  </p>
                }
              />
          </div>
        </div>
      </div>
    </div>
  );
}