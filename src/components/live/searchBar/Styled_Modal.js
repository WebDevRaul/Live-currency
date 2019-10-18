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

    &:hover {
      cursor: default !important;
    }
    
    .inner-modal {
      height: 100%;
      position: relative;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 10px;
        border-radius:10px;
      } 
      
      &::-webkit-scrollbar-thumb {
        background-color: ${primaryColor};
        border-radius:10px;
      }

      button {
        position: absolute;
        right: 10px;
        top: 10px;
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

          .flag, .country, .currency, .code {
            height: 60px;
            
            span, img {
              display: flex;
              align-items: center;
              height: 100%;
            }
          }
          .code {
            display: flex;
            justify-content: flex-end;
          }
        }
      }
    }
  }
  @media ${device.tablet} {
    .modal {
      .data {
        .flag, .country, .currency, .code {
          font-size: .9em !important;
        }
        .country, .currency {
          span {
            margin-left: 10px;
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    .modal {
      .data {
        .flag, .country {
          height: 30px !important;
        }
        .country {
          font-size: .5em !important;
        }
        .flag, .currency, .code {
          font-size: .7em !important;
        }
        span {
          margin: 0px !important;
        }
      }
    }
  }

  @media ${device.mobileL} {
    .modal {
      .data {
        .flag, .country {
          height: 30px !important;
        }
        .country {
          font-size: .4em !important;
        }
        .flag, .currency, .code {
          font-size: .5em !important;
        }
      }
    }
  }
`

export default StyledModal;