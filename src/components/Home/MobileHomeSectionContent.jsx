import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

const MobileHomeSectionContent = ({ section, step, goToStep }) => {
  return(
    <div className="section-content-container">
      <span onClick={() => goToStep(step - 1)} className="pointer">
        {" "}
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </span>
      <p className="margin-bottom-20 margin-top-20">
        {section.steps[step].text}
      </p>
      <span onClick={() => goToStep(step + 1)} className="pointer">
        {" "}
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </span>
    </div>
  )
}

export default MobileHomeSectionContent;
