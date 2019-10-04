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
        position: relative;
        padding: 1rem 1.25rem;
        margin: 5px 0;
        text-transform: capitalize;
        transition: ${mainTransition};
        font-weight: bold;
        letter-spacing: ${mainSpacing};
        text-align: center;
        width: 100px;
        
        a {
          color: ${primaryColor};

          &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 2px;
            background: ${primaryColor};
            z-index: -10;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform .5s;
          }
          &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: ${primaryColor};
            z-index: -10;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform .5s;
          }

          &:hover {
            color: ${secondaryColor};
            cursor: pointer;
          }

          &:hover::after {
            transform: scale(1);
            transform-origin: left;
          }
          &:hover::before {
            transform: scale(1);
            transform-origin: right;
          }
        }

      }
    }  

    .show-nav {
      height: 150px;
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