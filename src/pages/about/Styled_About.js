import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../index.scss';

const StyledAbout = styled.section`
  .about {
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    .info {
      margin: 20px 0;
      p {
        &:nth-child(2) {
          text-align: center;
        }
      }
      a {
        color: ${primaryColor};

        &:hover {
          color: ${secondaryColor};
          cursor: pointer;
        }
      }
    }

    .old, .new {
      margin: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      p {
        height: 50px;
        margin-bottom: 0px;
        text-align:center;
      }
      ul{
        li {
          margin: 10px;
          text-align: center;
        }
      }
    }
    .old {
      ul {
        color: ${primaryColor};
      }
    }
    .new {
      ul {
        color: ${secondaryColor};
      }
    }
  }
`

export default StyledAbout;