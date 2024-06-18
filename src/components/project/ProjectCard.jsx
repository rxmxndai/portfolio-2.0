import { Box, Container, Typography, styled } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';


const ProjectImage = styled('a')(({ align }) => ({
    flex: '1',
    display: 'flex',
    justifyContent: align ? 'flex-end' : 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
}));

const ProjectDetails = styled(Box)({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
})


const LinkSection = styled(Box)({
    marginTop: "auto",
    display: "flex",
    gap: "20px",
    cursor: "pointer"
})


const ProjectCard = ({ alignment }) => {

    console.log(alignment == true);

    return (
        <Container disableGutters sx={{ bgcolor: "#262626", p: "30px", borderRadius: "8px", mt: "30px" }} >
            <Box sx={{ height: "25vh", display: "flex", gap: "50px", flexDirection: alignment ? "row" : "row-reverse" }} >

                <ProjectDetails>
                    <Typography variant="body3" sx={{ fontWeight: "bold" }} > Ecommerce Web Application </Typography>
                    <Typography variant="body3" sx={{ fontFamily: "inter" }} > Lorem ii veritatis qui incidunt natus. Accusantium necessitatibus ab voluptas tempora dignissimos suscipit nam hic. Dolore dolorum perferendis eaque? </Typography>


                    <LinkSection  >
                        <CodeIcon href="#" />
                        <LinkIcon href="#" />
                    </LinkSection>
                </ProjectDetails>


                <ProjectImage href="#" align={alignment} >
                    <Box sx={{ backgroundSize: "fill" }} component="img" height="100%" src={require("../../assets/ecommerce.png")} alt="tab" />
                </ProjectImage>
            </Box>



        </Container>
    )
}

export default ProjectCard