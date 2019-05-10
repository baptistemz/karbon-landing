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
          <Route path="/" component={Home}/>
          <Route path="/privacy_policy" component={PrivacyPolicy}/>
          <Route path="/terms_and_conditions" component={TermsAndConditions}/>
        </div>
      </Router>
    )
  }
}

export default Routes;
