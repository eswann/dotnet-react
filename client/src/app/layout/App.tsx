import Catalog from "../../features/catalog/Catalog";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "../../features/catalog/Header";
import { useState } from "react";
import HomePage from "../../features/home/HomePage";
import { Route } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={ProductDetails} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
