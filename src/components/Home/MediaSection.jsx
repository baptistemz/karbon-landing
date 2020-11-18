import React, { useState } from 'react';


const MediaSection = () => {
  const [playerOpenned, setPlayerOpenned] = useState(false);
  return(
    <div id="media_section">
      <div className="main-picture">

          {
            playerOpenned ?
              <div className="iframe-container">
                <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fkarbon.environnement%2Fvideos%2F964917977348464%2F&show_text=0&width=560" style={{border: 'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
              </div>
            :
              <a onClick={() => setPlayerOpenned(true)}>
                <img src="/europe1.webp" alt=""/>
              </a>
          }
      </div>
      <div className="small-pictures space-around">
        <a target="_blank" href="https://www.trnd.com/fr/idees/karbon">
          <img src="/trnd.webp" alt=""/>
        </a>
        <a target="_blank" href="https://www.leparisien.fr/guide-shopping/high-tech/informatique/les-applications-pour-mieux-consommer-en-vacances-20-07-2020-8355681.php">
          <img src="/le-parisien.webp" alt=""/>
        </a>
        <a target="_blank" href="https://bienvivreledigital.orange.fr/vie-perso/12-applis-pour-mesurer-ton-empreinte-carbone-et-faire-de-toi-un-green-citizen/">
          <img src="/orange.webp" alt=""/>
        </a>
      </div>




    </div>
  )
};


export { MediaSection };
