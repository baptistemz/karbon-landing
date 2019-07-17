import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MobileHomeSectionContent from './MobileHomeSectionContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeMockup = ({ step, sectionNumber, maxSteps, sectionName, xs, goToStep, goToSection, sections, classes }) => {
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
    <div className="space-between align-items-start overflow-hidden" style={{ padding: 0, height: "calc(100vh - 200px)" }}>
      <MobileHomeSectionContent goToStep={goToStep} section={sections[sectionNumber]} step={step} />
      <Tabs
        centered
        className="app-background-color maxi-tabs"
        style={{ position: "absolute", bottom: 100, width: "calc(100% - 340px)" }}
        color="secondary"
        classes={{ indicator: classes.noIndicator }}
        value={sectionNumber}
        onChange={(e, v) => goToSection(v)}
        indicatorColor="primary"
        textColor="primary"
        >
        {sections.map(({ label, icon }, i) => (
          <Tab key={i} icon={<FontAwesomeIcon icon={icon} />} label={label} />
        ))}
      </Tabs>
      <div  style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", padding: "0 30px" }}>
        <div className="position-relative" >
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

const styles = theme => ({
  noIndicator: {
    height: 0,
  },
});

export default withStyles(styles)(HomeMockup);
