import styled from 'styled-components';

const StyledConvertor = styled.section`
  .convertor {
    padding: 20px;
    background-color: rgba(245, 245, 245, 0.5);
    border-radius: 10px;
    box-shadow: 10px 10px 10px #bcc3ca;
    margin: 10px 0 30px 0;
    .base {
      padding-left: 30px;

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