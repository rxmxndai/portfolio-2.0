import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

const SingleProjectCard = ({ project }) => {

    const featured = project.featured;

    return (
        <Card elevation={24}
            sx={{ bgcolor: "#333", color: "#ffffff", display: "flex", flexDirection: "" }}
        >
            <CardActionArea sx={{ flex: 1  }} >
                <CardMedia
                    component="img"
                    image={project.images[0]}
                    alt={project.alt}
                />
            </CardActionArea>   
            <CardContent sx={{ flex: 1 }} >
                <Typography gutterBottom component="div" variant="h6" > {project.title} </Typography>
                <Typography  variant="body3" sx={{ fontSize: "14px" }} > {project.description} </Typography>
            </CardContent>
        </Card>
    )
}

export default SingleProjectCard