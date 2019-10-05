import styled from 'styled-components';
import { primaryColor, secondaryColor, mainWhite, mainSpacing } from '../../index.scss';

const StyledFooter = styled.footer`
  .footer {
    background-color: ${primaryColor};
    padding: 6px 0;
    color: ${mainWhite};

    .info {
      display: flex;
      justify-content: space-around;
      align-content: center;
      padding: 10px 0;

      .date {
        margin: auto;
        font-size: 1.1rem;
        text-align: center;
      }
    }
    .social {
      text-align: center;
      padding: 10px 0;
      p {
        margin-bottom: 0px;
        letter-spacing: ${mainSpacing};
      }
      .links {
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin: 0 auto;
        i {
          color: white;
          transition: 0.5s;
          margin: 5px 10px;
          font-size: 1.3rem;

          &:hover {
            color: ${secondaryColor};
            transition: 0.5s;
          }
        }
      }
    }
  }
`

export default StyledFooter;