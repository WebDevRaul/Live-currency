import styled from 'styled-components';
import { primaryColor, mainBorderRadius } from '../../../index.scss';

const StyledConvertor = styled.section`
  .convertor {
    font-size: 1.5em;
    padding: 20px;
    margin: 10px 0 30px 0;
    background-color: rgba(245, 245, 245, 0.5);
    box-shadow: 10px 10px 10px ${primaryColor};
    border-radius: ${mainBorderRadius};

    .base {
      text-align: center;
      span {
        &:nth-child(1) {
        font-size: 40px;
        }
        &:nth-child(2), &:nth-child(5) {
          font-size: 25px;
          padding: 0 0 0 10px;
        }
        &:nth-child(3) {
          padding: 0 10px;
        }
      }
    }
    .date {
      text-align: center;
    }
    .form {
      margin: 0 20px;
      .children {
        display: flex;
        margin: auto;
      }
    }
  }
`

export default StyledConvertor;