import React from 'react';
import './_404.scss';

const Page404 = () => {
  return(
    <div className="over-wrap-404">
      <div className="wrap-404">
        <div className="label">Erreur</div>
        <div className="numbers">
          <div className="number">
            <div className="four"></div>
          </div>
          <div className="number">
            <div className="zero"><span></span></div>
          </div>
          <div className="number">
            <div className="four last"></div>
          </div>
        </div>
        <div className="text">
          <p>Oups... Nous t'avons perdu... </p>
          <p>
            Retour à <a href="/">la maison</a> ?
          </p>
        </div>
        <div className="sleep-walker">
          <div className="man">
            <div className="head"></div>
            <div className="torso">
              <div className="arm-a"></div>
              <div className="arm-b"></div>
            </div>
            <div className="legs">
              <div className="leg-a"></div>
              <div className="leg-b"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page404;
