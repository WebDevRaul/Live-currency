import React from 'react';
import spiner from '../../img/Spinner-1s-74px.gif'

export default () => {
  return (
    <div>
      <img
        src={spiner}
        style={{width: '200px', margin:'auto', display: 'block'}}
        alt='Loading...'
      />
    </div>
  );
};
