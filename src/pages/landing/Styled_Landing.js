import styled from 'styled-components';
import { primaryColor, mainWhite } from '../../index.scss';
import photo from '../../assets/landing.jpg';

const StyledLanding = styled.div`
  .landing {
    min-height: calc(100vh - 230px);
    
    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -20;
      background-image: url(${photo});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .info {
      height: 40px;
      background-color: ${primaryColor};
      line-height: 40px;
      text-align: center;
      white-space: nowrap;
      width:100%;
      overflow: hidden;
      color: ${mainWhite};

      .data {
        display: flex;
        justify-content: flex-end;
      }
    }

    .continue {
      position: relative;
      top: calc(100vh - 340px);
      display: flex;
      justify-content: flex-end;
    }
  }
`

export default StyledLanding;