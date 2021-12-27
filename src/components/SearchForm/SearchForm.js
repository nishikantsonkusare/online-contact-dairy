import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchForm = (props) =>{

    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
        props.getSearch(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.getSearch(search);
    }

    return(
        <Paper component="form" sx={{ m: 2, p: '2px 4px', display: 'flex', alignItems: 'center'}} onSubmit={handleSubmit}>
            <InputBase sx={{ flexGrow: 1, ml: 1}} placeholder="Search Contact" inputProps={{'aria-label': 'Search Contact'}} value={search} onChange={handleChange} />
            <IconButton type="submit" sx={{ p: "10px"}} >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchForm;