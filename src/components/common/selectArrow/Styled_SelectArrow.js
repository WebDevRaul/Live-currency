import styled from 'styled-components';
import { primaryColor } from '../../../index.scss';
import { portrait } from '../../../utils/devices';

const StyledSelectArrow = styled.div`
  margin: auto 0;
  padding-top: 4px;
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
      transform: ${({ rotate }) => rotate ? 'rotate(-45deg)' : 'rotate(45deg)'}
    }
    .right-up {
      right: 0;
      transform: ${({ rotate }) => rotate ? 'rotate(45deg)' : 'rotate(-45deg)'}
    }
  }

  @media ${portrait.mobileM} {
    .arrow {
      width: 12px;
      span {
        width: 7px
      }
    }
  }
`

export default StyledSelectArrow;