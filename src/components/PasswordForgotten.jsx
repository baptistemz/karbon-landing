import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { sendPasswordResetEmail } from '../actions/index';
import { Input, Button } from '../common/index';

class PasswordForgotten extends Component{
  submit(values){
    this.props.sendPasswordResetEmail(values);
  }
  render(){
    const { handleSubmit, errorMessages } = this.props;
    return (
      <div className="app-background">
        <Link to="/login">
          <i className="white-text back-icon material-icons">arrow_back</i>
        </Link>
        <div className="center-page-content">
          <div className="container">
            <br />
            <div className="row">
              <div className="col s12 m8 l6 offset-m2 offset-l3">
                <form onSubmit={handleSubmit(values => this.submit(values))}>
                  <div className="text-center padded-20">
                    <h1>Password forgotten</h1>
                  </div>
                  <p>Give us your email address to create a new one.</p>
                  <Input icon="email" name="email" label="email" type="email" />
                  <p className="red-text">{errorMessages.main ? errorMessages.main : ''}</p>
                  <Button fullWidth={true} icon="mail_outline" type="submit">Confirmer</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendPasswordResetEmail }, dispatch);
}

function mapStateToProps(state) {
  return { errorMessages: state.auth.errors}
}

export default PasswordForgotten = reduxForm({
  form: 'password_forgotten'
})(connect(mapStateToProps, mapDispatchToProps)(PasswordForgotten));
