import { Opacity } from "@mui/icons-material";
import { Typography, Container, Divider, Grid, Paper } from "@mui/material";
import NewsLetter from "./NewsLetter";


function About() {

    return (
        <Container>
            <Grid align="center" container>
                <Grid  md={12} item>
                    <Typography variant="h2" fontFamily="Maven Pro" sx={{ marginTop:"200px", marginBottom:"20px"}}>Our Mission</Typography>
                    <Typography variant="body1" fontSize={20} fontFamily="Maven Pro" sx={{ width:"80%" }}>{"Why isnt this a wonderful day to smoke some weed! ".repeat(10)}</Typography>
                </Grid>
                
                <Divider fullWidth orientation="vertical" />
                <Grid pt={6} pr={5} item md={6}>
                    {/* <Paper variant="elevation" align="left" elevation={10} sx={{ borderRadius:"20px", backgroundColor:"transparent"}}> */}
                        <Typography variant="h2"align="center" pb={4} fontSize={40} fontFamily="Maven Pro">The ManBoy behind the Box</Typography>
                        <img
                        style={{ borderRadius:"20px", width:"100%" }}
                        src="https://scontent-lga3-2.xx.fbcdn.net/v/t31.18172-8/883809_589382964405270_1486983831_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=de6eea&_nc_ohc=NGWBHTMjcKYAX9FiexJ&_nc_ht=scontent-lga3-2.xx&oh=00_AT_C4a_u0yGdR7DlURlUYx7tixxnk5cNCzFxlkOoZkkrFQ&oe=6320F811" />
                    {/* </Paper> */}
                </Grid>
                <Divider orientation="vertical" />
                <Grid item md={4} pt={6}>
                    <NewsLetter />
                </Grid>
                <Grid item pl={3} md={6}>
                    <Typography pt={2} align="left" fontSize={20} fontFamily="Maven Pro" sx={{ textIndent:"50px"}}>{"This is Simon's bio and inspiration of weed ".repeat(16)}}</Typography>
                </Grid>
                
            </Grid>
        </Container>
    )
}

export default About;