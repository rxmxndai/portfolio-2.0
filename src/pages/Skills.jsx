import { Box, Container, Typography } from "@mui/material"
import SkillsList from "../components/SkillsList"
import { useEffect, useState } from "react"

import { frontend, backend, tools, programming  } from "../assets/skillsData"





const Skills = () => {

  const [active, setActive] = useState("frontend");

  const [data, setData] = useState([]);


  const skillsList = [
    {
      id: "frontend",
      title: "Frontend"
    },
    {
      id: "backend",
      title: "Backend"
    },
    {
      id: "tools",
      title: "Tools"
    },
    {
      id: "programming",
      title: "Programming"
    },
  ];


  useEffect(() => {

    switch (active) {
      case "featured":
        setData(frontend);
        break;
      case "programming":
        setData(programming);
        break;
      case "backend":
        setData(backend);
        break;
      case "tools":
        setData(tools);
        break;
      default:
        setData(frontend);
    }

  }, [active]);






  return (
    <Container id="skills" disableGutters sx={{ p: "50px 0px"  }} >
      <Box sx={{ textAlign: 'center', p: 4 }}>
        <Typography  variant="h6" sx={{ color: '#ccc', fontWeight: "bold", pb: "10px" }}>
          Skills
        </Typography>


        <SkillsList skillsList={skillsList} active={active} setActive={setActive} />


        <Box sx={{display: "flex", flexWrap: "wrap", gap: "100px"}}>
        {data.map((skill) => (
          <Typography> 
              {skill.title}
          </Typography>
        ))}
        </Box>


      </Box>

    </Container>
  )
}

export default Skills