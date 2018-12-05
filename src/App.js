import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Components
import Live_Currency from './components/live/Live_Currency';
import About from './components/layout/About';

//Layout
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
// import Test from './Test';

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
          <div>
            <Switch>
              <Route  exact path='/' component={Landing} />
              <Router>
                <div className='container'>
                  <Navbar />
                  <Route  exact path='/live_currency' component={Live_Currency} />
                  <Route  exact path='/about' component={About} />
                  <Footer />
                </div>
              </Router>
            </Switch>
          </div>
        </Router>
    </Provider>
    );
  }
}

export default App;
