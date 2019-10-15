import styled from 'styled-components';

const StyledTableRate = styled.section`
  .table-rate {
    span {
      display: flex;
      justify-content: center;
      font-size: 1.4rem;
      margin: 20px 0;
    }
    .rate {
      display: flex;
      margin-left: calc(100% / 3.3);
      font-size: 1.2rem;
    }
    .no-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h5 {
        margin: 0px;
        text-transform: uppercase;
      }
    }
  }
`

export default StyledTableRate;