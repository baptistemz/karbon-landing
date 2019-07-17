import React from 'react';
import { withState, withHandlers, pure, compose } from 'recompose';
import Hidden from '@material-ui/core/Hidden';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons'
import Button from '@material-ui/core/Button';

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

const ButtonsGroup = () => {
  return(
    <div className="download-btn-group">
      <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/fr/app/karbon-scanner-écologique/id1411345032">
        <Button variant="outlined" color="primary">
          <FontAwesomeIcon style={{ marginRight: 10, fontSize: "2.2rem", height: "2.2rem" }} icon={faAppStore} />
          App Store
        </Button>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.baptistemz.karbon">
        <Button variant="outlined" color="primary" className="overflow-hidden-button">
          <FontAwesomeIcon style={{ marginRight: 10, fontSize: "2.2rem", height: "2.2rem" }} icon={faGooglePlay} />
          Google Play Store
        </Button>
      </a>
    </div>
  )
}

let HomeTitle = ({ quote, startQuotes, setQuote, scrollTo, goToQuote }) => {
  // if(quote === null){
  //   setQuote(0)
  // }
  startQuotes()
  return(
    <div className="title-background">
      <div className="triangle"/>
      <img className="app-logo" src="/karbon-logo.png" alt=""/>
      <Hidden xsDown>
        <h1 id="home_title">
          <span>Mesurez l'impact </span>
          <br/>
          <span className="title-bottom">
            <span>de vos produits alimentaires</span>
            <ButtonsGroup/>
          </span>
        </h1>
      </Hidden>
      <Hidden smUp>
        <h1 id="home_title">
          <span>Mesurez </span>
          <br/>
          <span>l'impact de vos</span>
          <br/>
          <span className="title-bottom">
            <span>produits alimentaires</span>
            <ButtonsGroup/>
          </span>
        </h1>
      </Hidden>

        {

          // <h1 id="home_title"><span>Mieux consommer pour le climat</span></h1>
        }
        {

          // <div className="quote-container">
          //   {QUOTES.map((quoteElement, index) => (
          //     <div key={index} className="quote" style={{ opacity: index === quote ? 1 : 0 }}>
          //       <p className="text-center"><big><i>"{(quoteElement.text) || ""}"</i></big></p>
          //       <h3 className="text-right">{(quoteElement.source)|| ""}</h3>
          //     </div>
          //   ))}
          // </div>
          // <div className="space-between" style={{ width: "150px" }}>
          //   {QUOTES.map((quoteElement, index) => (
          //     <div key={index} onClick={() => goToQuote(index)} className={`step-dot ${index < quote + 1 ? "full" : "empty"}`} />
          //   ))}
          // </div>
        }
        {

          // <Hidden smDown>
          //   <div className="download-btn-group">
          //     <span>Télécharger l'appliocation :</span>
          //     <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/fr/app/karbon-scanner-écologique/id1411345032">
          //       <Button style={{ fontSize: "3rem", backgroundColor: "transparent" }}>
          //         <FontAwesomeIcon style={{ marginRight: 10, fontSize: 28, height: 28 }} icon={faAppStore} />
          //       </Button>
          //     </a>
          //     <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.baptistemz.karbon">
          //       <Button style={{ fontSize: "3rem", backgroundColor: "transparent" }}>
          //         <FontAwesomeIcon style={{ marginRight: 10, fontSize: 22, height: 28 }} icon={faGooglePlay} />
          //       </Button>
          //     </a>
          //   </div>
          // </Hidden>
        }
      <div onClick={() => scrollTo("#home_mockup_section")} className="down-btn text-secondary">
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
