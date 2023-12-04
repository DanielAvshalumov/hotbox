import { Container, TextField, Typography, Box, Checkbox, FormControlLabel, Button } from "@mui/material";


function Contact() {
    

    return (
        <Container align="center" sx={{ marginTop:"200px"}}>
            <Typography variant="h2">Hit Us Up</Typography>
            <form style={{ marginTop:"30px"}}>
                <Box display="flex" justifyContent={"space-evenly"} sx={{ }}>
                    <TextField variant="standard" label="Name" color="secondary"></TextField>
                    <TextField autoComplete="false" variant="standard" label="Email" color="secondary"></TextField>
                </Box>
                <Box sx={{ marginTop:"40px"}}>
                    <TextField 
                    label="Message" 
                    size="large"
                    fullWidth
                    multiline
                    rows={12}
                    color="secondary" />  
                </Box>
                <br />
                <FormControlLabel control={
                    <Checkbox color="secondary" />
                }
                    label="Sign up to the Hot Box Newsletter"
                 />
                 <Button variant="contained">Submit</Button>
            </form>
        </Container>
    )
}

export default Contact;