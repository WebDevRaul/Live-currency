import styled from 'styled-components';
import { primaryColor } from '../../../index.scss';
import { portrait } from '../../../utils/devices';

const StyledTableRate = styled.section`
  .table-rate {
    min-height: 250px;
    .wrapper {
      min-height: 250px;
      display: flex;
      flex-direction: column;

      span {
        margin: 10px auto 20px;
        font-size: 1.4em;
      }
      .data {
        display: flex;
        flex-direction: column;
        margin: auto;

        .rate {
          display: flex;
          margin: 0 auto;
          font-size: 1.2em;
          p {
            &:nth-child(1) {
              margin-right: 5px;
            }
            
            &:nth-child(2) {
              color: ${primaryColor};
            }
          }
        }
      }
      .no-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h5 {
          margin: 0px;
          text-transform: uppercase;
          text-align: center;
        }
      }
    }
    .loading {
      min-height: 250px;
      width: 50%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      .wrapper {
        display: flex;
        flex-direction: column;
        span {
          height: 30px;
          margin: 10px 0 20px 0;
        }
        .div-rate {
          margin: 10px;
          p {
            height: 26px;
          }
        }
        p, span {
          animation-duration: 1.25s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeHolderShimmer;
          animation-timing-function: linear;
          background: #F6F6F6;
          background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);
          background-size: 800px 104px;
          position: relative;
        }
      }
    }
  }

  @keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
  }

  @media ${portrait.tablet} {
    .table-rate {
      .wrapper {
        span {
          font-size: 1.2em;
        }
        .data {
          .rate {
            p {
              font-size: .9em;
            }
          }
        }
      }
    }
  }
  @media ${portrait.mobileL} {
    .table-rate {
      .wrapper {
        span {
          font-size: 1.1em;
        }
        .data {
          .rate {
            p {
              font-size: .8em;
            }
          }
        }
      }
    }
  }
  @media ${portrait.mobileM} {
    .table-rate {
      .wrapper {
        span {
          font-size: .9em;
        }
        .data {
          .rate {
            p {
              font-size: .6em;
              &:nth-child(1) {
                margin-right: 3px;
              }
            }
          }
        }
      }
    }
  }
`

export default StyledTableRate;