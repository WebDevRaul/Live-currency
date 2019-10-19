import styled from 'styled-components';
import { primaryColor, mainWhite } from '../../index.scss';
import photo from '../../assets/landing.jpg';
import { landscape, portrait } from '../../utils/devices';

const scrollStart = () => `
  0% { 
    -moz-transform: translateX(50%);
    -webkit-transform: translateX(50%);
    transform: translateX(50%); 		
    }
`;

const scrollEnd = () => `
  100% { 
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%); 
    }
`

const StyledLanding = styled.div`
  .landing {
    min-height: calc(100vh - 235px);
    
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
      padding: 10px 0;
      font-size: 1.2rem;
      text-align: center;
      color: ${mainWhite};
      background-color: ${primaryColor};
      white-space: nowrap;
      overflow: hidden;

      p {
        margin: 0;
        /* Starting position */
        -moz-transform:translateX(100%);
        -webkit-transform:translateX(100%);	
        transform:translateX(100%);
        /* Apply animation to this element */	
        -moz-animation: scroll-left 20s linear infinite;
        -webkit-animation: scroll-left 20s linear infinite;
        animation: scroll-left 20s linear infinite;
      }
    }

    .continue {
      position: relative;
      top: calc(100vh - 340px);
      display: flex;
      justify-content: flex-end;
    }
  }

  @keyframes scroll-left {
    0% { 
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%); 		
    }
    ${scrollEnd}
  }

  @media ${portrait.tablet} {
    .landing {
      .info {
        p {
          width: 110%;
          -moz-animation: scroll-left 13s linear infinite;
          -webkit-animation: scroll-left 13s linear infinite;
          animation: scroll-left 13s linear infinite;
        }
      }
    }
  }

  @media ${portrait.mobileL} {
    .landing {
      min-height: calc(100vh - 305px);
      .continue {
        top: calc(100vh - 410px);
      }
      .info {
        p {
          width: 230%;
        }
      }
    }
    
    @keyframes scroll-left {
      ${scrollStart}
      ${scrollEnd}
    }
  }

  @media ${portrait.mobileS} {
    .landing {
      .info {
        p {
          width: 260%;
        }
      }
    }
  }

  @media ${landscape.mobileL} {
    .landing {
      .info {
        p {
          width: 110%;
          -moz-animation: scroll-left 13s linear infinite;
          -webkit-animation: scroll-left 13s linear infinite;
          animation: scroll-left 13s linear infinite;
        }
      }
    }
  }

  @media ${landscape.mobileM} {
    .landing {
      min-height: calc(100vh - 170px);
      .continue {
        top: calc(100vh - 280px);
      }
      .info {
        p {
          width: 150%;
        }
      }
    }
  }

  @media ${landscape.mobileS} {
    .landing {
      .info {
          padding: 5px 0;
      }
      .continue {
        top: calc(100vh - 265px);
      }
    }
  }
`

export default StyledLanding;