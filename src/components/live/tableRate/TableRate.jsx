import React from 'react';

import Today from './Today';
import DayBefore from './DayBefore';
import LastYear from './LastYear';

import StyledTableRate from './Styled_TableRate';

const TableRate = () => (
  <StyledTableRate>
    <div className='table-rate'>
      <div className='row no-gutters'>
        <div className='col-4'><Today /></div>
        <div className='col-4'><DayBefore /></div>
        <div className='col-4'><LastYear /></div>
      </div>
    </div>
  </StyledTableRate>
);

export default TableRate;