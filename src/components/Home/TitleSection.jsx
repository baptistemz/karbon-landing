import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faAndroid, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

const TitleSection = () => (
  <div className="space-around">
    <div id="home_title_container">
      <div>
        <h1>
          Mesurez <span className="highlighted-text">l'impact</span> de vos <span className="highlighted-text">produits alimentaires</span>
        </h1>

        <div className="flex-row align-center">
          <a target="_blank" class="app-btn blu space-around align-items-center" href="https://apps.apple.com/fr/app/karbon-scanner-%C3%A9cologique/id1411345032">
            <FontAwesomeIcon icon={faApple} />
            <p>Télécharger dans <br/> <span class="big-txt">l'App Store</span></p>
          </a>
          <a target="_blank" class="app-btn blu space-around align-items-center" href="https://play.google.com/store/apps/details?id=com.baptistemz.karbon">
            <FontAwesomeIcon icon={faGooglePlay} />
            <p>Télécharger sur <br/> <span class="big-txt">Google Play</span></p>
          </a>
        </div>
      </div>
    </div>
    <Hidden smDown>
      <div id="home_device_image_container">
        <img src="/landing_device.webp" alt=""/>
      </div>
    </Hidden>
  </div>
);


export default TitleSection;
