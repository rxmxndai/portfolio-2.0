import { Button, Container, List, ListItem, styled } from "@mui/material"


const CustomListItem = styled(ListItem)( () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
))  


const TitleField = styled(Button)( ({active}) => ({
  backgroundColor: active ? "#6A98F0" : "transparent",
  color: active ? "#fff" : "#ccc",
  padding: "10px 20px",
  borderRadius: "50px",
  textTransform: "none",
  '&:hover': {
    backgroundColor: active ? "#5A88E0" : "transparent",
  },
}
))  

const SkillsList = ({ skillsList, active, setActive }) => {
  return (
    <Container  sx={{ p: "20px 0px 50px 0px", display: "flex", justifyContent: "center"  }} >
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