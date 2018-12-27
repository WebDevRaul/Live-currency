import React, { Component } from 'react';

//Css
import '../css/About.css';

export default class About extends Component {
  render() {
    return (
      <div className='about-Div'>
        <div className='row'>
          <div className='col'>
            <div className='about'>
              <p>This site provides information about the latest exchange rates of the most important currencies of the world <br /> All the data used here are from <a href='https://exchangeratesapi.io/' target='_blank' rel="noopener noreferrer">https://exchangeratesapi.io/</a></p>
            </div>
          </div>
        </div>
        <div className='about-Info'>
          <div className='row'>
            <div className='col'>
              <p>This Project was made with:</p>
              <ul>
                <li>React 16.6.3</li>
                <li>React-redux</li>
                <li>Axios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
