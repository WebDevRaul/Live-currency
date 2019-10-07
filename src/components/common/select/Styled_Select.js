import styled from 'styled-components';

const StyledSelect = styled.div`
  margin: auto 0;
  .custom-select {
    border: none !important;
    background-color: rgba(245, 245, 245, 0.5);
    padding: 0px;
    margin: 10px;
    text-align: center;
    vertical-align: none;

    &:focus {
      box-shadow: none;
    }
  }
`

export default StyledSelect;