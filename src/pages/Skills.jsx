import { Box, Container, Typography } from "@mui/material"
import SkillsList from "../components/SkillsList"
import { useEffect, useState } from "react"

import { frontend, backend, tools, programming } from "../assets/skillsData"




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
    <Container id="skills" disableGutters sx={{ p: "50px 0px", }} >
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: 'center', p: 5 }}>
        <Typography variant="h6" sx={{ color: '#ccc', fontWeight: "bold", pb: "10px" }}>
          Skills
        </Typography>


        <SkillsList skillsList={skillsList} active={active} setActive={setActive} />


        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "50px", maxWidth: "80%" }}>
          {data.map((skill) => (
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", p: "10px 20px" }}>
                  <Box
                    component="img"
                    src={skill.image}
                    sx={{
                      width: 54,
                      height: 54,
                      boxShadow: 10000
                    }}
                  />

                <Typography variant="body2" sx={{ fontSize: "12px", fontWeight: "light"}} disableGutters > {skill.title} </Typography>
              </Box>
          ))}
        </Box>


      </Box>

    </Container>
  )
}

export default Skills