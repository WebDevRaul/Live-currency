import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//Components
import LiveCurrency from './components/currency/LiveCurrency';

//Layout
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

//Css
import './components/css/App.css';

//Redux
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='container'>
            <Navbar />
              <Route  exact path='/' component={Landing} />
              <Route  exact path='/live-currency' component={LiveCurrency} />
            <Footer />
          </div>
        </Router>
    </Provider>
    );
  }
}

export default App;
