import React, { Component } from 'react';

import Date from './date/Date';
import Base from './base/Base';
import Form from './form/Form';

import StyledConvertor from './Styled_Convertor';

class Convertor extends Component {
  render() {
    return (
      <StyledConvertor>
        <div className='convertor'>
          <div className='row no-gutters'>
            <div className='col col-md-5 m-auto'>
              <div className='date'>
                <Date />
              </div>
              <div className='base'>
                <Base />
              </div>
            </div>
            <div className='col col-md-7 m-auto'>
              <div className='form'>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </StyledConvertor>
    )
  }
}

export default Convertor;