import { Button, Divider, Grid, Modal, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "Translate(-50%, -50%)",
    width: "100%",
    padding: "0 1rem"
}

const ErrorModal = (props) =>{

    const handleClose = () =>{
        props.getErrorModalStatus(false);
    }

    return (
        <>
            <Modal open={props.errorStatus} onClose={handleClose}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} sx={style}>
                        <Paper elevation={4}>
                            <Box bgcolor="#9c27b0" sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, py: 1 }}>
                                <Typography color="white" align="center" fontWeight="bold">
                                    Warning
                                </Typography>
                            </Box>
                            <Box py={2} px={1}>
                                <Typography>
                                    {props.error}
                                </Typography>
                            </Box>
                            <Divider />
                            <Typography align="right" p={1}>
                                <Button type="button" variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Modal>
        </>
    )
    
};

export default ErrorModal;