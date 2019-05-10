import React from 'react';
import { withState, withHandlers, pure, compose } from 'recompose';
import Hidden from '@material-ui/core/Hidden';
import { Button } from '../../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons'

const QUOTES = [
  { text: "Élevage, transports, engrais azotés s’additionnent pour produire au final trois fois plus d’émissions que les voitures particulières", source: "Conso Globe" },
  { text: "L’alimentation représente environ ⅓ des émissions de gaz à effet de serre des Français", source: "Réseau Action Climat" },
  { text: "À l’échelle d’une culture, les légumineuses permettent de réduire de 60 à 70 % les émissions de gaz à effet de serre.", source: "Réseau Action Climat" },
  { text: "La FAO estime que la production vivrière mondiale doit augmenter d’environ 60% d’ici 2050 pour nourrir une population plus nombreuse.", source: "FAO" },
  { text: "Un faible mangeur de viande (50 g par jour) émet 1,5 fois moins de gaz à effet de serre qu’un gros mangeur de viande (100 g par jour). Un végétarien émet près de 2 fois moins.", source: "Réseau Action Climat" },
  { text: "Notre sort est indissociable de celui de l'environnement. Arrêtons de nous croire au-dessus ou au dehors.", source: "Pierre Rabhi" }
]

const quote = withState("quote", "setQuote", 0);

const countdown = withState("countdown", "setCountdown", null);

const scrollingTo = withState("scrollingTo", "setScrollingTo", 0);

const handlers = withHandlers({
  startQuotes: ({ setQuote, quote, setCountdown, setScrollingTo, scrollingTo }) => () => {
    if(scrollingTo === quote){
      const maxQuotes = QUOTES.length;
      const nextQuote = (quote + 1) < maxQuotes ? (quote + 1) : 0
      setScrollingTo(nextQuote)
      setCountdown(setTimeout(() => setQuote(nextQuote), 10000));
    }
  },
  goToQuote: ({ setQuote, countdown, setScrollingTo }) => (number) => {
    clearTimeout(countdown);
    setQuote(number);
    setScrollingTo(number);
  },
});

let HomeTitle = ({ quote, startQuotes, setQuote, scrollTo, goToQuote }) => {
  // if(quote === null){
  //   setQuote(0)
  // }
  startQuotes()
  return(
    <div className="title-background">
      <img className="app-logo" src="/karbon-logo.png" alt=""/>
      <div className="title-overlay">
        <h1 id="home_title"><span>Le vrai impact de vos produits alimentaires</span></h1>
        {

          // <h1 id="home_title"><span>Mieux consommer pour le climat</span></h1>
        }
        <div className="quote-container">
          {QUOTES.map((quoteElement, index) => (
              <div key={index} className="quote" style={{ opacity: index === quote ? 1 : 0 }}>
                <p className="text-center"><big><i>"{(quoteElement.text) || ""}"</i></big></p>
                <h3 className="text-right">{(quoteElement.source)|| ""}</h3>
              </div>
          ))}
        </div>
        <div className="space-between" style={{ width: "150px" }}>
          {QUOTES.map((quoteElement, index) => (
            <div key={index} onClick={() => goToQuote(index)} className={`step-dot ${index < quote + 1 ? "full" : "empty"}`} />
          ))}
        </div>
        <Hidden mdUp>
          <div className="download-btn-group xs">
            <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/fr/app/karbon-scanner-écologique/id1411345032">
              <Button size="small" color="secondary">
                <FontAwesomeIcon style={{ marginRight: 10, fontSize: 28, height: 28 }} icon={faAppStore} />
                Télécharger
              </Button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.baptistemz.karbon">
              <Button size="small" color="secondary">
                <FontAwesomeIcon style={{ marginRight: 10, fontSize: 22, height: 28 }} icon={faGooglePlay} />
                Télécharger
              </Button>
            </a>
          </div>
        </Hidden>
        <Hidden smDown>
          <div className="download-btn-group">
            <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/fr/app/karbon-scanner-écologique/id1411345032">
              <Button size="large" color="secondary">
                <FontAwesomeIcon style={{ marginRight: 10, fontSize: 28, height: 28 }} icon={faAppStore} />
                Télécharger
              </Button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.baptistemz.karbon">
              <Button size="large" color="secondary">
                <FontAwesomeIcon style={{ marginRight: 10, fontSize: 22, height: 28 }} icon={faGooglePlay} />
                Télécharger
              </Button>
            </a>
          </div>
        </Hidden>
      </div>
      <div onClick={() => scrollTo("#home_mockup_section")} className="down-btn white-text">
        <FontAwesomeIcon icon={faChevronCircleDown} />
      </div>
    </div>
  )
}

HomeTitle = compose(
  quote,
  countdown,
  scrollingTo,
  handlers,
  pure
)(HomeTitle)

export default HomeTitle;
