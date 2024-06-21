import { Box, Container, Paper, Typography } from "@mui/material"
import SectionHeader from "../components/SectionHeader"
import { educationList } from "../assets/data/educationData"

const Academics = () => {
  return (
    <Container maxWidth={"xl"} id="academics" sx={{ p: "50px 0px" }} >

      <Box sx={{ p: 5, display: "flex", flexDirection: "column", alignItems: "center" }} S>

        <SectionHeader header="Education" />

        {educationList.map(({ education, institution, date, coreModules }) => (
          <Paper key={date}
            sx={{ width: "60%", bgcolor: "#333", cominHeight: "100px", mb: "20px", p: "20px", display: "flex", flexDirection: "column", gap: "20px" }} >

            <section>
              <Typography color="#fff" variant="h6"> {education} </Typography>
              <Typography color="#ccc" variant="body3" sx={{ fontSize: "14px" }}> @{institution} </Typography>
            </section>

            <Typography color="#f2f2f2" variant="body2" sx={{ textIndent: "20px" }} > {coreModules} </Typography>
          </Paper>
        ))}

      </Box>

    </Container>
  )
}


export default Academics