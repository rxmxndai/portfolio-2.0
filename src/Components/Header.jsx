import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material"
import Skills from "./Skills"



const navItems = [
  {
    title: "Home",
    goto: "#"
  },
  {
    title: "Skills",
    goto: "#skills"
  },
  {
    title: "Projects",
    goto: "#projects"
  },
  {
    title: "Contacts",
    goto: "#contacts"
  },
]




const Header = () => {

  return (
    <AppBar  position="sticky" sx={{bgcolor: "#232323"}} >
      <Container disableGutters  >
        <Toolbar  >

          <Typography variant="h6" sx={{ flexGrow: 1, color: "#6A98F0" }}> LOGO </Typography>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", gap: "30px" }} >
            {navItems.map(nav => ( 
              <IconButton 
                    href={nav.goto}
                    key={nav.goto} 
                    cursor= "pointer"
                    color= "inherit"
                    sx= {{ fontSize: "18px", fontWeight: "light"}}   
                    component={"a"}> 
                      {nav.title}  
              </IconButton>
              ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


  )
}

export default Header