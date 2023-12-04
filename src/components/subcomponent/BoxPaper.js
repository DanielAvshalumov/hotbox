import { Box, Button, Grid, Icon, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Buddy from "./bugIcon.png"

function BoxPaper(props) {

    const listItems = props.items.map((item,key) => (
        <ListItem key={key}>
            {props.icon}
            <ListItemText sx={{ textIndent:"40px", margin:0}}  >
                {item}
            </ListItemText>
        </ListItem>
    ))


    return (
        <Grid container>
            <Grid item md={4}>
                <Box bgcolor="primary.main" alignItems={"left"} display="flex" flexDirection="column" pb={9}>
                    <img src={props.img} style={{ borderRadius:"50px"}}/>
                    <Paper elevation={20} sx={{ borderRadius:"10px" }}>
                        <Typography pt={1} pb={2}align="center" variant="h5">{props.title}</Typography>
                        <Typography pl={3} variant="h6">Possible Content</Typography>
                        <List sx={{ lineHeight:"2.5"}}>
                            {listItems}
                        </List>
                    </Paper>
                </Box>
            </Grid>
            <Grid item md={8} sx={{ textIndent:20}}>
                <Box align={"left"} pl={3} pb={9}>
                    <Paper>
                        <Typography variant="h2" sx={{ fontFamily:"DynaPuff"}}>{`The ${props.title} Box`}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{}}>In stock</Typography>
                        <Typography variant="h3" sx={{}}>$23.45</Typography>
                        <Button variant="contained" startIcon={<ShoppingCartOutlinedIcon />} color="secondary" size="large" sx={{  marginTop:"10px",marginLeft:"20px", fontWeight:550}} >Add to Cart</Button>
                        <Typography variant="body2" fontSize={20} pt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at feugiat justo. Aliquam lacinia sed nisi et consequat. Nam vitae tempor ipsum. Vivamus ac consectetur nunc. Suspendisse eu risus ut diam pharetra bibendum et in lacus. Nam eu libero nibh. Nulla tincidunt tellus quis massa iaculis, ac convallis ipsum hendrerit. Vestibulum vitae nunc orci. Nam scelerisque sit amet lacus venenatis facilisis. Fusce accumsan mi ac cursus molestie. Integer at nisi libero. Vivamus consectetur ligula venenatis ullamcorper dictum. Vestibulum dignissim justo dolor, in posuere magna volutpat vel. Sed id elementum quam.</Typography>
                        <Box pt={2} display="flex" alignItems="center">
                            <Box component={"img"} src={Buddy} pt={1} pl={4} sx={{ width:"13%"}} />
                            <Typography fontFamily="Luckiest Guy" fontWeight={100} fontSize={25} variant="subtitle1" >Strain of the Box: {props.strain}</Typography>
                        </Box>
                        
                    </Paper>
                </Box>
            </Grid>
        </Grid> 
    )
}

export default BoxPaper;