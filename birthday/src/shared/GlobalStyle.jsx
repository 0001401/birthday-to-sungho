import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    text-decoration: none;
    outline : none;
    font-family: "Apple SD Gothic Neo",'Noto Sans KR', sans-serif;
  }

  body {
    display: flex;
    background-color: #a8cad6;
    max-width: 1200px;
  }

  html {
    font-size: 14px;

  }
`;

export default GlobalStyle;
