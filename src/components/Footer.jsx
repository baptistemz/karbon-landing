import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay, faAppStore, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return(
    <div id="footer" className="space-around">
      <Grid container>
        <Grid item xs={6} md={4}>
          <div className="flex-column space-around full-height align-items-center">
            <Link to="/privacy_policy" className="flex align-items-center">Politique de vie privée</Link>
            <Link to="/terms_and_conditions" className="flex align-items-center">Conditions d'utilisation</Link>
          </div>
        </Grid>
        <Grid item xs={6} md={5}>
          <div className="flex-column space-around full-height align-items-center">

            <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/fr/app/karbon-scanner-écologique/id1411345032">
              <FontAwesomeIcon icon={faAppStore} style={{ marginRight: 6 }} />
              App Store
            </a>


            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.baptistemz.karbon">
              <FontAwesomeIcon icon={faGooglePlay} style={{ marginRight: 6 }} />
              Google Play Store
            </a>

          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="space-around full-height align-items-center">
            <a href="mailto:contact@karbon-app.com" className="icon-circle">
              <FontAwesomeIcon style={{ fontSize: "1.6rem", marginRight: 10 }} icon={faEnvelope} />
            </a>
            <a target="_blank" href="https://www.facebook.com/karbon.environnement" className="icon-circle">
              <FontAwesomeIcon style={{ fontSize: "1.6rem", marginRight: 10 }} icon={faFacebookF} />
            </a>
            <a target="_blank" href="https://www.instagram.com/karbon_fr" className="icon-circle">
              <FontAwesomeIcon style={{ fontSize: "1.6rem", marginRight: 10 }} icon={faInstagram} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/karbon-earth" className="icon-circle">
              <FontAwesomeIcon style={{ fontSize: "1.6rem", marginRight: 10 }} icon={faLinkedinIn} />
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export { Footer };
