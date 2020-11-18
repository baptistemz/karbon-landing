import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const ScoreSection = ({ grade }) => (
  <Grid container>
    <Grid md={7}>
      <h2 className="text-white">Karbon vous propose le premier score <span className="text-success">100% écologique</span></h2>
      {
        // <p className="text-white">Lorem ipsum tatati tatata. Lorem ipsum tatati tatata. Lorem ipsum tatati tatata. Lorem ipsum tatati tatata</p>
      }
    </Grid>
    <Grid
      style={{ margin: 'auto' }}
      md={5}
    >
      <div id="grade_section">
        <Card>
          <div className="grade-visual">
            <img src="/karbon-icon.webp" alt=""/>
            <span className={grade > 66 ? "text-success" : (grade > 33 ? "text-warning" : "text-danger")}>
              <big>{grade}</big>/100
            </span>
          </div>
        </Card>
      </div>
    </Grid>
    <Grid xs={12}>
      <div className="score-icons">
        <div className="score-icon-grp">
          <img src="carbon-footprint-icon.png" alt=""/>
          <p className="text-white text-center">Empreinte carbone</p>
        </div>
        <div className="score-icon-grp">
          <img src="recyclability-icon.png" alt=""/>
          <p className="text-white text-center">Emballages</p>
        </div>
        <div className="score-icon-grp">
          <img src="deforestation-icon.png" alt=""/>
          <p className="text-white text-center">Déforestation</p>
        </div>
        <div className="score-icon-grp">
          <img src="ocean-respect-icon.png" alt=""/>
          <p className="text-white text-center">Respect des Océans</p>
        </div>
        <div className="score-icon-grp">
          <img src="ecolabel-icon.png" alt=""/>
          <p className="text-white text-center">Écolabels</p>
        </div>
      </div>
    </Grid>
  </Grid>
);

export { ScoreSection };
