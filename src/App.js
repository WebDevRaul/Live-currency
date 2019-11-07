import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './layout/navbar/Navbar';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Live from './pages/live/Live';
import Footer from './layout/footer/Footer';
import NotFound from './pages/notFound/NotFound';


class App extends Component {
  render() {
    return (
      <Router>
        <>
        <Route  exact path='/' component={Landing} />
          <div className='container'>
            <Route path='/(.+)' render={() => (
              <>
                <Navbar />
                  <Switch>
                  <Route  exact path='/about' component={About} />
                  <Route  exact path='/live' component={Live} />
                  <Route  path='*' component={NotFound} />
                  </Switch>
                <Footer />
              </>
            )} />
          </div>
        </>
      </Router>
    );
  }
}

export default App;