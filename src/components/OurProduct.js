import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import BoxPaper from "./subcomponent/BoxPaper";
import PetsIcon from '@mui/icons-material/Pets';
import CreateIcon from '@mui/icons-material/Create';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import { useEffect } from "react";


function OurProduct(props) {

    const scroll = props.productScroll;

    useEffect(() => {
        props.handleProductScroll();
    },[scroll]);

    return (
        <Container>
            <Box  display="flex" flexDirection="column" sx={{ marginTop:"180px"}}>
                <Typography align="center" pb={7} variant="h2" sx={{ fontFamily:"DynaPuff"}}>
                    <span style={{ color:"#499b4a" }}>Whats your </span> 
                    <span style={{ color:"#2e7d32"}}> personality like?</span>
                </Typography>
                <BoxPaper
                    img="https://m.media-amazon.com/images/I/91wUUmZljJL._SX1000_.jpg"
                    title="Adventure"
                    strain="Tangerine Sunrise"
                    items={["Binoculars", "Bird Book", "Hot Box Cap \u00AE", "Bug Repellent", "Whistle"]}
                    icon={<PetsIcon />} />
                <BoxPaper 
                    img="https://replicate.com/api/models/pixray/text2image/files/87f8fc35-45ba-4f02-9505-17d63c0f8e92/tempfile.png"
                    title="Creative"
                    strain="Purple Haze"
                    items={["Easel", "Paint", "Brush", "Idea Book", "Canvas Paper"]}
                    icon={<CreateIcon />}
                />
                <BoxPaper
                    img="https://i5.walmartimages.com/asr/a88c7a42-a662-44e6-911c-2ba3e36dc1e7.5104c3af044ca9f116836f8e5a2f1bf9.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
                    title="Food"
                    strain="Girl Scout Cookies"
                    items={["Exotic Snacks", "Japanese Candy", "CBD Drank", "Napkins", "Hot Box Bowl"+" \u00AE"]}
                    icon={<EggOutlinedIcon />}
                />
                <BoxPaper
                    img="https://replicate.com/api/models/pixray/text2image/files/d32d3a4c-ffcb-44ad-ab9e-ae05d250909f/tempfile.png"
                    title="Curiosity"
                    strain="Super Lemon Haze"
                    items={["Engineer Catapult", "VSauce Content", "Terpene Guide"]}
                    icon={<PsychologyOutlinedIcon />}
                />
                <BoxPaper
                    img="https://bump-boxes.imgix.net/online-store-images/bitsy-boxes/BitsyBoxes_NewbornBoy_GiftBox.png?auto=format%2Ccompress&q=75&fit=max&ixlib=react-9.0.2"
                    title="Restful"
                    strain="Purple Punch"
                    items={["Bath Salts", "Bath Bomb", "Scented Candle", "Incense", "Book"]}
                    icon={<BedtimeOutlinedIcon />}
                />
            </Box>
        </Container>
    )
}

export default OurProduct;