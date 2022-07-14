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
      background: ${({ theme }) => theme.body.background};
      color: ${({ theme }) => theme.ui.text.primary};
      transition: all 0.20s linear;

    }

  a {
      text-decoration: none;
      color: ${({ theme }) => theme.ui.text.primary};
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
