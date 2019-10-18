import styled from 'styled-components';
import { primaryColor } from '../../index.scss';

const StyledNotFound = styled.div`
  .not-found {
    min-height: calc(100vh - 230px);
    display: flex;

    .wrapper {
      text-align: center;

      h1 {
        text-align: center;
        font-size: 10rem;
        color: ${primaryColor};
      }

      p {
        font-size: 1.4rem;
      }

      .link {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        button {
          letter-spacing: 3px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .not-found {
      .wrapper {
        padding: 0 10px;
        h1 {
          font-size: 6rem;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`

export default StyledNotFound;