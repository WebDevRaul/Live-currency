import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Components
import Live_Currency from './components/live/Live_Currency';
import About from './pages/about/About';
import Live from './pages/live/Live';

//Layout
import Landing from './components/layout/Landing';
import Navbar from './layout/navbar/Navbar';
import Footer from './layout/footer/Footer';

//Css
import './components/css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='wrapper'>
          <Switch>
            <Route  exact path='/' component={Landing} />
            <Router>
              <div className='container'>
                <Navbar />
                <Route  exact path='/live_currency' component={Live_Currency} />
                <Route  exact path='/about' component={About} />
                <Route  exact path='/live' component={Live} />
                <Footer />
              </div>
            </Router>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
