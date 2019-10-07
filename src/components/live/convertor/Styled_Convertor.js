import styled from 'styled-components';
import { primaryColor, mainBorderRadius } from '../../../index.scss';

const StyledConvertor = styled.section`
  .convertor {
    padding: 20px;
    margin: 10px 0 30px 0;
    background-color: rgba(245, 245, 245, 0.5);
    box-shadow: 10px 10px 10px ${primaryColor};
    border-radius: ${mainBorderRadius};
    .base {
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
  }
`

export default StyledConvertor;