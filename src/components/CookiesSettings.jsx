import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const CookiesSettings = ({ cookies, location }) => {
  const [formCookies, setFormCookies] = useState({
    analytics: cookies.get('accept_cookies') === 'true'
  });
  const handleChange = name => event => {
    setFormCookies({ ...formCookies, [name]: event.target.checked });
  };
  return(
    <div>
      <div className="legacy-page">
        <h1>Parametrage des cookies</h1>
        <h2>Cookies utilisés sur les services Karbon</h2>
        <h3>Les cookies techniques</h3>
        <p>
          <FontAwesomeIcon icon={faSmile} />
          {" "}
          <i>L'application et le site Karbon n'utilisent à ce jour aucun cookie technique</i>
        </p>
        <h3>Les cookies de mesure d’audience</h3>
        <div className="setting">
          <div className="setting-text">
            <h4>Google Analytics</h4>
            <p>
              Afin d’analyser les visites de notre site internet nous utilisons Google Analytics.
              <br/>
              Ces statistiques de visites des pages du site nous sont fournies <b>de manière anonyme</b> : nous ne saurons jamais qui a "personnellement" visité une page
              <br/>
              Google <b>ne recoupera pas votre adresse IP</b> avec toute autre donnée détenue par Google.
            </p>
          </div>
          <div className="setting-switch">
            <Toggle
              defaultChecked={formCookies.analytics}
              aria-label='No label tag'
              onChange={handleChange('analytics')} />

          </div>
        </div>
        <div className="cookies-button-group">
          <Link to={(location.state && location.state.from) || "/"}>
            <Button variant="outlined" color="secondary">
              <FontAwesomeIcon style={{ marginRight: 10 }} icon={faChevronLeft} />
              Retour
            </Button>
          </Link>
          <a id="validate-cookies-settings" href={(location.state && location.state.from) || "/"} >
            <Button variant="outlined" color="secondary" onClick={() => {
                cookies.set('accept_cookies', formCookies.analytics, { path: '/' })
              }}>
              <FontAwesomeIcon style={{ marginRight: 10 }} icon={faCheckCircle} />
              Valider
            </Button>
          </a>
        </div>
      </div>
    </div>

  )
}


export default withRouter(CookiesSettings);
