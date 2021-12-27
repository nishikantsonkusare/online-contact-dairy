import { Typography, Grid, Paper, AppBar, Toolbar, Fab } from "@mui/material";
import { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import Card from "./components/Card/Card";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add"
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => {

    if (localStorage.getItem("contactDairy") == null){
        const contactDairy = []
        localStorage.setItem("contactDairy", JSON.stringify(contactDairy));
    }

    const [contactData, setContactData] = useState(JSON.parse(localStorage.getItem("contactDairy")));
    const [inputForm, setInputForm] = useState(false);
    const [search, setSearch] = useState('');

    // Below code get data from InputForm.js file (This is callback function to get data.)
    const getNewContact = contact => {
        setContactData( prevState => {
            const updateContactdairy = [...prevState, contact];
            localStorage.setItem("contactDairy", JSON.stringify(updateContactdairy));
            return updateContactdairy;
        });
    }

    // This code help to show contact input form
    const handleInputForm = () => {
        setInputForm(true);
    }

    // This function get contact form input status from InputForm.js
    const statusInputForm = (value) => {
        setInputForm(value);
    }

    // This function get search value from SearchForm.js file.
    const handleSearch = (value) => {
        setSearch(value);
    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={4} sx={{ position: "relative", height: "100vh" }}>
                        <AppBar color="secondary" position="static">
                            <Toolbar>
                                <Typography align="center" fontWeight="bold" variant="h6">Online Contact Dairy</Typography>
                            </Toolbar>
                        </AppBar>
                        <SearchForm getSearch={handleSearch} />
                        <Box sx={{ position: "absolute", bottom: "5%", right: "5%", zIndex: "1"}}>
                            <Fab color="secondary" aria-label="add" onClick={handleInputForm}>
                                <AddIcon />
                            </Fab>
                        </Box>

                        {inputForm && <InputForm getContact={getNewContact} inputFormStatus={inputForm} getStatusInputForm={statusInputForm} contactDetail={contactData} /> }
                        
                        {contactData.length !==0 && <Box sx={{ height: "80vh", overflowY: "auto" }}><Card contactDetail={contactData} searchData={search} /></Box> }
                        {contactData.length ===0 && <Typography mt={4} align="center">No Contact in Dairy.</Typography> }

                    </Paper>
                </Grid>
            </Grid>
        </>
    )
};

export default App;