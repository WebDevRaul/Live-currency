import React from 'react';
import spiner from '../../img/spinner.gif'

export default () => {
  return (
      <img
        src={spiner}
        style={{width: '75px', margin:'auto', display: 'block'}}
        alt='Loading...'
      />
  );
};
