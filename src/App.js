import Header from "./Components/Header";

import { Container } from "@mui/material";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";



function App() {
  return (
    <Container disableGutters maxWidth="lg" sx={{ bgcolor: "#191919" }} >
        <Header />
        <Home />
        <Skills />
        <Projects />
        <Footer />
      </Container>
  );
}

export default App;
