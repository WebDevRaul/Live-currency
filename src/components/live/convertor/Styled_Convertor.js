import styled from 'styled-components';
import { portrait } from '../../../utils/devices';
import { primaryColor, mainBorderRadius } from '../../../index.scss';

const StyledConvertor = styled.section`
  .convertor {
    font-size: 1.5em;
    padding: 20px;
    margin: 10px 10px 30px 0;
    background-color: rgba(245, 245, 245, 0.5);
    box-shadow: 10px 10px 10px ${primaryColor};
    border-radius: ${mainBorderRadius};

    .base {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: baseline;
      margin: 5px 0;
      span {
        font-size: 1em;
        margin: 0 6px;
      }
      h1 {
        font-size: 1.2em;
        margin: 0 6px;

        &:nth-child(1) {
          font-size: 2em;
        }
      }
      .loading {
        width: 150px;
      }
    }
    .date {
      text-align: center;
    }
    .form {
      margin: 0 20px;
      .children {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media ${portrait.laptop} {
    .convertor {
      .base {
        .loading {
          width: 120px;
        }
        span {
          margin: 0 4px;
          font-size: .7em;
        }
        h1 {
          margin: 0 4px;
          font-size: .9em;
        }
      }
      .form {
        .form-input {
          width: 90%;
        }
      }
    }
  }

  @media ${portrait.tablet} {
    .convertor {
      .base {
        .loading {
          width: 150px;
        }
        h1 {
          font-size: 1em;
        }
      }
    }
  }

  @media ${portrait.mobileL} {
    .convertor {
      .base {
        .loading {
          width: 100px;
        }
      }
      .form {
        .form-input {
          width: 90%;
        }
        .custom-select {
          background: none;
          padding: 0px;
        }
      }
    }
  }

  @media ${portrait.mobileM} {
    .convertor {
      font-size: 1em;
      .date {
        font-size: 1em;
      }
      .base {
        span {
          font-size: .8em;
        }
        h1 {
          font-size: .9em;
          &:nth-child(2), :nth-child(5) {
            font-size: 1em;
          }
        }
      }
      .loading {
        width: 75px;
      }
    }
  }
`

export default StyledConvertor;