import styled from 'styled-components';
import { portrait } from '../../../utils/devices';

const StyledLoading = styled.div`
  .loading {
    display: flex;
    flex-direction: column;
    min-height: 26px;

    p, span {
      min-width: 125px;
      animation: loading 2s linear infinite forwards;
      min-height: 25px;
      background: linear-gradient(to right, #e0e0e0 8%, #F0F0F0 18%, #e0e0e0 33%);
      background-size: 800px 104px;
      position: relative;
    }
    span {
      height: 30px;
      margin: 10px 0 30px 0;
    }
  }

  @keyframes loading{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
  }

  @media ${portrait.mobileL} {
    .loading {
      p {
        min-width: 75px;
      }
    }
  }
`

export default StyledLoading;