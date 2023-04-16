import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import Ping from "./Components/Ping/Ping";

const theme = createTheme({
  typography: {
    fontFamily: "Libre Franklin",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Ping />
      </div>
    </ThemeProvider>
  );
}

export default App;
