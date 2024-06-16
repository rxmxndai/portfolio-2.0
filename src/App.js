import { Container } from "@mui/material";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";



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
