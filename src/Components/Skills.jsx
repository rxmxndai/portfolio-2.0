import { Box, Button, Container, Typography } from "@mui/material"



const handleSelect = (tech) => {

} 

const Skills = () => {
  return (
    <Container id="skills" disableGutters sx={{ pt: "60px"}} >
      <Box sx={{ textAlign: 'center', p: 4  }}>
        <Typography variant="h6" sx={{ mb: 4, color: '#999', fontWeight: "bold" }}>
          Skills
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Button variant="contained" color="primary" sx={{ m: 1 }} onClick={() => handleSelect('featured')}>
            Featured
          </Button>
          <Button variant="contained" color="secondary" sx={{ m: 1 }} onClick={() => handleSelect('frontend')}>
            Frontend
          </Button>
          <Button variant="contained" color="secondary" sx={{ m: 1 }} onClick={() => handleSelect('backend')}>
            Backend
          </Button>
          <Button variant="contained" color="secondary" sx={{ m: 1 }} onClick={() => handleSelect('programming')}>
            Programming
          </Button>
        </Box>
{/* 
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          {selectedCategory === 'featured' && (
            <Box>
              <img src="path_to_js_icon" alt="JavaScript" />
            </Box>
          )}
          {selectedCategory === 'frontend' && (
            <Box>
              <img src="path_to_nextjs_icon" alt="Next.js" />
            </Box>
          )}
          {selectedCategory === 'backend' && (
            <Box>
              <img src="path_to_backend_icon" alt="Backend" />
            </Box>
          )}
          {selectedCategory === 'programming' && (
            <Box>
              <img src="path_to_cpp_icon" alt="C++" />
            </Box>
          )}
        </Box> */}
      </Box>

    </Container>
  )
}

export default Skills