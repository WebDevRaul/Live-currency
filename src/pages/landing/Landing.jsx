import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { set_convertor } from '../../redux/actions/convertor';
import { set_rates, set_lastYear } from '../../redux/actions/rates';
import { createStructuredSelector } from 'reselect';
import { select_date } from '../../redux/selectors/convertor';
import { select_date_today, select_date_lastYear } from '../../redux/selectors/rates';
import CustomButton from '../../components/common/button/CustomButton';
import InfoText from '../../components/landing/InfoText';

import StyledLanding from './Styled_Landing';

class Landing extends Component {

  componentDidMount() {
    const { convertorDate, rateDate, lastYearDate } = this.props;
    // Set Convertor 
    if(!(convertorDate.length > 1)) this.props.set_convertor();
    // Set Rates
    if(!(rateDate.length > 1)) this.props.set_rates();
    // Set Last Year
    if(!(lastYearDate.length > 1)) this.props.set_lastYear();
  };

  onClick = () => {
    this.props.history.push('/live');
  };
  render() {
    return (
      <StyledLanding>
        <div className='landing'>
          <div className='background'></div>
          <InfoText />
          <div className='continue'>
            <CustomButton value='continue' isClass='' onClick={this.onClick} isLoading={false}/>
          </div>
        </div>
      </StyledLanding>
    )
  }
}

Landing.propTypes = {
  history: PropTypes.object.isRequired,
  set_convertor: PropTypes.func.isRequired,
  set_rates: PropTypes.func.isRequired,
  set_lastYear: PropTypes.func.isRequired,
  convertorDate: PropTypes.string.isRequired,
  rateDate: PropTypes.string.isRequired,
  lastYearDate: PropTypes.string.isRequired
}

const mapStateToProps = createStructuredSelector({
  convertorDate: select_date,
  rateDate: select_date_today,
  lastYearDate: select_date_lastYear
});

export default connect(mapStateToProps, { set_convertor, set_rates, set_lastYear })(withRouter(Landing));