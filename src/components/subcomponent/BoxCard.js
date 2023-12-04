import {Button, CardActions, Typography, CardContent, Card, CardMedia} from "@mui/material"

function BoxCard(props) {

    return (
        <Card sx={{maxWidth:345}}>
            <CardMedia 
                component="img"
                height="130"
                image={props.img}
            />
            <CardContent>
                <Typography variant="h5" component="div">{props.title}</Typography>
                <Typography variant="body" color="text.secondary">{props.description}</Typography>
            </CardContent>
            <CardActions>
            
                <Button id={props.title} onClick={props.handleClick} variant="contained" color="primary">Look Inside</Button>
                <Button variant="contained" color="primary">Add to Favorite</Button>
            
            </CardActions>
        </Card>
    )
}

export default BoxCard;