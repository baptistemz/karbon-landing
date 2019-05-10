import React from 'react';
import MobileHomeSectionContent from './MobileHomeSectionContent';

const MobileHomeMockup = ({ step, sectionNumber, maxSteps, sectionName, xs, goToStep, goToSection, sections, classes }) => {
  let screensArray = [];
  if(sectionNumber === 0){
    for (var i = 0; i < maxSteps; i++) {
      screensArray.push({
        right: (-i * 245) + (step * 245),
        top: 0,
        opacity: 1,
        backgroundImage: `url('/home_${sectionName}_screen_${i + 1}.png')`
      })
    }
  }
  if(sectionNumber === 1 || sectionNumber === 2){
    for (var j = 0; j < maxSteps; j++) {
      screensArray.push({
        right: 0,
        top: 0,
        opacity: step === j ? 1 : 0,
        backgroundImage: `url('/home_${sectionName}_screen_${j + 1}.png')`
      })
    }
  }
  return(
    <div className="flex-column align-items-center overflow-hidden" style={{ padding: 0, height: "calc(100vh - 100px)" }}>
      <MobileHomeSectionContent goToStep={goToStep} section={sections[sectionNumber]} step={step} />
      <div style={{ padding: "30px", height: 0 }}>
        <div className="position-relative">
          <img src="/iphone-mockup.png" alt=""/>
          <div className="mockup-screen-container">
            {screensArray.map(({ backgroundImage, top, right, opacity }, i) => (
              <div key={i} className="mockup-screen-content" style={{ backgroundImage, top, right, opacity }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileHomeMockup;
