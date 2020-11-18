import React from 'react'
import { Footer, NavBar } from '../components';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import urlMetadata from 'url-metadata';
import { Button, MetaTags } from '../common';

const JOBS = [
  {
    name: "Ingénieur agronome - Chef de projet affichage environnemental ",
    url: "https://jobs.makesense.org/jobs/MME3uEC08UiG86cf4Jne",
    contract: "CDI"
  },
  {
    name: "Marketing manager",
    url: "https://jobs.makesense.org/jobs/BpBHYHu4qlKIDct6sORA",
    contract: "CDI / Alternance"
  },
  {
    name: "Lead dev back-end",
    url: "https://jobs.makesense.org/jobs/7Wom0qzouKC7H5Xf5KnQ",
    contract: "CDI"
  },
  {
    name: "Développeur web front-end & React Native",
    url: "https://jobs.makesense.org/jobs/KZehBDJpcuRocqqQzoyA",
    contract: "CDI"
  }
]

const Jobs = () => (
  <div className="jobs-page">
    <MetaTags
      metaData={{
        title: "Rejoignez l'équipe Karbon",
        description: 'Développeurs, ingénieurs agro, responsables marketing... Nous cherchons des pionniers prêts à oeuvrer pour une information environnementale claire et indépendante',
        path: "/jobs"
      }}
    />
    <div className="top-light-background">
      <Container>
        <NavBar />
          <Grid container>
            <Grid item xs={12} sm={8}>
              <div id="jobs_title_container">
                <div>
                  <h1>
                    Rejoignez l'équipe Karbon
                  </h1>
                  <p className="text-secondary"><big>Nous cherchons des pionniers prêts à oeuvrer pour une information environnementale <span className="highlighted-text">claire</span> et <span className="highlighted-text">indépendante</span></big></p>
                </div>
              </div>
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={4}>
                <Card id="jobs_building_image_card">
                  <div>
                    <img src="/euratechnologies_picture.jpg" alt=""/>
                    <p>Nos bureaux se situent à Lille dans les batiments d'Euratechnologies. </p>
                    <p>Ses plus de 300 entreprises tech, 200 startups, labos, écoles, fablabs et investisseurs en font un ecosystème idéal pour le développement de Karbon.</p>
                  </div>
                </Card>
              </Grid>
            </Hidden>
          </Grid>
      </Container>
    </div>
    <div className="bottom-light-background">
      <Container>
        <h2 className="text-center">Consultez <span className="highlighted-text">nos offres</span></h2>
        <div className="job-list">
          <ul>
            {JOBS.map(job => (
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                <li>
                  <h4>{job.name}</h4>
                  <span>{job.contract}</span>
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className="spontaneous-application">
          <h2 className="text-center">Ou envoyez nous une <span className="highlighted-text">candidature spontanée</span></h2>
          <p className="margin-20">Si vous ne trouvez pas l'annonce qui vous correspond, pas de soucis. Nous sommes toujours en recherche de talents prêts à s'engager avec nous. Envoyez nous un message à l'adresse email <span className="highlighted-text">contact@karbon-app.com</span></p>
          <a href="mailto:contact@karbon-app.com" className="margin-20">
            <Button color="secondary">Envoyer un email</Button>
          </a>
        </div>
        <Hidden smUp>
          <div id="jobs_building_image_card">
              <img src="/euratechnologies_picture.jpg" alt=""/>
              <p className="text-center">Nos bureaux se situent à Lille dans les batiments d'Euratechnologies. </p>
              <p className="text-center">Ses plus de 300 entreprises tech, 200 startups, labos, écoles, fablabs et investisseurs en font un ecosystème idéal pour le développement de Karbon.</p>
          </div>
        </Hidden>
      </Container>

    </div>
    <Footer />
  </div>
);

export { Jobs };
