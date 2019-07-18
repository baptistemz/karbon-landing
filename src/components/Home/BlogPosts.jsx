import React from 'react';
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const BlogPosts = () => {
  return(
      <div>
        <Card style={{ maxWidth: "60rem", padding: "2rem 5rem" }}>
          <h3 className="section-title white-text text-secondary no-padding">Les articles de Karbon</h3>
          <div id="medium-widget"></div>
          <div className="full-width text-right">
            <a target="_blank" href="https://medium.com/karbon-environnement"><big class="text-primary"><FontAwesomeIcon icon={faNewspaper} /> {" Toutes les publications"}</big></a>
          </div>
          <div class="three-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="full-width justify-center">
            <div className="flex-1 text-center justify-center flex-column" style={{
                backgroundColor: "rgba(44, 181, 145, 0.1)",
                borderRadius: 5,
                padding: 10,
                maxWidth: 280
              }}>
              <form action="https://karbon-app.us20.list-manage.com/subscribe/post?u=9e381c760b41d17fc8be0575f&amp;id=7a183d9d1d" onsubmit="this.submit(); this.reset(); return false;" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div className="align-items-end full-width">
                  <FontAwesomeIcon className="field-icon" icon={faEnvelope} />
                  <TextField
                    name="EMAIL"
                    id="mce-EMAIL"
                    className="flex-1"
                    label="email"
                    floatingLabelText="email"
                    type="email"
                    />
                </div>
                <br/>
                <Button fullWidth type="submit" size="small" color="primary" variant="outlined" block>
                  Recevoir la newsletter
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>

  )
}

export default BlogPosts;
