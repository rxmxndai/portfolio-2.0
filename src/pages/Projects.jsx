import { Box, Container } from '@mui/material';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/project/ProjectCard';



const Projects = () => {
  return (
    <Container id="projects" sx={{ p: "50px 0px", minHeight: "80vh" }}  >
      <Box sx={{ p: 5 }} >
        <SectionHeader header="Projects" />
        <ProjectCard alignment={1} />
        <ProjectCard alignment={0} />
    </Box>
    </Container >
  )
}

export default Projects