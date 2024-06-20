import { Container, Typography } from "@mui/material"
import SectionHeader from "../components/SectionHeader"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import WebIcon from "@mui/icons-material/Web"
import ComputerIcon from "@mui/icons-material/Computer"





const Career = () => {
  return (
    <Container disableGutters id="careers" sx={{ p: "50px 0px", minHeight: "80vh", }}  >
      <SectionHeader header={"Career"} />

      <Timeline position="alternate-reverse" >
        {careerList.map(career => (
          <TimelineItem key={career.startDate} >

            <TimelineOppositeContent sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.success" > {career.startDate} </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot sx={{ padding: "10px" }} color={career.themeColor} variant="outlined">
                {career.icon}
              </TimelineDot>

              <TimelineConnector sx={{ height: "50px", }} />

            </TimelineSeparator>

            <TimelineContent  >
              <Typography variant="h6" component={"div"} > {career.role} </Typography>
              <Typography variant="body3" > {career.organization} </Typography>
            </TimelineContent>
          </TimelineItem>

        ))}

      </Timeline>

      <SectionHeader header={"Education"} />

      <Timeline position="alternate" >
        {educationList.map(career => (
          <TimelineItem key={career.startDate} >

            <TimelineOppositeContent sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.success" > {career.date} </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot sx={{ padding: "10px" }}  >
                {career.icon}
              </TimelineDot>

              <TimelineConnector sx={{ height: "40px", }} />

            </TimelineSeparator>

            <TimelineContent  >
              <Typography variant="h6" component={"div"} > {career.education} </Typography>
              <Typography variant="body3" > {career.institution} </Typography>
            </TimelineContent>
          </TimelineItem>

        ))}

      </Timeline>


    </Container >
  )
}


const careerList = [
  {
    role: "UI / UX Intern",
    organization: "@RubixKube",
    startDate: "June 14, 2024",
    icon: (<DeveloperModeIcon />),
    themeColor: "success"
  },
  // {
  //   role: "Frontend Developer",
  //   organization: "@BaldyPoint",
  //   startDate: "June 15, 2024",
  //   icon: (<WebIcon />),
  //   themeColor: "primary"
  // },
  // {
  //   role: "Backend Engineer",
  //   organization: "@Imagination",
  //   startDate: "June 16, 2024",
  //   icon: (<ComputerIcon />),
  //   themeColor: "secondary"
  // }
]


const educationList = [
  {
    education: "Computer Science",
    institution: "Herald CollegeKathmandu",
    date: "June, 2023"
  },
  {
    education: "Higher Secondary Education",
    institution: "St. Lawrence College",
    date: "March, 2021"
  }
]

export default Career