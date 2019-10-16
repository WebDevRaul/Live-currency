import styled from 'styled-components';
import { primaryColor, mainWhite, mainTransition, secondaryColor } from '../../../index.scss';


const StyledSearchBar = styled.section`
  .search-bar {
    display: flex;
    justify-content: center;
    min-height: 58px;

    form {
      position: relative;
      .search-input {
        z-index: -1;
        border: none;
        border-bottom: 0.5px solid;
        width: 220px;
        margin-top: 10px;
        font-size: 1.3rem;
        padding-right: 10px;

        &:focus {
          outline: none;
        }
      }
      .info {
        position: absolute;
        bottom: 25px;
        right: 5px;
        z-index: 20;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .error {
      input {
        border-bottom-color: ${secondaryColor};
        &::placeholder {
          color: ${secondaryColor};
          font-size: 1rem;
        }
      }
    }

    .custom-button {
      position: relative;
      background-color: ${mainWhite};
      color: ${primaryColor};
      min-width: 0;
      font-size: 1.1rem;
      padding: 0px !important;

      &:hover {
        border: none;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 5px;
        right: 0px;
        width: 100%;
        height: 1px;
        z-index: 20;
        background-color: ${primaryColor};
        transform: ${props => props.click ? 'scaleX(1)' : 'scaleX(0)'};
        transform-origin: left;
        transition: transform .3s;
      }
    }
    
    .submit {
      margin: 0 20px;
      transition: ${mainTransition};
      text-shadow: ${props => props.click ? '0.1px 0.1px 0.1px' : '5px 5px 5px'}${primaryColor}; 
    }
  }
`

export default StyledSearchBar;