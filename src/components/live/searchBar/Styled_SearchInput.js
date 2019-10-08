import styled from 'styled-components';
import { primaryColor, mainWhite, mainTransition } from '../../../index.scss';


const StyledSearchInput = styled.section`
  display: flex;
  align-items: center;
    .search-input {
      z-index: -1;
      border: none;
      border-bottom: 0.5px solid;
      width: 220px;

      &:focus {
        outline: none;
      }
    }

    .custom-button {
      background-color: ${mainWhite};
      color: ${primaryColor};
      padding: 0px;
      min-width: 0;
      
      &:hover {
        border: none;
      }
    }
    
    .submit {
      margin: 0 20px;
      transition: ${mainTransition};
      text-shadow: ${props => props.click ? '0.1px 0.1px 0.1px' : '5px 5px 5px'}${primaryColor};
    }
`

export default StyledSearchInput;