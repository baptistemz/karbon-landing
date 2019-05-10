import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

class Routes extends Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/privacy_policy" component={PrivacyPolicy}/>
          <Route exact path="/terms_and_conditions" component={TermsAndConditions}/>
        </div>
      </Router>
    )
  }
}

export default Routes;
