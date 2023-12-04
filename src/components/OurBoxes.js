import { Box, Button, Card, CardContent, CardMedia, Container, Paper, Typography, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BoxCard from "./subcomponent/BoxCard";


function OurBoxes() {
    
    let navigate = useNavigate();
    
    return (
        <Container align="center" sx={{ display:"flex", flexDirection:"column", marginTop:"50px"}}>
            <Typography  variant="h2" sx={{ marginBottom:"40px"}}><span style={{color:"#499b4a", fontStyle:"italic", fontFamily:"Luckiest Guy" }}>Whats your </span><span style={{color:"#2e7d32", fontStyle:"italic", fontFamily:"Luckiest Guy" }}>Box Type?</span></Typography>
            <Box display="flex" justifyContent="space-around">
                <BoxCard
                handleClick={() => {
                    navigate("/ourproduct", {replace:"true"});
                    window.scrollTo(150,150);
                }} 
                title="Adventure"
                img="https://www.wexinc.com/wp-content/uploads/2017/07/wex-adventure-tourism-600x315.jpg"
                description="For the strong hearted and thrill seekers, you will enjoy the feeling of impending doom while your mother calls you a bitch"
                />
                <BoxCard 
                title="Creative"
                img="https://miro.medium.com/max/883/1*2qATiDhFYwU0RqFCYNZ5TQ.jpeg"
                description="In case you cant lift your self out of bed and hate to look into the mirror every morning, this pack will direct yoru focus to your only true talent if you can even call it that"/>
                <BoxCard 
                title="Food"
                img="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
                description="Oh of course you're looking at this one, for fellas like you id reccomend the adventure box but hey the decision is yours, fatass"/>
            </Box>
            <br />
            <Box display="flex" justifyContent="space-evenly" >
                <BoxCard 
                title="Curiosity"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLY-l_ceWSnuq05xjIGsXlcVKiRaK0zozvw&usqp=CAU"
                description="Does the realm of this earth spark the inner child within you? Then this package will keep you curious untill the next box"
                />
                <BoxCard 
                title="Sleepy Gary"
                img="https://www.incimages.com/uploaded_files/image/1920x1080/jp-valery-DE9MM2voqKc-unsplash_414297.jpg"
                description="For those sleepy heads who want to spend as little time out of their miserable lives awake, going to bed will never be easier or more enjoyable"/>
            </Box>
        </Container>
    )
}

export default OurBoxes;