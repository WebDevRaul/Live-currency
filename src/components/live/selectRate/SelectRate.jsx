import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_from_base } from '../../../redux/actions/rates';
import { createStructuredSelector } from 'reselect';
import { select_R_from_base, select_keys, select_isLoading } from '../../../redux/selectors/rates';

import StyledSelectRate from './Styled_SelectRate';
import CustomSelect from '../../common/select/CustomSelect';
import SelectArrow from '../../common/selectArrow/SelectArrow';
import Loading from '../../common/loading/Loading';
  
class SelectRate extends Component {
  state = {
    arrow: false
  };
  outsideRef = React.createRef();

  static getDerivedStateFromProps(nextProps, prevState){
    const { from_base } = nextProps;
    if( from_base !== prevState.from_base ) return { from_base };
    else return null;
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  };

  componentDidUpdate(prevProps, prevState) {
    const { from_base, arrow } = this.state;
    if(from_base !== prevState.from_base) this.setState({ arrow: !arrow });
  };

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  };
  
  handleClickOutside = e => {
    const { current } = this.outsideRef;
    const { arrow } = this.state;
    if(current === null) return null;
    if(e.target.className !== 'custom-select' && arrow) this.setState({ arrow: !arrow });
    return null;
  };

  onClick = () => {
    const { arrow } = this.state;
    this.setState({ arrow: !arrow });
  }
  

  render() {
    const { arr, set_from_base, isLoading } = this.props;
    const { arrow, from_base } = this.state;
    return (
      <StyledSelectRate>
        <div className='select-rate'>
          <p>Change base Rate :</p>
          <form noValidate className='select-rate-form' ref={this.outsideRef} >
            {
              isLoading
              ? <Loading><><p /></></Loading>
              : <CustomSelect name='select' onClick={this.onClick} value={from_base} onChange={e => set_from_base(e.target.value)} arr={arr} />
            }
            <SelectArrow rotate={arrow} />
          </form>
        </div>
      </StyledSelectRate>
    )
  }
}


SelectRate.propTypes = {
  from_base: PropTypes.string.isRequired,
  arr: PropTypes.array,
  set_from_base: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  from_base: select_R_from_base,
  arr: select_keys,
  isLoading: select_isLoading
});

export default connect(mapStateToProps, { set_from_base })(SelectRate);