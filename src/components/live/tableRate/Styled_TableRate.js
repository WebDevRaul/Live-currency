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
  }

  /* @media ${portrait.tablet} {
    .table-rate {
      font-size: 0.8rem;
    }
  }
  @media ${portrait.mobileM} {
    .table-rate {
      font-size: 0.6rem;
    }
  } */
`

export default StyledTableRate;