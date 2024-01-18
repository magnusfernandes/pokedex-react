import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import "./App.scss";
import Layout from "./components/wrappers/Layout";
import { AppRoutes } from "./app.routes";
import { customTheme } from "./themes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
