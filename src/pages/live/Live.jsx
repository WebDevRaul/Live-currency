import React from 'react';

import Convertor from '../../components/live/convertor/Convertor';
import SearchBar from '../../components/live/searchBar/SearchBar';
import SelectRate from '../../components/live/selectRate/SelectRate';
import TableRate from '../../components/live/tableRate/TableRate';

import StyledLive from './Styled_Live';

const Live = () => {
  return (
    <StyledLive>
      <div className='live'>
        <div className='row no-gutters'>
          <div className='col'>
            <Convertor />
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col'>
            <SearchBar />
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col'>
            <SelectRate />
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col'>
            <TableRate />
          </div>
        </div>
      </div>
    </StyledLive>
  )
}

export default Live;