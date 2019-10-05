import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './layout/navbar/Navbar';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Live from './pages/live/Live';
import Footer from './layout/footer/Footer';

import './app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className='app'>
            <div className='container'>
              <Navbar />
              <Route  exact path='/' component={Landing} />
              <Route  exact path='/about' component={About} />
              <Route  exact path='/live' component={Live} />
              <Footer />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;