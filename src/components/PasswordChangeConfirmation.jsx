import React, { Component } from 'react';
import { Button } from '../common/index';

class PasswordChangeConfirmation extends Component{
  render(){
    const { handleSubmit, errorMessages, location } = this.props;
    return (
      <div className="app-background">
        <div className="center-page-content">
          <div className="container">
            <div style={{
                marginBottom: "60px",
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}>
              <img style={{ marginTop: "100px", width: "255px",
                 height: "60px" }} className="margin-top-20" src="/karbon-logo.png" alt=""/>
            </div>
            <br />
            <div className="row">
              <div className="col s12 m8 l6 offset-m2 offset-l3">
                <div className="text-center">
                  <h3>C'est tout bon !</h3>
                  <br/>
                  <p>Votre mot de passe a bien été modifié. Rendez-vous dans l'application Karbon pour vous connecter avec votre nouveau mot de passe.</p>
                  <br/>
                  <a href={ (location.state && location.state.app_url) || "/"}>
                    <Button>
                      Ouvrir l'application
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePassword }, dispatch);
}

function mapStateToProps(state) {
  return { errorMessages: state.auth.errors}
}

export default PasswordChangeConfirmation;
