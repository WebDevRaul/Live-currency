import React from 'react';
import PropTypes from 'prop-types';

import StyledLoading from './Styled_Loading';

const Loading = ({ children }) => (
  <StyledLoading>
    <div className='loading'>
      {children}
    </div>
  </StyledLoading>
);

Loading.propTypes = {
  children: PropTypes.object.isRequired
}

export default Loading;