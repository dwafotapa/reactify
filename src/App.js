import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;