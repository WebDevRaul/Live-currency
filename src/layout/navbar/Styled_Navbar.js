import styled from 'styled-components';
import { mainTransition, mainSpacing, primaryColor, secondaryColor } from '../../index.scss';

const mixin = () => `
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background: ${primaryColor};
  z-index: 20;
  transform: scaleX(0);
  transition: transform .5s;
`

const StyledNavbar = styled.div`
  .navbar {

    .nav-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          display: none;

          &:focus {
            outline: none;
          }
        }
      }
    .nav-links {
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        display: block;
        position: relative;
        padding: 1rem 1.25rem;
        text-transform: capitalize;
        font-weight: bold;
        text-align: center;
        letter-spacing: ${mainSpacing};
        transition: ${mainTransition};

        a {
          color: ${primaryColor};

          &::after {
            ${mixin};
            bottom: 0;
            right: 0;
            transform-origin: right;
          }

          &::before {
            ${mixin};
            top: 0;
            left: 0;
            transform-origin: left;
          }

          &:hover {
            color: ${secondaryColor};
            cursor: pointer;

            &::after {
              transform: scaleX(1);
              transform-origin: left;
            }
            &::before {
              transform: scaleX(1);
              transform-origin: right;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .navbar {

    .nav-wrapper {
      flex-direction: column;

      .nav-header {
        width: 100%;

        button {
          display: block;
        }
      }
      .nav-links {
        height: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        li {
          a {
            &:hover {
              &::after {
                height: 3px !important;
              }
              &::before {
                height: 3px !important;
              }
            }
          }
        }
      }
      .show-nav {
        height: 130px;
      }
    }
  }
}
`

export default StyledNavbar;