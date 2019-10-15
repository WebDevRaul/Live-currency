import React from 'react';
import { oldProject, newProject } from '../../components/about/utils/project';

import Project from '../../components/about/Project';

import StyledAbout from './Styled_About';

const About = () => (
  <StyledAbout>
    <div className='about'>
      <div className='row no-gutters'>
        <div className='col'>
          <div className='info'>
            <p>This site provides information about the latest exchange rates of the most important currencies of the world. <br /><br /> All the data used here are from <a href='https://exchangeratesapi.io' target='_blank' rel="noopener noreferrer">https://exchangeratesapi.io</a>.</p>
          </div>
        </div>
      </div>
      <div className='row no-gutters w-100'>
        <div className='col-12 col-sm-6'>
          <Project isClass='old' project={oldProject} title='This Project was made with:'/>
        </div>
        <div className='col-12 col-sm-6'>
          <Project isClass='new' project={newProject} title='Updated to:'/>
        </div>
      </div>
    </div>
  </StyledAbout>
);

export default About;