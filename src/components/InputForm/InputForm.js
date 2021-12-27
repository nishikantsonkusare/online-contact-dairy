import { TextField, Paper, Typography, Button, Divider, Modal } from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material";
import ErrorModal from "../ErrorModal/ErrorModal";

const style={
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "Translate(50%, -50%)",
    padding: "10px"
}

const InputForm = (props) => {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const [errorStatus, setErrorStatus] = useState(false);

    const handleClose = () =>{
        props.getStatusInputForm(false);
    }

    const handleName= (event) =>{
        setName(event.target.value);
    }

    const handleMobile = (event) =>{
        setMobile(event.target.value);
    }

    const handleAddress = (event) =>{
        setAddress(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let flag = 0;
        // Below statement used for check all textfield have a value or not.
        if(name.length === 0 || mobile.length === 0 || address.length === 0){
            setError("Please enter value into field.");
            setErrorStatus(true);
            return;
        } 

        // Below statement used for check mobile number validation.
        if(isNaN(mobile) || mobile.length !== 10 || parseInt(mobile) < 0){
            setError("Please enter valid mobile number.");
            setErrorStatus(true);
            return;
        } 

        props.contactDetail.map( value => {
            if( parseInt(value.mobile) === parseInt(mobile) ){
                flag = 1;
                return flag;
            }
            return value;
        });

        if (flag === 1){
            setError("Mobile number is already exists in contact dairy.");
            setErrorStatus(true);
            return;
        }
        
        props.getContact({id: Math.random().toString(), name: name, mobile: mobile, address: address});
        props.getStatusInputForm(false);
    }

    const handleErrorModal = (value) =>{
        setErrorStatus(value);
    }

    return(
        <>

            <ErrorModal error={error} errorStatus={errorStatus} getErrorModalStatus={handleErrorModal} />

            <Modal open={props.inputFormStatus} onClose={handleClose}>
                <form onSubmit={handleFormSubmit}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} sx={style}>
                            <Paper elevation={2} sx={{ padding: 2 }}>
                                <Typography align="center" variant="h6" fontWeight="bold">New Contact</Typography>             
                                <Divider sx={{pt: 1, mb: 1}} />
                                <TextField fullWidth margin="normal" label="Name" size="small" value={name} onChange={handleName}  />
                                <TextField fullWidth margin="normal" label="Mobile Number" size="small" value={mobile} onChange={handleMobile} />
                                <TextField fullWidth margin="normal" label="Address" size="small" multiline rows={3} value={address} onChange={handleAddress} />
                                <Typography align="center" my={2}>
                                    <Button type="submit" color="secondary" variant="contained">New Records</Button>
                                    <Button variant="contained" style={{marginLeft: 10}} onClick={handleClose}>Cancel</Button>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </form>
            </Modal>
        </>
    )
};

export default InputForm;