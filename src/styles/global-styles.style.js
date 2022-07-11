import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  body {
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.5px;
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.color};
      transition: all 0.50s linear;
    }

  a {
      text-decoration: none;
      color: ${({ theme }) => theme.color};
    }

  button {
    font-family: inherit;
    border: 0;
    padding: 0;
    background: none;
    cursor: pointer;
    outline: none;
    letter-spacing:inherit;
    text-transform:inherit;
    text-align:inherit;
    transition: all 0.50s linear;
  }
`;
