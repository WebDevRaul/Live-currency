import styled from 'styled-components';
import { primaryColor, mainWhite } from '../../index.scss';
import photo from '../../assets/landing.jpg';
import { device } from '../../utils/devices';

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
      width:100%;
      height: 60px;
      font-size: 1.2rem;
      text-align: center;
      color: ${mainWhite};
      background-color: ${primaryColor};
      white-space: nowrap;
      overflow: hidden;
      position: relative

      p {
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        line-height: 60px;
        text-align: center;
        /* Starting position */
        -moz-transform:translateX(100%);
        -webkit-transform:translateX(100%);	
        transform:translateX(100%);
        /* Apply animation to this element */	
        -moz-animation: scroll-left 8s linear infinite;
        -webkit-animation: scroll-left 8s linear infinite;
        animation: scroll-left 8s linear infinite;
      }
    }

    .continue {
      position: relative;
      top: calc(100vh - 340px);
      display: flex;
      justify-content: flex-end;
    }
  }

  @media ${device.tablet} {
    .landing {
      .info {
        p {
          -moz-animation: scroll-left 20s linear infinite;
          -webkit-animation: scroll-left 20s linear infinite;
          animation: scroll-left 20s linear infinite;
        }
      }
    }
  }

  /* Move it (define the animation) */
  /* @-moz-keyframes scroll-left {
    0%   { -moz-transform: translateX(100%); }
    100% { -moz-transform: translateX(-100%); }
  }
  @-webkit-keyframes scroll-left {
    0%   { -webkit-transform: translateX(100%); }
    100% { -webkit-transform: translateX(-100%); }
  } */
  @keyframes scroll-left {
    0% { 
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%); 		
    }
    100% { 
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%); 
    }
  }
`

export default StyledLanding;