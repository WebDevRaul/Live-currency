import styled from 'styled-components';
import { portrait } from '../../utils/devices';

const StyledLive = styled.div`
  @media ${portrait.laptopL} {
    .live {
      display: grid;
      align-items: center;
    }
  }
`

export default StyledLive;