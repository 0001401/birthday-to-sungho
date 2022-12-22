import { Router } from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

const theme = {
  mainC: "#a8cad6",
};
