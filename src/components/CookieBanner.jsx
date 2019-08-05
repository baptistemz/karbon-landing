import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

const CookieBanner = ({ cookies, location }) => {
  if(!cookies.get('accept_cookies') && location.pathname !== "/cookies_settings"){
    return(
      <div className="cookier-banner">
        <p className="text-secondary">
          Nous utilisons des cookies de mesure d’audience afin d'améliorer votre expérience. Acceptez-vous le dépôt et la lecture de ces cookies ?
        </p>
        <div className="button-group">
          <Link to="/cookies_settings">
            <Button variant="outlined" color="secondary">
              <FontAwesomeIcon style={{ marginRight: 10 }} icon={faSlidersH} />
              parametrer
            </Button>
          </Link>
          <a href="/" id="accept-cookies">
            <Button variant="contained" color="secondary" onClick={() => cookies.set('accept_cookies', true, { path: '/' })}>
              <FontAwesomeIcon style={{ marginRight: 10 }} icon={faCheckCircle} />
              Accepter
            </Button>
          </a>
        </div>
      </div>
    )
  }else{
    return <div/>
  }
}

export default withRouter(CookieBanner);
