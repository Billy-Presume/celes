import { createGlobalStyle } from "styled-components";
// import { spacing } from "./infrastructure.styles";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  body {
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.5px;
      background: ${({ theme }) => theme.body.background};
      color: ${({ theme }) => theme.ui.text.primary};
      transition: all 0.30s ease;

      scroll-behavior: smooth;
      overscroll-behavior: auto;

      scrollbar-width: none; // for firefox
      &::-webkit-scrollbar {
        display: none;
      }
    }

  a {
      text-decoration: none;
      color: ${({ theme }) => theme.ui.link.color3};
       transition: all 0.30s ease;

      &:hover {
        color: ${({ theme }) => theme.ui.link.hover2};
        transition: all 0.2s ease;
      }

      &:active {
        color: ${({ theme }) => theme.ui.link.active};
      }
    }

  main {
      flex: 1;
      display: flex;
      font-family: 'Roboto', sans-serif;
      background: ${({ theme }) => theme.ui.view.background2};;
      color: ${({ theme }) => theme.ui.view.color};
      padding: 5px;
      border-radius: 6px;
    }

  button {
    font-family: inherit;
    text-align:inherit;
    text-transform:inherit;
    letter-spacing:inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    padding: 0;
  }
`;
