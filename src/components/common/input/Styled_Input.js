import styled from 'styled-components';
import { primaryColor, secondaryColor, mainBorderRadius, mainWhite } from '../../../index.scss';

const StyledInput = styled.div`
  .group {
    position: relative;
    margin: 10px 0;

    .form-input {
      display: block;
      height: 42px;
      padding: 5px 0 5px 15px;
      margin: 5px;
      width: 250px;
      font-size: 18px;
      color: ${primaryColor};
      background-color: ${mainWhite};
      border: 1px solid ${primaryColor};
      border-radius: ${mainBorderRadius};

      &::placeholder {
        color: ${primaryColor};
      }

      &:focus {
        outline: none;
      }
    }

    .validate {
      border-color: ${secondaryColor};
    }
  }
`

export default StyledInput;