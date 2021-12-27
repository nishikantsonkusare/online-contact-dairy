import { Paper, Typography, Collapse, Divider } from "@mui/material";
import { useState } from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box } from "@mui/system";

const CardItems = props => {

    const [open, setOpen] = useState(false);

    const handleFormOpen = () =>{
        setOpen(!open);
    }

    return (
        <>
            <Paper elevation={3} sx={{ p: 2, m: 2}}>
            <Box style={{cursor:"pointer"}} onClick={handleFormOpen}>
                <Typography align="left" variant="h6" fontWeight="bold" component="span">{props.name}</Typography>
                <div style={{float:"right", transform: "translateY(15%)" }}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </div>
            </Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Divider sx={{ pt: 1, mb: 1 }} />                  
                <Typography align="left" fontSize={16} fontWeight="bold" py={0.5}>Mobile No.: <Typography component="span">{props.mobile}</Typography></Typography>
                <Typography align="left" fontSize={16} fontWeight="bold" py={0.5}>Address: <Typography component="span">{props.address}</Typography></Typography>
            </Collapse>
            </Paper>
        </>
    )
};

export default CardItems;