import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//Components
import LiveCurrency from './components/LiveCurrency';

//Layout
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='wrapper'>
          <Navbar />
            <Route  exact path='/' component={Landing} />
            <Route  exact path='/live-currency' component={LiveCurrency} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
