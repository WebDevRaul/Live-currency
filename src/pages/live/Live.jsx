import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_convertor, update_convertor } from '../../redux/actions/convertor';
import { set_rates, update_rates } from '../../redux/actions/rates';
import { createStructuredSelector } from 'reselect';
import { select_C_from_base } from '../../redux/selectors/convertor';
import { select_R_from_base } from '../../redux/selectors/rates';

import Convertor from '../../components/live/convertor/Convertor';
import SearchBar from '../../components/live/searchBar/SearchBar';
import SelectRate from '../../components/live/selectRate/SelectRate';
import TableRate from '../../components/live/tableRate/TableRate';

import StyledLive from './Styled_Live';


class Live extends Component {
  componentDidMount() {
    // Set Convertor
    this.props.set_convertor();
    // Set Rates
    this.props.set_rates();
  };

  componentDidUpdate(prevProps, prevState) {
    const { convertor, update_convertor, rates, update_rates } = this.props;
    // Update Convertor
    if(convertor !== prevProps.convertor && convertor !== 'GBP') update_convertor(convertor);
    // Update Rates
    if(rates !== prevProps.rates && rates !== 'GBP') update_rates(rates);
  }
  

  render() {
    return (
      <StyledLive>
        <div className='live'>
          <div className='row no-gutters'>
            <div className='col'>
              <Convertor />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col-12 col-sm-6'>
              <SelectRate />
            </div>
            <div className='col-12 col-sm-6'>
              <SearchBar />
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
};

Live.propTypes = {
  set_currency: PropTypes.func.isRequired,
  update_convertor: PropTypes.func.isRequired,
  convertor: PropTypes.string.isRequired,
  rates: PropTypes.string.isRequired
}

const mapStateToProps = createStructuredSelector({
  convertor: select_C_from_base,
  rates: select_R_from_base
})

export default connect( mapStateToProps, { set_convertor, update_convertor, set_rates, update_rates } )(Live);