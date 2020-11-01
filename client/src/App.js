import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Landing from './layout/Landing';
import Background from './layout/Background';
import BreathingRhythm from './layout/BreathingRhythm';
import {Route, BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="main">
            <AppNavbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/background" component={Background} />
            <Route exact path="/rhythm" component={BreathingRhythm} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
