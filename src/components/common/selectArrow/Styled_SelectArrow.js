import styled from 'styled-components';
import { primaryColor } from '../../../index.scss';

const StyledSelectArrow = styled.div`
  margin: auto 0;
  .arrow {
    display: flex;
    margin: auto;
    width: 18px;
    height: 20px;
    position: relative;
    span {
      position: absolute;
      bottom: 50%;
      width: 11px;
      height: 2px;
      background-color: ${primaryColor};

      transition: all .2s ease;
    }
    .left-up {
      left: 0;
      transform: ${props => props.rotate ? 'rotate(-45deg)' : 'rotate(45deg)'}
    }
    .right-up {
      right: 0;
      transform: ${props => props.rotate ? 'rotate(45deg)' : 'rotate(-45deg)'}
    }
  }
`

export default StyledSelectArrow;