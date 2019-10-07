import React, { Component } from 'react';

import Date from './date/Date';
import Base from './base/Base';

import StyledConvertor from './Styled_Convertor';

class Convertor extends Component {
  render() {
    return (
      <StyledConvertor>
        <div className='convertor'>
          <div className='row no-gutters'>
            <div className='col col-md-5'>
              <div className='date text-center'>
                <Date />
              </div>
              <div className='base text-center'>
                <Base />
              </div>
            </div>
            <div className='col col-md-7'>
              
            </div>
          </div>
        </div>
      </StyledConvertor>
    )
  }
}

export default Convertor;