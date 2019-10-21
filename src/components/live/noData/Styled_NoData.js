import styled from 'styled-components';
import { primaryColor } from '../../../index.scss';
import { bootstrap, portrait } from '../../../utils/devices';

const StyledNoData = styled.section`
  .no-data {
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    p {
      margin: 0 3px;
      span {
        margin: 0 2px;
        color: ${primaryColor};
      }
    }
  }

  @media ${bootstrap.md} {
    .no-data {
      flex-direction: column;
      align-content: center;
      align-items: center;
    }
  }
  @media ${portrait.mobileL} {
    .no-data {
      p {
        span {
          font-size: .8em;
        }
      }
    }
  }
  @media ${portrait.mobileM} {
    .no-data {
      p {
        span {
          font-size: .7em;
        }
      }
    }
  }
`

export default StyledNoData;