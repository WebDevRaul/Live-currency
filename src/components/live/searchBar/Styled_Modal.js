import styled from 'styled-components';
import { primaryColor, mainWhite, mainBorderRadius, mainSpacing } from '../../../index.scss';

const StyledModal = styled.div`
  .modal {
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5% 10%;
    z-index: 50;
    
    .inner-modal {
      position: relative;

      button{
        position: absolute;
        right: 0;
        background-color: ${primaryColor};
        color: ${mainWhite};
        font-size: 1.3rem;
        padding: 10px 20px;
        border: 1px solid ${primaryColor};
        border-radius: ${mainBorderRadius};
        letter-spacing: ${mainSpacing};

        &:hover {
          cursor: pointer;
          background-color: ${mainWhite};
          border: 1px solid ${primaryColor};
          color: ${primaryColor};
        }
      }
      .list {
        display: flex;
        flex-direction: column;
        background-color: grey;
      }
    }
  }
`

export default StyledModal;