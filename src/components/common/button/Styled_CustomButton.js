import styled from 'styled-components';
import { primaryColor, mainBorderRadius, mainWhite, mainSpacing } from '../../../index.scss';

const StyledButton = styled.div`
  .custom-button {
    display: flex;
    justify-content: center;
    width: auto;
    height: 50px;
    padding: 0 35px 0 35px;
    min-width: 125px;
    font-size: 14px;
    line-height: 50px;
    text-transform: uppercase;
    border: none;
    border-radius: ${mainBorderRadius};
    letter-spacing: ${mainSpacing};
    background-color: ${primaryColor};
    color: ${mainWhite};
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${mainWhite};
      color: ${primaryColor};
      border: 1px solid ${primaryColor};
    }

    &.inverted {
      background-color: ${mainWhite};
      color: ${primaryColor};
      border: 1px solid ${primaryColor};
      
      &:hover {
        background-color: ${primaryColor};
        color: ${mainWhite};
      }
    }
  }
`

export default StyledButton;