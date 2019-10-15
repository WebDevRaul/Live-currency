import styled from 'styled-components';
import { primaryColor } from '../../../index.scss';

const StyledTableRate = styled.section`
  .table-rate {
    margin-bottom: 50px;
    span {
      display: flex;
      justify-content: center;
      font-size: 1.4rem;
      margin: 10px 0 20px;
    }

    .data {
      height: 100%;
      justify-content: center;
      align-items: center;

      .rate {
        display: flex;
        margin-left: calc((100% / 3.3) + 5px);
        font-size: 1.2rem;
        p {
          margin-right: 5px;
          
          &:nth-child(2) {
            color: ${primaryColor};
          }
        }
      }

      .no-data {
        height: 80%;
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
`

export default StyledTableRate;