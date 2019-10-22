import styled from 'styled-components';
import { primaryColor } from '../../../index.scss';
import { portrait } from '../../../utils/devices';

const StyledTableRate = styled.section`
  .table-rate {
    min-height: 200px;
    .wrapper {
      min-height: 200px;
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
          .no-data {
            h5 {
              font-size: 1em;
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
          .no-data {
            h5 {
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