import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Page404 from './components/404/Page404';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

class Routes extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/privacy_policy" component={PrivacyPolicy}/>
          <Route path="/terms_and_conditions" component={TermsAndConditions}/>
          <Route component={Page404} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
