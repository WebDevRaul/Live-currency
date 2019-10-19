import styled from 'styled-components';
import { portrait } from '../../utils/devices';

const StyledLive = styled.div`
  .live {
    min-height: calc(100vh - 230px);
  }

  @media ${portrait.laptopL} {
    .live {
      display: grid;
      align-items: center;
    }
  }
`

export default StyledLive;