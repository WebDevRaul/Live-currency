import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_currency, update_currency } from '../../redux/actions/convertor';
import { createStructuredSelector } from 'reselect';
import { select_from_base } from '../../redux/selectors/live';

import Convertor from '../../components/live/convertor/Convertor';
import SearchBar from '../../components/live/searchBar/SearchBar';
import SelectRate from '../../components/live/selectRate/SelectRate';
import TableRate from '../../components/live/tableRate/TableRate';

import StyledLive from './Styled_Live';


class Live extends Component {
  // Initial Fetch
  componentDidMount() {
    this.props.set_currency();
  };

  // Update Fetch
  componentDidUpdate(prevProps, prevState) {
    const { from_base, update_currency } = this.props;
    if(from_base !== prevProps.from_base && from_base !== 'GBP') update_currency(from_base);
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
};

Live.propTypes = {
  set_currency: PropTypes.func.isRequired,
  update_currency: PropTypes.func.isRequired,
  from_base: PropTypes.string.isRequired
}

const mapStateToProps = createStructuredSelector({
  from_base: select_from_base
})

export default connect( mapStateToProps, { set_currency, update_currency } )(Live);