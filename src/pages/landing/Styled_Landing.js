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
    min-height: 100vh;
    background-image: url(${photo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 50px;

    .info {
      width:100%;
      padding: 10px 0;
      font-size: 1.2rem;
      color: ${mainWhite};
      background-color: ${primaryColor};
      white-space: nowrap;
      overflow: hidden;

      p {
        text-align: center;
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
      position: absolute;
      top: calc(100vh - 25%);
      right: 50px;
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
          width: 150%;
          -moz-animation: scroll-left 13s linear infinite;
          -webkit-animation: scroll-left 13s linear infinite;
          animation: scroll-left 13s linear infinite;
        }
      }
    }
  }

  @media ${portrait.mobileL} {
    .landing {
      .info {
        p {
          width: 260%;
        }
      }
    }
    
    @keyframes scroll-left {
      ${scrollStart}
      ${scrollEnd}
    }
  }

  @media ${portrait.mobileM} {
    .landing {
      .info {
        p {
          width: 330%;
        }
      }
    }
  }

  @media ${landscape.mobileL} {
    .landing {
      .info {
        p {
          width: 100%;
          -moz-animation: scroll-left 13s linear infinite;
          -webkit-animation: scroll-left 13s linear infinite;
          animation: scroll-left 13s linear infinite;
        }
      }
    }
  }

  @media ${landscape.mobileM} {
    .landing {
      .info {
        p {
          width: 120%;
        }
      }
    }
  }

  @media ${landscape.mobileS} {
    .landing {
      .info {
        P {
          width: 160%;
        }
      }
    }
  }
`

export default StyledLanding;