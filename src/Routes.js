import React, { Component } from 'react'
import { withCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Page404 from './components/404/Page404';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import CookieBanner from './components/CookieBanner';
import CookiesSettings from './components/CookiesSettings';

class Routes extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/privacy_policy" component={PrivacyPolicy}/>
          <Route path="/terms_and_conditions" component={TermsAndConditions}/>
          <Route path="/cookies_settings" component={() => <CookiesSettings cookies={this.props.cookies} />}/>
          <Route component={Page404} />
        </Switch>
        <CookieBanner cookies={this.props.cookies} />
      </Router>
    )
  }
}

export default withCookies(Routes);
