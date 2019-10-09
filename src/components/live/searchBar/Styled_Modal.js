import styled from 'styled-components';
import { primaryColor, mainWhite, mainBorderRadius, mainSpacing } from '../../../index.scss';
import { device } from '../../../utils/devices';

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
    overflow-y: scroll;
    
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
        z-index: 20;

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
        padding: 60px 10px 10px 10px;
        border-radius: ${mainBorderRadius};

        .data {
          font-size: 1.3rem;
          margin: 10px;
          padding: 0 10px;
          background-color: ${mainWhite};
          border-radius: ${mainBorderRadius};

          p {
            height: 60px;
            display: flex;
            text-align: center;
            align-items: center;
            margin-bottom: 0px;
          }
          .country {
            margin-left: 10px;
          }
        }
      }
    }
  }

  @media ${device.mobileL} {
    .modal {
      .data {
        font-size: 0.7rem !important;
      }
    }
  }
  @media (max-width: 576px) {
    .modal {
      .data {
        p {
          height: 30px!important;
        }
        .country {
          margin-left: 0px !important;
        }
        .keep-height {
          height: 60px !important;
        }
      }
    }
  }
  @media ${device.tablet} {
    .modal {
      .data {
        font-size: 1rem !important;
      }
    }
  }
`

export default StyledModal;