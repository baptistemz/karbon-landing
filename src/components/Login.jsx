import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { loginUser, authError } from '../actions/index';
import { Input, Button } from '../common/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faAt, faLock } from '@fortawesome/free-solid-svg-icons'

const sanitize = (field) => {
  // REMOVES USELESS SPACES
  const sanitized_field = field ? field.trim() : '';
  return sanitized_field
}

class Login extends Component{
  componentWillMount(){
    this.props.authError({})
  }
  componentDidMount() {
    if(this.props.location.state
      && this.props.location.state.redirected){
        toastr.info("Veuillez vous connecter pour réaliser cette action")
    }
  }
  submit({ email, password }){
    const creds = { email: sanitize(email), password: sanitize(password) };
    this.props.loginUser(creds);
  }
  render(){
    const { handleSubmit, errorMessages } = this.props;
    return (
        <div className="app-background">
          <Link to={this.props.location.state ? this.props.location.state.from : "/"}>
            <FontAwesomeIcon className="back-icon" icon={faArrowLeft} />
          </Link>
          <div className="container">
            <div className="row">
              <div className="col s12 m10 l8 offset-m1 offset-l2">
                <div className="box-shadow padded-50-except-top">
                  <form onSubmit={handleSubmit(values => this.submit(values))}>
                    <div className="text-center padded-20">
                      <h1>Log in</h1>
                    </div>
                    <Input icon={<FontAwesomeIcon className="back-icon" icon={faAt} />}
                      name="email" label="email" type="email" />
                    <Input icon={<FontAwesomeIcon className="back-icon" icon={faLock} />}
                      name="password" label="password" type="password" />
                    <p className="red-text">{errorMessages.main ? errorMessages.main : ''}</p>
                    <div className="margin-top-20 margin-bottom-20">
                      <Button fullWidth={true} icon="lock_open" type="submit">Log in</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center margin-top-20 margin-bottom-20 text-20">
              <br/>
              <Link to='/password_forgotten'>Password forgotten</Link>
              <br/>
              <br/>
              <Link to={{ pathname: '/signup', state: { from: "/login" } }}>No account yet? Create one !</Link>
            </div>
          </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser, authError }, dispatch);
}

function mapStateToProps(state) {
  return { errorMessages: state.auth.errors}
}

export default reduxForm({
  form: 'login'
})(connect(mapStateToProps, mapDispatchToProps)(Login));
