import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import hotLeaf from "../images/PngItem_507689.png";


const NewsLetter = () => {

    return(
        
            <Grid container>
                <Box display="flex" flexDirection="column" justifyContent={"center"} alignItems="center" padding={5}>
                    <Typography variant="h3" fontFamily="Luckiest Guy" color="secondary" pt={3}>Subscribe to our Newsletter</Typography>
                    <Grid item display="flex" justifyContent={"center"} alignItems="center" pb={5} pt={4}>
                        <Box component="img" sx={{ width:"70px" }} src={hotLeaf} />
                        <Typography variant="h5" fontWeight="bold" pl={1}>Receive weekly emails about The Hot Box</Typography>
                    </Grid> 
                    <TextField autoComplete="off" color="secondary" label="Email" sx={{ width:"400px"}}></TextField>
                    <Grid item pt={3}>
                        <Button variant='contained'>Submit</Button>
                    </Grid>
                </Box>
                
            </Grid>
        
    )
}

export default NewsLetter;