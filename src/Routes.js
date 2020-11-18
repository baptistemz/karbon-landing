import React, { Component } from 'react'
import querystring from 'querystring';
import { withCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  Jobs,
  PrivacyPolicy,
  TermsAndConditions,
  CookiesSettings
} from './containers';
import Page404 from './components/404/Page404';
import { CookieBanner } from './components';

const deepLinkCall = (deeplinkingUrl) => {
    console.log("window.location 1", window.location)

    window.location = deeplinkingUrl;
    console.log("window.location 1", window.location)
    setTimeout("window.location = 'http://onelink.to/xauz9t';", 1000);
};

const changeProtocolAndRedirect = async(uri) => {
  try{
    window.location.href = window.location.href.replace('http','custom').replace('https','custom');
    deepLinkCall(uri);
  }catch(e){
    console.log('In error catch', e);
  }
}
class Routes extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/jobs" component={Jobs}/>
          <Route path="/privacy_policy" component={PrivacyPolicy}/>
          <Route path="/terms_and_conditions" component={TermsAndConditions}/>
          <Route path="/cookies_settings" component={() => <CookiesSettings cookies={this.props.cookies} />}/>
          {/* the /redirect route is used by deep links called from email clients. i.e. email confirmation*/}
          <Route path='/redirect' component={({ location }) => {
            const search = location.search.split("?")[1];
            const uri = querystring.decode(search).url;
            console.log("uri",uri)
            if(!uri.startsWith('http')){
              changeProtocolAndRedirect(uri);
            } else {
              window.location = uri;
            }
            return null;
          }}/>
          <Route component={Page404} />
        </Switch>
        <CookieBanner cookies={this.props.cookies} />
      </Router>
    )
  }
}

export default withCookies(Routes);
