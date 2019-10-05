import styled from 'styled-components';
import { secondaryColor, mainBorderRadius, mainSpacing, mainWhite } from '../../../index.scss';

const StyledLogo = styled.div`
  .logo {
    margin-right: 15px;
    padding: 8px;
    border: 2px solid ${secondaryColor};
    border-radius: ${mainBorderRadius};
    background-color: ${mainWhite};

    .inner-logo {
      display: flex;
      letter-spacing: ${mainSpacing};
      padding: 8px;
      background-color: ${secondaryColor};
      border-radius: ${mainBorderRadius};
      color: ${mainWhite};

      p {
        margin-bottom: 0px;
        margin-right: 5px;
      }
    }
  }
    `

export default StyledLogo;