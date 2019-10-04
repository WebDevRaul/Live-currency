import styled from 'styled-components';
import { mainTransition, mainSpacing, primaryColor, secondaryColor } from '../../index.scss';

const StyledNavbar = styled.div`
  .navbar {
    margin: 10px 0px;
    padding: .5rem 0;

    .nav-wrapper {
      width: 100%;

      .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          &:focus {
            outline: none;
          }
        }
      }
    }

    .nav-links {
      list-style-type: none;
      transition: ${mainTransition};
      height: 0;
      overflow: hidden;
      padding-left: 0px;
      margin: 0 0 0 auto;

        li {
        display: block;
        padding: 1rem 1.25rem;
        text-transform: capitalize;
        transition: ${mainTransition};
        font-weight: bold;
        letter-spacing: ${mainSpacing};
        text-align: center;
        
        a {
          color: ${primaryColor};

          &:hover {
            color: ${secondaryColor};
            cursor: pointer;
          }
        }

      }
    }  
    .show-nav {
      height: 110px;
    }
  }

  @media (min-width: 576px) {
    .navbar {
      padding: 0 2rem;
    }
  }

  @media (min-width: 992px) {
    .navbar {
      .nav-wrapper {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nav-header {
          button {
            display: none;
          }
        }

        .logo-btn {
          display: none;
        }

        .nav-links {
          height: auto;
          display: flex;
        }
      }
    }
  }
`

export default StyledNavbar;