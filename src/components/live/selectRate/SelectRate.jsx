import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_from_base } from '../../../redux/actions/rates';
import { createStructuredSelector } from 'reselect';
import { select_R_from_base, select_keys } from '../../../redux/selectors/rates';

import StyledSelectRate from './Styled_SelectRate';
import CustomSelect from '../../common/select/CustomSelect';

const SelectRate = ({ from_base, arr, set_from_base }) => {
  return (
    <StyledSelectRate>
      <div className='select-rate'>
        <p>Change base Rate :</p>
        <form noValidate>
          <CustomSelect value={from_base} onChange={e => set_from_base(e.target.value)} arr={arr} />
        </form>
      </div>
    </StyledSelectRate>
  )
}

SelectRate.propTypes = {
  from_base: PropTypes.string.isRequired,
  arr: PropTypes.array.isRequired,
  set_from_base: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  from_base: select_R_from_base,
  arr: select_keys
});

export default connect(mapStateToProps, { set_from_base })(SelectRate);