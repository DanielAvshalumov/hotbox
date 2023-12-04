import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import About from "./components/About";
import ScrollToTop from "./components/subcomponent/ScrollToTop";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import OurProduct from "./components/OurProduct";
import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#C1E1C1'
    },
    secondary: {
      main: '#2e7d32'
    },
    transparent: {
      main: '#00FFFFFF'
    }
  }
});

function App() {

  const [productScroll, setProductScroll] = useState("default");
  const handleProductScroll = e => {
      if(productScroll === "Adventure" || productScroll === "default") {
        window.scrollTo(0,0);
    } else if(productScroll === "Creative") {
        window.scrollTo(840,840);
    } else if(productScroll === "Food") {
        window.scrollTo(1500,1500);
    } else if(productScroll === "Curiosity") {
        window.scrollTo(2200,2200);
    } else if(productScroll === "Sleepy Gary") {
        window.scrollTo(2500,2500);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar
        setProductScroll={setProductScroll} />
        <ScrollToTop>
          <Routes>
            <Route path="/" 
              element={
                <Home
                  setProductScroll={setProductScroll}
                  />} 
              />
            <Route path="/about"
               element={
                <About />} 
              />
            <Route path="/ourproduct" 
              element={
                <OurProduct
                  productScroll={productScroll}
                  handleProductScroll={handleProductScroll}
                />} 
              />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
        <br />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
