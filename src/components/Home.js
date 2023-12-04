import { Button, Container, Paper, Typography, Box } from "@mui/material";
import React from "react";
import HotBox from "../images/hotbox.png"
import Bud from "../images/hotboxbud.png"
import Bong from "../images/hotboxbong.png"
import OurBoxes from "./OurBoxes";
import { useNavigate } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import BoxCard from "./subcomponent/BoxCard";


export default function Home(props) {

    let navigate = useNavigate();
    const handleScroll = e => {
        props.setProductScroll(e.target.id);
        navigate("/ourproduct", {replace:"true"});
    }

    return (
        <React.Fragment> 
            <Typography variant="h2" align="center" sx={{ color:"#2e7d32", fontFamily:"Luckiest Guy", height:"200px", fontWeight:"400", marginTop:"170px"}}>How to <span style={{ color:"#499b4a" }}>get started</span></Typography>
            <Container sx={{ display:"flex", marginTop:"0px"}}>
                <div>
                    <img src={Bud} style={{ height:'100px',marginLeft:"75px", marginTop:"0px", marginBottom:"50px"}} />
                    <Paper sx={{ padding:"15px", marginRight:"50px"}}><span style={{display:"flex", justifyContent:"center", fontWeight:"bold"}}>Step One</span><br/><br/>It seems like copy and pasting information here fucks shit up</Paper>
                </div>
                <div>
                    <img src={Bong} style={{ height:'150px',marginLeft:"140px", marginTop:"-49px", marginBottom:"50px"}} />
                    <Paper sx={{ padding:"15px", marginRight:"50px"}}><span style={{display:"flex", justifyContent:"center", fontWeight:"bold"}}>Step Two</span><br/><br/>It seems like copy and pasting information here fucks shit up</Paper>
                </div>
                <div>
                    <img src={HotBox} style={{height:'140px', marginLeft:"66px"}} />
                    <Paper sx={{ padding:"15px", marginTop:"12px", height:"150px"}}><span style={{display:"flex", justifyContent:"center", fontWeight:"bold"}}>Step Three</span><br/><br/>It seems like copy and pasting information here fucks shit up</Paper>
                </div>
            </Container>
            <br/>
            <Container align="center" sx={{ marginTop:"30px"}}>
                <Button onClick={() => {
                    props.setProductScroll("default");
                    navigate("/ourproduct",{replcaed:"true"});
                    }} 
                    variant="contained" sx={{width:"250px", height:"100px", fontSize:"20px", fontWeight:"700"}}>Get your box today!</Button>
            </Container>
            <Box pl={44}>
                <NewsLetter />
            </Box>
            <Container align="center" sx={{ display:"flex", flexDirection:"column", marginTop:"50px"}}>
            <Typography  variant="h2" sx={{ marginBottom:"40px"}}><span style={{color:"#499b4a", fontStyle:"italic", fontFamily:"Luckiest Guy" }}>Whats your </span><span style={{color:"#2e7d32", fontStyle:"italic", fontFamily:"Luckiest Guy" }}>Box Type?</span></Typography>
            <Box display="flex" justifyContent="space-around">
                <BoxCard
                handleClick={handleScroll} 
                title="Adventure"
                img="https://www.wexinc.com/wp-content/uploads/2017/07/wex-adventure-tourism-600x315.jpg"
                description="For the strong hearted and thrill seekers, you will enjoy the feeling of impending doom while your mother calls you a bitch"
                />
                <BoxCard
                handleClick={handleScroll} 
                title="Creative"
                img="https://miro.medium.com/max/883/1*2qATiDhFYwU0RqFCYNZ5TQ.jpeg"
                description="In case you cant lift your self out of bed and hate to look into the mirror every morning, this pack will direct yoru focus to your only true talent if you can even call it that"/>
                <BoxCard
                handleClick={handleScroll} 
                title="Food"
                img="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
                description="Oh of course you're looking at this one, for fellas like you id reccomend the adventure box but hey the decision is yours, fatass"/>
            </Box>
            <br />
            <Box display="flex" justifyContent="space-evenly" >
                <BoxCard 
                handleClick={handleScroll}
                title="Curiosity"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLY-l_ceWSnuq05xjIGsXlcVKiRaK0zozvw&usqp=CAU"
                description="Does the realm of this earth spark the inner child within you? Then this package will keep you curious untill the next box"
                />
                <BoxCard
                handleClick={handleScroll} 
                title="Sleepy Gary"
                img="https://www.incimages.com/uploaded_files/image/1920x1080/jp-valery-DE9MM2voqKc-unsplash_414297.jpg"
                description="For those sleepy heads who want to spend as little time out of their miserable lives awake, going to bed will never be easier or more enjoyable"/>
            </Box>
        </Container>
            
            
        </React.Fragment>
    )
}