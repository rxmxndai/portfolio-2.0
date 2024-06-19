import { Container } from "@mui/material";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";



function App() {
  return (
    <Container disableGutters sx={{ bgcolor: "#191919" }} >
        <Header />
        <Home />
        <Skills />
        <Projects />
        <Contacts />
      </Container>
  );
}

export default App;
