import styled from 'styled-components';
import { primaryColor } from '../../index.scss';
import { portrait, bootstrap, landscape } from '../../utils/devices';

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

  @media ${portrait.tabletL} {
    .not-found {
      min-height: calc(100vh - 235px) !important;
    }
  }

  @media ${bootstrap.md} {
    .not-found {
      min-height: calc(100vh - 310px);
      .wrapper {
        .link {
          justify-content: center;
        }
      }
    }
  }

  @media ${portrait.tablet} {
    .not-found {
      .wrapper {
        h1 {
          font-size: 8rem;
        }
      }
    }
  }

  @media ${portrait.mobileL} {
    .not-found {
      .wrapper {
        padding: 0 10px;
        h1 {
          font-size: 6rem;
        }
        p {
          font-size: 1.2rem;
        }
        .link {
          justify-content: center;
        }
      }
    }
  }

  @media ${landscape.mobileM} {
    .not-found {
      .wrapper {
        padding-bottom: 20px;
        h1 {
          font-size: 6rem;
        }
      }
    }
  }
`

export default StyledNotFound;