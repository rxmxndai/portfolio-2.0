import {  Container } from "@mui/material";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Career from "./pages/Career";
import Projects from "./pages/Projects";

function App() {
  return (
    <Container disableGutters sx={{ bgcolor: "#191919" }} >
      <Header />
        <Home />
        <Skills />
        <Projects />
        <Career />
    </Container>
  );
}

export default App;
