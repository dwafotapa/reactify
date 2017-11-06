import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NotFound from './components/Error/NotFound/NotFound';

const getHashParams = (hash) => {
  return hash.slice(1).split('&').reduce((params, item) => {
    const keyValue = item.split('=');
    params[keyValue[0]] = keyValue[1];
    return params;
  }, {});
}

const { hash } = window.location;
if (hash.includes('access_token')
&& hash.includes('token_type')
&& hash.includes('expires_in')) {
  const hashParams = getHashParams(hash);
  if (hashParams) {
    sessionStorage.accessToken = hashParams.access_token;
    sessionStorage.tokenType = hashParams.access_type;
    sessionStorage.expiresIn = hashParams.expires_in;
    window.location.hash = '#';
  }
}

class App extends Component {
  renderRoutes = () => {
    const { accessToken } = sessionStorage;
    if (accessToken) {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound}/>
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route component={NotFound}/>
        </Switch>
      );
    }
  }

  render() {
    return (
      <Layout>
        <Router>
          {this.renderRoutes()}
        </Router>
      </Layout>
    );
  }
}

export default App;