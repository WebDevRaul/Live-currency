import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_convertor, update_convertor } from '../../redux/actions/convertor';
import { set_rates, update_rates, set_lastYear, update_lastYear } from '../../redux/actions/rates';
import { createStructuredSelector } from 'reselect';
import { select_C_from_base, select_date } from '../../redux/selectors/convertor';
import { select_R_from_base, select_date_today, select_date_lastYear } from '../../redux/selectors/rates';

import Convertor from '../../components/live/convertor/Convertor';
import SearchBar from '../../components/live/searchBar/SearchBar';
import SelectRate from '../../components/live/selectRate/SelectRate';
import TableRate from '../../components/live/tableRate/TableRate';

import StyledLive from './Styled_Live';


class Live extends Component {
  componentDidMount() {
    const { convertorDate, rateDate, lastYearDate } = this.props;
    // Set Convertor 
    if(!(convertorDate.length > 1)) this.props.set_convertor();
    // Set Rates
    if(!(rateDate.length > 1)) this.props.set_rates();
    // Set Last Year
    if(!(lastYearDate.length > 1)) this.props.set_lastYear();
  };

  componentDidUpdate(prevProps, prevState) {
    const { convertor, update_convertor, rates, update_rates, update_lastYear } = this.props;
    // Update Convertor
    if(convertor !== prevProps.convertor) update_convertor(convertor);
    // Update Rates
    if(rates !== prevProps.rates) update_rates(rates);
    // Update Last Year
    if(rates !== prevProps.rates) update_lastYear(rates);
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
            <div className='col-12 col-md-6'>
              <SelectRate />
            </div>
            <div className='col-12 col-md-6'>
              <SearchBar />
            </div>
          </div>
          <div className='row no-gutters test'>
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
  convertor: PropTypes.string.isRequired,
  rates: PropTypes.string.isRequired,
  set_convertor: PropTypes.func.isRequired,
  update_convertor: PropTypes.func.isRequired,
  set_rates: PropTypes.func.isRequired,
  update_rates: PropTypes.func.isRequired,
  set_lastYear: PropTypes.func.isRequired,
  update_lastYear: PropTypes.func.isRequired,
  rateDate: PropTypes.string.isRequired,
  lastYearDate: PropTypes.string.isRequired,
  convertorDate: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  convertor: select_C_from_base,
  rates: select_R_from_base,
  rateDate: select_date_today,
  lastYearDate: select_date_lastYear,
  convertorDate: select_date
});

export default connect( mapStateToProps, { set_convertor, update_convertor, set_rates, update_rates, set_lastYear, update_lastYear } )(Live);