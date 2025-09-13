import React from 'react';
import teamfolder from '../assets/team-folder.png';
import Particles from '../backgrounds/Particles';
import TiltedCard from '../component-animations/TiltedCard';

import SplitText from '../text-animations/SplitText'
import DecryptedText from '../text-animations/DecryptedText';

import '../styles/TeamMembers.css'

import Devesh from '../assets/team-members-images/Devesh.jpg'
import Siddhesh from '../assets/team-members-images/Siddhesh.jpg';

export default function TeamMembers() {
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
      <h2 className="page-title">
          <SplitText
            text="AISAC-TEAM"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
      </h2>
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
              text="Secratries"
              speed={60}
              animateOn="view"
            />
          </span>
          <div className='secretaries-cards'>
            <TiltedCard
              imageSrc={Devesh}
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
              imageSrc={Devesh}
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
            imageSrc={Devesh}
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
            imageSrc={Devesh}
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
            {[1, 2, 3, 4, 5].map((member, index) => (
              <TiltedCard
                key={index}
                imageSrc={`${Devesh}${member}`}
                altText={`Technical Team Member ${member}`}
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
                    Tech Member {member}
                  </p>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}