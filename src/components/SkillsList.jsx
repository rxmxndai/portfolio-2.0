import { Container, List, ListItem, Typography, styled } from "@mui/material"


const CustomListItem = styled(ListItem)( () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  }
))  


const TitleField = styled(Typography)( ({active}) => ({
  backgroundColor: active ? "#6A98F0" : "transparent",
  padding: "10px 20px",
  borderRadius: "50px",
}
))  

const SkillsList = ({ skillsList, active, setActive }) => {
  return (
    <Container  sx={{ p: "30px 0px", display: "flex", justifyContent: "center"  }} >
      <List sx={{display: "flex",  width: "50%"}} >
        {skillsList.map(skill => (
          <CustomListItem  key={skill.id} onClick={() => setActive(skill.id)}>
              <TitleField active={active === skill.id} variant="body1" > {skill.title} </TitleField>
          </CustomListItem>
        ))}
      </List>
    </Container>
  )
}

export default SkillsList