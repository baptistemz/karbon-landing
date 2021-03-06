import React, { useState } from 'react';
import {
  TitleSection,
  CrowdfundingCard,
  ScoreSection,
  PartnersSection,
  ProductListSection,
  MediaSection
} from '../components/Home';
import { Footer, NavBar } from '../components';
import Container from '@material-ui/core/Container';


// const SECTIONS = [
//   {
//     name: "features",
//     label: "Fonctionnalités",
//     icon: faBarcode,
//     steps: [
//       {
//         text: (<span>Scannez le code barre de votre produit alimentaire ou ajoutez-le manuellement dans l'application.</span>),
//       },
//       {
//         text: (<span>Karbon vous donne la <b>note environnementale</b> de votre produit ainsi qu'une estimation de son <b>empreinte carbonne</b>.</span>),
//       },
//       {
//         text: (<span>Consultez les <b>produits alternatifs</b> que Karbon vous propose si la note est trop basse</span>),
//       },
//     ]
//
//   },
//   // {
//   //   name: "rating",
//   //   label: "Évaluation",
//   //   icon: faStarHalfAlt,
//   //   mainText: "Lorem Ipsum loremmmmmm ipszejdhbzjed lzedhzalkmzd azledh azelxvz ",
//   //   steps: [
//   //     {
//   //       text: (<span>Des icônes vous aident à detecter les enjeux environnementaux du produit.</span>),
//   //     },
//   //     {
//   //       text: (<span>L'estimation donnée par Karbon est celle d'une empreinte carbonne <b>"sortie du magasin"</b>(France uniquement). Elle tient compte <b>des ingrédients</b>, <b>des emballages</b>, <b>du transport</b>, <b>de la saisonnalité</b> et <b>des processus de transformation</b> du produit. <br/></span>),
//   //     },
//   //     {
//   //       text: (<span>La "note Karbon" est une note environnementale basée sur <b>l'estimation d'empreinte carbone</b>, mais aussi d'autres éléménts comme un potentiel <b>lien avec la déforestation</b>, <b>les labels</b>, <b>les emballages</b>.</span>),
//   //     }
//   //   ]
//   //
//   // },
//   {
//     name: "community",
//     label: "Communauté",
//     icon: faUsers,
//     mainText: "Lorem Ipsum loremmmmmm ipszejdhbzjed lzedhzalkmzd azledh azelxvz ",
//     steps: [
//       {
//         text: <span>{"Contribuez ! Spécifiez la catégorie du produit, ses emballages, ou même prenez une photo si le produit n'en a pas encore."}</span>,
//       },
//       {
//         text: <span>Cummulez les empreintes de vos produits, adaptez votre consommation.</span>,
//       },
//     ]
//   }
// ]
//
// const anchorEl = withState("anchorEl", "setAnchorEl", null);
//
// const sectionNumber = withState("sectionNumber", "setSectionNumber", 0);
//
// const step = withState("step", "setStep", 0);
//
// const scrollingTo = withState("scrollingTo", "setScrollingTo", 0);
//
// const countdown = withState("countdown", "setCountdown", null);
//
//
// const sectionHandlers = withHandlers({
//   goToSection: ({ setSectionNumber, setStep, setScrollingTo, countdown }) => (number, stepNumber = 0) => {
//     setStep(stepNumber);
//     setSectionNumber(number);
//     clearTimeout(countdown);
//     setScrollingTo(0);
//   }
// });
//
// const stepHandlers = withHandlers({
//   scrollInSteps: ({ sectionNumber, setStep, setScrollingTo, scrollingTo, setCountdown, goToSection }) => (step) => {
//     if(scrollingTo === step){
//       const maxSteps = SECTIONS[sectionNumber].steps.length;
//       const nextStep = (step + 1) < maxSteps ? (step + 1) : 0
//       setScrollingTo(nextStep)
//       if((step + 1) < maxSteps){
//         setCountdown(setTimeout(() => setStep(step + 1), 10000));
//       }else{
//         const nextSection = SECTIONS.length > sectionNumber + 1 ? sectionNumber + 1 : 0
//         setCountdown(setTimeout(() => goToSection(nextSection), 10000));
//       }
//     }
//
//   },
//   goToStep: ({ countdown, setStep, setScrollingTo, sectionNumber, goToSection }) => (number) => {
//     if(SECTIONS[sectionNumber].steps.length === number){
//       const nextSection = SECTIONS.length > sectionNumber + 1 ? sectionNumber + 1 : 0
//       goToSection(nextSection);
//     }else if (number < 0){
//       const previousSection = sectionNumber === 0 ? SECTIONS.length - 1 : sectionNumber - 1
//       const stepNumber = SECTIONS[previousSection].steps.length - 1
//       goToSection(previousSection, stepNumber );
//     }else{
//       clearTimeout(countdown);
//       setStep(number);
//       setScrollingTo(number);
//     }
//   },
//   scrollTo: () => (hash) => {
//     const elem = document.getElementById(hash.replace("#", ""));
//     elem && elem.scrollIntoView({ block: 'start',  behavior: 'smooth' });
//   }
// })
let Home = ({ anchorEl, setAnchorEl, sectionNumber, goToSection, scrollInSteps, step, goToStep, scrollTo }) => {
  const [grade, setGrade] = useState(0);
  const listenToScroll = () => {
    const newGrade = Math.round((document.documentElement.scrollTop/7) - 48).clamp(0, 100);
    const gradeString = newGrade > 10 ? " " + newGrade.toString() : newGrade.toString()
    setGrade(gradeString);
  }
  window.addEventListener('scroll', listenToScroll)
  return (
    <div class="scroll-container">
        <div id="background_1">
          <Container>
            <NavBar />
            <TitleSection />
          </Container>
        </div>
        <div id="background_2">
          <Container>
            <ScoreSection grade={grade} />
          </Container>
        </div>
        <div id="background_3">
          <Container>
            <h2>Découvrez l'empreinte carbone de plus <span className="highlighted-text">d'1 million</span> de produits</h2>
            <ProductListSection/>
            <h2>Nos sources de données</h2>
            <PartnersSection />
            <h2>Ils parlent de <span className="highlighted-text">nous</span></h2>
            <MediaSection />
          </Container>
        </div>
      <Footer />
      {
        // <HomeTitle scrollTo={scrollTo} />
        // <div id="home_mockup_section">
        //   <Grid item xs={12}>
        //     <h3 className="section-title">Scanner d'empreinte carbone</h3>
        //   </Grid>
        //   <div id="mockup_section_card">
        //     <Hidden mdUp>
        //       <MobileHomeMockup
        //         goToStep={goToStep}
        //         goToSection={goToSection}
        //         maxSteps={SECTIONS[sectionNumber]["steps"].length}
        //         step={step}
        //         sections={SECTIONS}
        //         sectionNumber={sectionNumber}
        //         sectionName={SECTIONS[sectionNumber]["name"]}
        //         />
        //     </Hidden>
        //     <Hidden smDown>
        //       <HomeMockup
        //         goToStep={goToStep}
        //         goToSection={goToSection}
        //         maxSteps={SECTIONS[sectionNumber]["steps"].length}
        //         step={step}
        //         sections={SECTIONS}
        //         sectionNumber={sectionNumber}
        //         sectionName={SECTIONS[sectionNumber]["name"]}
        //         />
        //     </Hidden>
        //   </div>
        //   <div className="down-btn-container">
        //     <div onClick={() => scrollTo("#home_blog_section")} className="down-btn text-secondary">
        //       <FontAwesomeIcon icon={faChevronCircleDown} />
        //     </div>
        //   </div>
        // </div>
        // <div id="home_blog_section">
        //   <BlogPosts/>
        //   <div className="down-btn-container">
        //     <div onClick={() => scrollTo("#home_download_section")} className="down-btn white-text">
        //       <FontAwesomeIcon icon={faChevronCircleDown} />
        //     </div>
        //   </div>
        // </div>
        // <div id="home_download_section">
        //   <Grid container spacing={40} style={{margin: "0 10vw", width: "80vw"}}>
        //
        //     <Grid item xs={12}>
        //       <h3 className="section-title">Télécharger l'application</h3>
        //       <p className="margin-auto text-center" style={{ width: "50vw" }}>L'application Karbon désormais disponible sur iOS et sur Android. Téléchargez-la sur votre mobile et scannez tout ce qui se mange</p>
        //     </Grid>
        //
        //     <Grid item xs={12} sm={6}>
        //       <Hidden xsDown>
        //         <a className="flex-column align-items-center download-link" target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/fr/app/karbon-scanner-écologique/id1411345032">
        //           <IconButton style={{ fontSize: "3rem", backgroundColor: "transparent" }}>
        //             <FontAwesomeIcon icon={faApple} style={{ marginBottom: 30 }} />
        //           </IconButton>
        //           <Button  variant="outlined" color="secondary">
        //             <FontAwesomeIcon style={{ marginRight: 10, fontSize: 28, height: 28 }} icon={faAppStore} />
        //             Télécharger sur iOS
        //           </Button>
        //         </a>
        //       </Hidden>
        //       <Hidden smUp>
        //         <div className="text-center">
        //           <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/fr/app/karbon-scanner-écologique/id1411345032">
        //             <Button size="large" color="secondary">
        //               <FontAwesomeIcon style={{ marginRight: 10, fontSize: 28, height: 28 }} icon={faAppStore} />
        //               Télécharger sur iOS
        //             </Button>
        //           </a>
        //         </div>
        //       </Hidden>
        //     </Grid>
        //
        //     <Grid item xs={12} sm={6}>
        //       <Hidden xsDown>
        //         <a className="flex-column align-items-center download-link" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.baptistemz.karbon">
        //           <IconButton style={{ fontSize: "3rem", backgroundColor: "transparent" }}>
        //             <FontAwesomeIcon icon={faAndroid} style={{ marginBottom: 30 }} />
        //           </IconButton>
        //           <Button  variant="outlined" color="secondary">
        //             <FontAwesomeIcon style={{ marginRight: 10, fontSize: 22, height: 28 }} icon={faGooglePlay} />
        //             Télécharger sur Android
        //           </Button>
        //         </a>
        //       </Hidden>
        //       <Hidden smUp>
        //         <div className="text-center" color="secondary">
        //           <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.baptistemz.karbon">
        //             <Button size="large" color="default">
        //               <FontAwesomeIcon style={{ marginRight: 10, fontSize: 22, height: 28 }} icon={faGooglePlay} />
        //               Télécharger sur Android
        //             </Button>
        //           </a>
        //         </div>
        //       </Hidden>
        //     </Grid>
        //     <div className="down-btn-container">
        //       <div onClick={() => scrollTo("#home_partners_section")} className="down-btn white-text">
        //         <FontAwesomeIcon icon={faChevronCircleDown} />
        //       </div>
        //     </div>
        //   </Grid>
        // </div>
        // <div id="home_partners_section">
        //   <Grid container spacing={40} style={{margin: "0 10vw", width: "80vw"}}>
        //
        //     <Grid item xs={12}>
        //       <h3 className="section-title">Partenaires</h3>
        //       {
        //         // <p className="margin-auto text-center" style={{ width: "50vw" }}>Sans eux, rien ne serait possible</p>
        //       }
        //     </Grid>
        //
        //   </Grid>
        //   <div className="partners-banner">
        //     <div className="partner-img-container">
        //       <a href="https://www.ademe.fr/" target="_blank" rel="noopener noreferrer">
        //         <img src="/logo-ademe.png" alt="ademe"/>
        //       </a>
        //     </div>
        //     <div className="partner-img-container">
        //       <a href="https://world.openfoodfacts.org/" target="_blank" rel="noopener noreferrer">
        //         <img src="/logo-openfoodfacts.png" alt="openfoodfacts"/>
        //       </a>
        //     </div>
        //     <div className="partner-img-container">
        //       <a href="https://www.euratechnologies.com/" target="_blank" rel="noopener noreferrer">
        //         <img src="/logo-euratechnologies.png" alt="euratechnologies"/>
        //       </a>
        //     </div>
        //   </div>
        // </div>
      }
    </div>
  );
}

export { Home };
