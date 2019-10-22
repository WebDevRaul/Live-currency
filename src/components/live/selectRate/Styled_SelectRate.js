import styled from 'styled-components';
import { mainWhite } from '../../../index.scss';
import { portrait } from '../../../utils/devices';

const StyledSelectRate = styled.section`
  .select-rate {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;

    p {
      margin-bottom: 0px;
    }

    form {
      .custom-select {
        background-color: ${mainWhite}!important;
      }
    }
  }

  @media ${portrait.tablet} {
    .select-rate {
      font-size: 1.3em;
    }
  }
  @media ${portrait.mobileL} {
    .select-rate {
      font-size: 1em;
    }
  }
  @media ${portrait.mobileM} {
    .select-rate {
      font-size: .9em;
    }
  }
`

export default StyledSelectRate;