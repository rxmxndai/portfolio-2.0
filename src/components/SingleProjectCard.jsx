import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

const SingleProjectCard = ({ project }) => {

    return (
        <Card
            sx={{ bgcolor: "#333", color: "#ffffff"}}  >
            <CardActionArea  >
                <CardMedia
                    component="img"
                    image={require("../assets/images/ecommerce.png")}
                    alt={project.alt}
                />
                <CardContent >
                    <Typography gutterBottom  variant="subtitle1" > {project.title} </Typography>
                    <Typography gutterBottom  variant="body3" sx={{ fontSize: "14px" }} > {project.description} </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SingleProjectCard