import { Container, Typography, Box, Button, IconButton, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const codeString = `class Human {
  constructor() {
    this.name = "Roman Karki";
    this.languages = ["JavaScript", "TypeScript", "C++"];
    this.skills = ["NodeJS", "NextJS", "ExpressJS"];
  }
}`;

const Home = () => {


  return (
    <Container>
      {/* Main Home Division */}
      <Box display={"flex"} height={"calc(70vh)"} overflow={"hidden"} >

        {/* Left Div */}
        <Box flex={1} padding={"20px"}
          display={"flex"} alignItems={"center"} justifyContent={"left"}
        >


          <Box display="flex" flexDirection="column" gap={"20px"} >

            <Typography variant="h4" fontFamily={"Montserrat"} fontWeight={"extra bold"}> ROMAN KARKI </Typography>
            <Typography variant="body2"> Java / JS Developer  </Typography>

            <Stack direction="row" spacing={1} >
              <IconButton color="inherit" target="_blank" href="https://github.com/rxmxndai" >
                <GitHubIcon fontSize='large' height="100%" />
              </IconButton>
              <IconButton color="primary" target="_blank" href="https://www.linkedin.com/in/roman-karki-bb3338241/" >
                <LinkedInIcon fontSize='large' height="100%" />
              </IconButton>
            </Stack>

            <Box >
              <Button
                sx={{ p: "10px 20px" }}
                size="medium"
                variant='contained'
                target="_blank"
                href="https://drive.google.com/file/d/1GDJUIj_Di0m3m6SOydkxKN7K1zP4992I/view?usp=drive_link">
                View Resume
              </Button>
            </Box>
          </Box>

        </Box>


        {/* Right Div */}
        <Box flex={1} position="relative" >


          {/* Semi Circle */}
          <Box bgcolor="#6A98F0"
            sx={{
              padding: "20px",
              height: "60%",
              width: "100%",
              borderRadius: "50%",
              position: "absolute",
              top: 100,
              right: -100,

            }}
          >
          </Box>

          {/* Card */}
          <Box
            sx={{
              width: "80%",
              height: "30%",
              backgroundColor: '#232323',
              borderRadius: '12px',
              position: "absolute",
              top: "40%",
              left: 0,
            }}
          >
            <img
                  src={require('../assets/dev-dv.png')}
                  alt="code snippet"
                  style={{  position: "absolute", top: 20, left: 20, width: "100%", height: '100%', borderRadius: "12px", boxShadow: "0px 0px 50px #6A98F0"}}
                />
          </Box>


        </Box>
      </Box>
    </Container>
  );
};

export default Home;