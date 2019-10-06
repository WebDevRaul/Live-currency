import styled from 'styled-components';
import photo from '../../assets/landing.jpg'

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

    .continue {
      position: relative;
      top: calc(100vh - 300px);
      display: flex;
      justify-content: flex-end;
    }
  }
`

export default StyledLanding;