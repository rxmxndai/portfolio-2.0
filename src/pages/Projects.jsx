import { Box, Container } from '@mui/material';
import SectionHeader from '../components/SectionHeader';
import { projectsData } from '../assets/data/projectsData';
import SingleProjectCard from '../components/SingleProjectCard';
import Masonry from '@mui/lab/Masonry';



const Projects = () => {
  return (
    <Container disableGutters id="projects" sx={{ p: "50px 0px", minHeight: "80vh" }}  >

      <Box sx={{ p: 5, }} >

        <SectionHeader header="Projects" />

        {/* <Masonry sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4 }} disableGutters gap={10}  > */}
        <Box m="auto" sx={{ width: "80%", minHeight: 500 }} >
          <Masonry columns={3} spacing={2} sx={{display: "flex", justifyContent: "center"}} >
            {projectsData.map(project => (
              <SingleProjectCard key={project.id} project={project} />
            ))}
          </Masonry>
        </Box>



      </Box>
    </Container >
  )
}


export default Projects