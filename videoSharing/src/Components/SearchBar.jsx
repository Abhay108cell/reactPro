import { useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const SearchBar =({searchItem}) =>{
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event)=> setSearchTerm(event.target.value)

  const onKeyPress = (event)=>{
    if(event.key === "Enter"){
      onsubmit(searchItem);
    }
  }
  

  return(
    <Paper elevation={6}  styling={{padding : "25px" }}>
      <TextField 
      label="Search..."
      fullWidth
      value={searchTerm}
      onChange={handleChange}
      onKeyPress={onKeyPress}
        />
    </Paper>
  )
}

export default SearchBar;