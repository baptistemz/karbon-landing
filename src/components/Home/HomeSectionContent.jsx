import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const HomeSectionContent = ({ section, step, goToStep }) => {
  return(
    <div className="section-content-container">
      {section.steps.map((sectionStep, i) =>(
        <p key={i} className={`${i === step ? "text-secondary" : ""} margin-bottom-20 margin-top-20`}>
          {sectionStep.text}
          <span onClick={() => goToStep(i)} className="pointer">
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </span>
        </p>
      ))}
    </div>
  )
}

export default HomeSectionContent;
