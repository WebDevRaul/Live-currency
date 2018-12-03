import React from 'react';
import spiner from '../../img/spinner.gif'

export default () => {
  return (
      <img
        src={spiner}
        style={{width: '200px', margin:'auto', display: 'block'}}
        alt='Loading...'
      />
  );
};
