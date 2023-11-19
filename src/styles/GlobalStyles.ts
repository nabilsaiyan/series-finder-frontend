import { createGlobalStyle } from "styled-components";
import { ScrollbarStyles } from "./ScrollbarStyles";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: 'Verdana';

    ${ScrollbarStyles}
  }
`;
