import { AppBar, Box, IconButton, styled, Toolbar, Button, Typography, ButtonGroup, useScrollTrigger, Slide, Container, Drawer, CssBaseline} from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from "react-router-dom";


function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}


export default function NavBar(props) {

    let navigate = useNavigate();    

    const StyledToolBar = styled(Toolbar)(( {theme} ) => ({
        alignItem: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        '@media all': {
            minHeight: 128,
        }
    }));


    return (
        <>
            <CssBaseline />
            <HideOnScroll>
                <AppBar sx={{width:"90%",height:"130px", border:"solid 2px", borderRadius:"30px", borderColor:"#2e7d32", display:"flex", marginRight:"70px"}}>
                    <StyledToolBar sx={{ }}>
                        <Typography
                            color="gray"
                            variant="h3"
                            noWrap
                            component="div"
                            sx={{ fontFamily:"clouds", fontSize:"60px", flexGrow: 1, alignSelf: 'flex-start', padding:1, fontWeight:"100" ,width:"800px" }}
                        >
                            The Hot Box
                        </Typography>
                        <ButtonGroup fullWidth sx={{ marginBottom:"20px", height:"140px", width:"1400px"}}>
                            <Button onClick={() => {navigate("/", {replace:"true"});}}
                            variant="contained" color="secondary" sx={{ marginRight:"40px", marginTop:"100px" }}>Home</Button>

                            <Button onClick={() =>{ navigate("about",{replace:"true"});}}
                             variant="contained" color="secondary" sx={{ marginRight:"40px", marginTop:"100px" }}>About Us</Button>

                            <Button onClick={() => { 
                                props.setProductScroll("default");
                                navigate("ourproduct", {replace: "true"});
                            }}
                            variant="contained" color="secondary" sx={{textAlign:"center", padding:"20px", width:"450px", marginRight:"40px", marginTop:"100px" }}>Our Product</Button>

                            <Button onClick={() => { navigate("contact", {replace:"true"});}}
                            variant="contained" color="secondary" sx={{ marginRight:"50%", marginTop:"100px" }}>Contact Us</Button>
                        </ButtonGroup>
                        <IconButton
                            size= "small"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <ShoppingBagOutlinedIcon color="secondary" sx={{ fontSize:"50px" }} />
                        </IconButton>
                    </StyledToolBar>
                </AppBar>
            </HideOnScroll>
            
        </>
    )
}