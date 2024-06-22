import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

const SingleProjectCard = ({ project }) => {

    return (
        <Card elevation={24}
            sx={{ bgcolor: "#333", color: "#ffffff", display: "flex", flexDirection: (  project.featured ) ? "row" : "column" }}
        >
            <CardActionArea sx={{ flex: 1  }} >
                <CardMedia
                    component="img"
                    image={project.images[0]}
                    alt={project.alt}
                />
            </CardActionArea>   
            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }} >
                <Typography gutterBottom component="div" variant="h5" > {project.title} </Typography>
                <Typography  variant="body3"  > {project.description} </Typography>
            </CardContent>
        </Card>
    )
}

export default SingleProjectCard