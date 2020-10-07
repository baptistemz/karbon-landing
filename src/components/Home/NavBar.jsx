import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '../../common';

const NavBar = () => {
  return(
    <div id="navbar" className="space-around">
      <img src="/karbon-logo.png" alt="logo"/>
      <a target="_blank" href="https://www.kisskissbankbank.com/fr/projects/karbon-scanner-ecologique">
        <Button color="secondary">Contribuer</Button>
      </a>
    </div>
  )
}

export default NavBar;
