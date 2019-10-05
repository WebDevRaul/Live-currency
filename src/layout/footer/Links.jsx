import React from 'react';
import socials from './utils/socials';

const Links = () => (
  <div className='links'>
    {
      socials.map(({ path, icon }, index) => (
        <span key={index}>
          <a href={path} target='_blank' rel="noopener noreferrer">
            <i className={icon}></i>
          </a>
        </span>
      ))
    }
  </div>
)

export default Links;