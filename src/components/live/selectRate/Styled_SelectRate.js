import styled from 'styled-components';
import { mainWhite } from '../../../index.scss';

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
`

export default StyledSelectRate;