import React from 'react';
import { Button } from '../../common/index';
import Card from '@material-ui/core/Card';

const CrowdfundingCard = () => (
  <Card id="kisskiss_card">
    <img src="/kisskissbankbank.png" alt=""/>
    <h4>Aidez-nous à améliorer le score Karbon sur <span className="highlighted-text">KisskissBankbank</span></h4>
    <div className="btn-container">
      <a target="_blank" href="https://www.kisskissbankbank.com/fr/projects/karbon-scanner-ecologique">
        <Button color="secondary">Nous soutenir</Button>
      </a>
    </div>
  </Card>
);

export default CrowdfundingCard;
