import styled from 'styled-components';
import { portrait } from '../../../utils/devices';

const StyledLoading = styled.div`
  .loading {
    display: flex;
    flex-direction: column;
    min-height: 25px;

    p, span {
      margin-bottom: 0px;
      min-width: 125px;
      animation: loading 2s linear infinite forwards;
      min-height: 25px;
      background: linear-gradient(to right, #e0e0e0 8%, #F0F0F0 18%, #e0e0e0 33%);
      background-size: 800px 104px;
      position: relative;
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