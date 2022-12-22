import { Router } from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import { ThemeProvider } from "styled-components";

import { Youtube } from "./component/Youtube";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
        <Youtube />
      </ThemeProvider>
    </>
  );
}

export default App;

const theme = {
  mainC: "#a8cad6",
};
